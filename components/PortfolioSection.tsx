import styles from '../styles/Home.module.css'
import React, { forwardRef } from 'react';

import arrowRightImage from '../public/arrow-right.svg';

import cartImage from '../public/portfolio-article-cart-w640.webp';
import browseImage from '../public/portfolio-article-browse-w640.webp';
import reviewImage from '../public/portfolio-article-review-w640.webp';
import searchImage from '../public/portfolio-article-search-w640.webp';
import supportImage from '../public/portfolio-article-support-w640.webp';
import mobileImage from '../public/portfolio-article-mobile-w640.webp';
import pixel1Image from '../public/portfolio-article-pixel-1-w640.webp';
import pixel2Image from '../public/portfolio-article-pixel-2-w640.webp';
import pixel3Image from '../public/portfolio-article-pixel-3-w640.webp';
import ar1Image from '../public/portfolio-article-ar-1-w640.webp';
import ar2Image from '../public/portfolio-article-ar-2-w640.webp';
import scan1Image from '../public/portfolio-article-scan-1-w640.webp';
import scan2Image from '../public/portfolio-article-scan-2-w640.webp';
import scan3Image from '../public/portfolio-article-scan-3-w640.webp';
import medicinesImage from '../public/portfolio-orion-medicines-w640.webp';
import paperImage from '../public/portfolio-uni-paper-w640.webp';
import thesis1Image from '../public/portfolio-uni-thesis-1-w640.webp';
import thesis2Image from '../public/portfolio-uni-thesis-2-w640.webp';
import thesis3Image from '../public/portfolio-uni-thesis-3-w640.webp';
import social1Image from '../public/portfolio-social-landscape-1-w640.webp';
import social2Image from '../public/portfolio-social-landscape-2-w640.webp';
import art3Image from '../public/portfolio-art-3-w640.webp';
import art1Image from '../public/portfolio-art-1-w640.webp';
import photo2Image from '../public/portfolio-photo-2-w640.webp';
import photo3Image from '../public/portfolio-photo-3-w640.webp';
import photo4Image from '../public/portfolio-photo-4-w640.webp';
import portfolioImage from '../public/portfolio-portfolio-w640.webp';

