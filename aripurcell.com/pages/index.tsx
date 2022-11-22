import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useEffect, useState, useRef } from 'react';
import HomeSection from '../components/HomeSection';
import ProfileSection from '../components/ProfileSection';
import ExperienceSection from '../components/ExperienceSection';
import PortfolioSection from '../components/PortfolioSection';
import ContactSection from '../components/ContactSection';
import Navigation from '../components/Navigation';
import throttle from '../utils/throttle';

interface Section {
  name: string;
  height: number | undefined;
}

interface Dimensions {
  width: number | undefined;
  height: number | undefined;
}

export default function Home() {

  const [windowSize, setWindowSize] = useState<Dimensions>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [section, setSection] = useState('home');
  const [pagePercent, setPagePercent] = useState(0);

  const [sections, setSections] = useState<Section[]>([]);

  const homeRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log('offsetHeight', homeRef.current?.offsetHeight);
    setSections([
      { name: 'home', height: homeRef.current?.offsetHeight },
      { name: 'profile', height: profileRef.current?.offsetHeight },
      { name: 'experience', height: experienceRef.current?.offsetHeight },
      { name: 'portfolio', height: portfolioRef.current?.offsetHeight },
      { name: 'contact', height: contactRef.current?.offsetHeight }
    ]);
  }, [homeRef, profileRef, portfolioRef, experienceRef, contactRef, windowSize]);

  useEffect(() => {
    calculateSection();
  }, [sections, pagePercent]);

  const scroll: Record<string, Function> = {
    home: () => window.scrollTo({top: 0, behavior: 'smooth'}),
    profile: () => profileRef.current?.scrollIntoView({ behavior: 'smooth' }),
    portfolio: () => portfolioRef.current?.scrollIntoView({ behavior: 'smooth' }),
    experience: () => experienceRef.current?.scrollIntoView({ behavior: 'smooth' }),
    contact: () => contactRef.current?.scrollIntoView({ behavior: 'smooth' })
  };

  const calculateSection = () => {
    const scrollTop = document.documentElement.scrollTop;

    const h = document.documentElement;
    const b = document.body;
    setPagePercent((h.scrollTop||b.scrollTop) / ((h.scrollHeight||b.scrollHeight) - h.clientHeight));

    let height = -200;
    sections.some(s => {
      height += (s.height || 0);
      
      if(scrollTop < height) {
        if(s.name !== section) {
          setSection(s.name);
          if(s.name === 'home') history.replaceState(null, document.title, window.location.pathname + window.location.search);
          else history.replaceState(null, document.title, '#' + s.name);
        }
        return true;
      }
      return false;
    });
  };

  useEffect(() => {
    const onScroll = throttle(calculateSection, 100);
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const sectionToFavicon : Record<string, string> = {
    profile: '/favicon-c.ico',
    portfolio: '/favicon-m.ico',
    experience: '/favicon.ico',
    contact: '/favicon-k.ico',
    home: '/favicon-k.ico'
  };

  return (
    <div>
      <Head>
        <title>Ari Purcell</title>
        <meta name="description" content="Portfolio website of Arrian Purcell, the software engineer designing interfaces." />
        <link rel="icon" href={ sectionToFavicon[section] || "/favicon.ico"} />
      </Head>
      <div className={styles.page} data-section={section}>
        <div className={styles.colorBar}>
        </div>
        
        <header className={styles.header}>
          <div className={styles.container}>
            <div className={styles.name}>
              <a onClick={() => scroll.home()} className={styles.firstName}>A<span className={styles.nameLong}>ri</span></a>
              <a onClick={() => scroll.home()} className={styles.lastName}>P<span className={styles.nameLong}>urcell</span></a>
              <div className={styles.sectionName}>
                <h2 className={styles.sectionNameText}>
                {section}
                </h2>
              </div>
            </div>
          </div>
        </header>
        
        <div className={styles.content}>
            <HomeSection active={ section === 'home' } pagePercent={ pagePercent } ref={homeRef}></HomeSection>
            <ProfileSection active={ section === 'profile' } pagePercent={ pagePercent } ref={profileRef}></ProfileSection>
            <ExperienceSection active={ section === 'experience' } pagePercent={ pagePercent } ref={experienceRef}></ExperienceSection>
            <PortfolioSection active={ section === 'portfolio' } pagePercent={ pagePercent } ref={portfolioRef} scroll={scroll}></PortfolioSection>
            <ContactSection active={ section === 'contact' } pagePercent={ pagePercent } ref={contactRef}></ContactSection>

            <Navigation scroll={scroll}></Navigation>
        </div>
      </div>


    </div>
  )
}

