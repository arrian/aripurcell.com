import styles from '../styles/Home.module.css'
import React from 'react';

const HomeSection = (props: { scroll: Record<string, Function> }) => {

  return (
    <div className={styles.container}>
      <nav className={styles.navigation}>
        <div>
          <a onClick={() => props.scroll.profile()} className={styles.cyan} data-target="profile">Profile</a>
        </div>
        <div>
          <a onClick={() => props.scroll.experience()} className={styles.yellow} data-target="experience">Experience</a>
        </div>
        <div>
          <a onClick={() => props.scroll.portfolio()} className={styles.magenta} data-target="portfolio">Portfolio</a>
        </div>
        <div>
          <a onClick={() => props.scroll.contact()} className={styles.black} data-target="contact">Contact</a>
        </div>
      </nav>
    </div>
  );
};

export default HomeSection;