const portfolioItems = [
  {
    title: 'Article.com Website',
    link: 'https://www.article.com/',
    subtitle: 'article.com, 2017 - 2021',
    description: 'With a team, built and maintained the full website experience on article.com.',
    images: [[{
      src: cartImage,
      alt: 'Article.com cart page example'
    }, {
      src: browseImage,
      alt: 'Article.com browse page example'
    }, {
      src: reviewImage,
      alt: 'Article.com review page example'
    }, {
      src: searchImage,
      alt: 'Article.com search page example'
    }, {
      src: supportImage,
      alt: 'Article.com support page example'
    }, {
      src: mobileImage,
      alt: 'Article.com mobile pdp example'
    }]]
  },
  {
    title: 'Pixel Component Library',
    subtitle: 'article.com, 2018',
    description: 'In collaboration with UX, built and maintained a style guide and component library used in internal and externally facing software projects.',
    images: [[{
      src: pixel1Image,
      alt: ''
    }, {
      src: pixel2Image,
      alt: ''
    }, {
      src: pixel3Image,
      alt: ''
    }]]
  },
  {
    title: 'Furniture AR Viewer',
    subtitle: 'article.com, 2021',
    description: 'As part of an exploratory project, implemented an augmented reality furniture viewer on the article.com website.',
    images: [[{
      src: ar1Image,
      alt: ''
    }, {
      src: ar2Image,
      alt: ''
    }]]
  },
  {
    title: 'Warehouse Scanner App',
    subtitle: 'article.com, 2017',
    description: 'Implemented a warehouse management tool to improve accuracy and efficiency while moving stock.',
    images: [[{
      src: scan1Image,
      alt: ''
    }, {
      src: scan2Image,
      alt: ''
    }, {
      src: scan3Image,
      alt: ''
    }]]
  },
  {
    title: 'Medicines Web App',
    link: 'https://orionhealth.com/uk/products/medicines/',
    subtitle: 'Orion Health, 2014 - 2017',
    description: 'Built Medicines features and maintained the Medicines web application for managing patient medications in healthcare settings.',
    images: [[{
      src: medicinesImage,
      alt: 'Orion Health Medicines'
    }]]
  },
  {
    title: 'Visualising a Live Coding Arts Process',
    link: 'http://dl.acm.org/citation.cfm?id=2686634',
    subtitle: `Research Paper / OzChi '14, 2014`,
    description: 'Published a research paper based on the results of the undergraduate thesis.',
    images: [[{
      src: paperImage,
      alt: 'Visualising a Live Coding Arts Process Paper'
    }]]
  },
  {
    title: 'Art and Understanding through Code Visualisation',
    link: 'https://github.com/arrian/research-project/blob/master/thesis/thesis.pdf',
    subtitle: `ANU Undergraduate Thesis, 2014`,
    description: 'Explored methods of code visualisation and conducted user studies to determine their effectiveness.',
    images: [[{
      src: thesis1Image,
      alt: ''
    }, {
      src: thesis2Image,
      alt: ''
    }, {
      src: thesis3Image,
      alt: ''
    }]]
  },
  {
    title: 'Social Landscape',
    subtitle: `Android App, 2013`,
    description: 'As part of a university project alongside an external company, our team implemented an Android app for displaying population statistics.',
    images: [[{
      src: social1Image,
      alt: ''
    }, {
      src: social2Image,
      alt: ''
    }]]
  },
  {
    title: 'Coding',
    subtitle: `Ongoing`,
    descriptions: [
      <div className={styles.projectDescription}>I publish side projects, experiments and code across <a className={styles.link} href="https://github.com/arrian">Github</a>, <a className={styles.link} href="https://www.npmjs.com/~arrian">NPM</a> and <a className={styles.link} href="https://codepen.io/arrian">CodePen</a>.</div>,
      //<a className={styles.link} href="https://www.youtube.com/@codebyari">Youtube (@codebyari)</a>
      <div className={styles.projectDescription}>Some example projects include websocket poker, FHIR validator, code graph, planet search and sony camera js api.</div>
    ]
  },
  {
    title: 'Art',
    subtitle: `Ongoing`,
    descriptions: [
      <div className={styles.projectDescription}>As a side project, I occasionally publish paintings on <a className={styles.link} href="https://www.youtube.com/@art-by-ari">Youtube (@art-by-ari)</a>.</div>
    ],
    images: [[{
      src: art3Image,
      alt: ''
    }, {
      src: art1Image,
      alt: ''
    }]]
  },
  {
    title: 'This Website ;)',
    link: '#home',
    subtitle: `2022`,
    images: [[{
      src: portfolioImage,
      alt: ''
    }]]
  }
];

const ConditionalLink = ({ link, children } : { link: string | undefined, children: React.ReactNode }) => 
  link ? <a className={styles.portfolioItem} href={link}>{children}</a> : <div className={styles.portfolioItem}>{children}</div>;

const HomeSection = forwardRef((props: { active: boolean, pagePercent: number, scroll: Record<string, Function> }, ref: React.Ref<HTMLDivElement>) => {

  return (
    <section className={`${styles.portfolio} ${styles.container}`} ref={ref} id="portfolio">
      <h2 className={styles.sectionHeader}>Portfolio</h2>
      <div className={styles.portfolioGrid}>
      {
        portfolioItems.map(item => <ConditionalLink link={item.link}>
          <h3>{ item.title } { item.link ? <img className={styles.portfolioItemLinkArrow} src={arrowRightImage.src} /> : null}</h3>
          { item.subtitle ? <div className={styles.projectDescriptionSubtitle}>{ item.subtitle }</div> : '' }
          { item.description ? <div className={styles.projectDescription}>{ item.description }</div> : '' }
          { item.descriptions ? item.descriptions : '' }
          { item.images && item.images.length ? 
            item.images.map(imageStack => <div className={styles.projectImageStack}>
              { imageStack.map((image, index) => <img className={styles.portfolioImage} src={image.src.src} alt={image.alt} width={image.src.width < 200 ? image.src.width : 200} height={ image.src.width < 200 ? image.src.height : image.src.height * (200 / image.src.width) } />) }
            </div>)
           : ''}
        </ConditionalLink>
        )
      }
      </div>
    </section>
  );
});


export default HomeSection;