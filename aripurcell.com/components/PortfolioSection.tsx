import styles from '../styles/Home.module.css'
import React, { forwardRef } from 'react';

const portfolioItems = [
  {
    title: 'Article.com Website',
    link: 'https://www.article.com/',
    subtitle: 'article.com, 2017 - 2021',
    description: 'With a team, built and maintained the full website experience on article.com.',
    images: [[{
      src: '/portfolio-article-cart.png',
      alt: ''
    }, {
      src: '/portfolio-article-browse.png',
      alt: ''
    }, {
      src: '/portfolio-article-review.png',
      alt: ''
    }, {
      src: '/portfolio-article-search.png',
      alt: ''
    }, {
      src: '/portfolio-article-support.png',
      alt: ''
    }, {
      src: '/portfolio-article-mobile.png',
      alt: ''
    }]]
  },
  {
    title: 'Pixel Component Library',
    subtitle: 'article.com, 2018',
    description: 'In collaboration with UX, built and maintained a style guide and component library used in internal and externally facing software projects.',
    images: [[{
      src: '/portfolio-article-pixel-1.png',
      alt: ''
    }, {
      src: '/portfolio-article-pixel-2.png',
      alt: ''
    }, {
      src: '/portfolio-article-pixel-3.png',
      alt: ''
    }]]
  },
  {
    title: 'Furniture AR Viewer',
    subtitle: 'article.com, 2021',
    description: 'As part of an exploratory project, implemented an augmented reality furniture viewer on the article.com website.',
    images: [[{
      src: '/portfolio-article-ar-1.png',
      alt: ''
    }, {
      src: '/portfolio-article-ar-2.png',
      alt: ''
    }]]
  },
  {
    title: 'Warehouse Scanner App',
    subtitle: 'article.com, 2017',
    description: 'Implemented a warehouse management tool to improve accuracy and efficiency while moving stock.',
    images: [[{
      src: '/portfolio-article-scan-1.png',
      alt: ''
    }, {
      src: '/portfolio-article-scan-2.png',
      alt: ''
    }, {
      src: '/portfolio-article-scan-3.png',
      alt: ''
    }]]
  },
  {
    title: 'Medicines Web App',
    link: 'https://orionhealth.com/uk/products/medicines/',
    subtitle: 'Orion Health, 2014 - 2017',
    description: 'Built Medicines features and maintained the Medicines web application for managing patient medications in healthcare settings.',
    images: [[{
      src: '/portfolio-orion-medicines.png',
      alt: 'Orion Health Medicines'
    }]]
  },
  {
    title: 'Visualising a Live Coding Arts Process',
    link: 'http://dl.acm.org/citation.cfm?id=2686634',
    subtitle: `Research Paper / OzChi '14, 2014`,
    description: 'Published a research paper based on the results of the undergraduate thesis.',
    images: [[{
      src: '/portfolio-uni-paper.png',
      alt: 'Visualising a Live Coding Arts Process Paper'
    }]]
  },
  {
    title: 'Art and Understanding through Code Visualisation',
    link: 'https://github.com/arrian/research-project/blob/master/thesis/thesis.pdf',
    subtitle: `ANU Undergraduate Thesis, 2014`,
    description: 'Explored methods of code visualisation and conducted user studies to determine their effectiveness.',
    images: [[{
      src: '/portfolio-uni-thesis-1.png',
      alt: ''
    }, {
      src: '/portfolio-uni-thesis-2.png',
      alt: ''
    }, {
      src: '/portfolio-uni-thesis-3.png',
      alt: ''
    }]]
  },
  {
    title: 'Social Landscape',
    subtitle: `Android App, 2013`,
    description: 'As part of a university project alongside an external company, our team implemented an Android app for displaying population statistics.',
    images: [[{
      src: '/portfolio-social-landscape-1.png',
      alt: ''
    }, {
      src: '/portfolio-social-landscape-2.png',
      alt: ''
    }]]
  },
  {
    title: 'Coding',
    subtitle: `Ongoing`,
    descriptions: [
      <div className={styles.projectDescription}>I publish side projects, experiments and code across <a className={styles.link} href="https://github.com/arrian">Github</a>, <a className={styles.link} href="https://www.youtube.com/@codebyari">Youtube (@codebyari)</a>, <a className={styles.link} href="https://www.npmjs.com/~arrian">NPM</a> and <a className={styles.link} href="https://codepen.io/arrian">CodePen</a>.</div>,
      <div className={styles.projectDescription}>Some example projects include websocket poker, FHIR validator, code graph, planet search and sony camera js api.</div>
    ]
  },
  {
    title: 'Art / Photography',
    subtitle: `Ongoing`,
    descriptions: [
      <div className={styles.projectDescription}>As a side project, I occasionally publish paintings on <a className={styles.link} href="https://www.youtube.com/@art-by-ari">Youtube (@art-by-ari)</a> and photos on <a className={styles.link} href="https://www.flickr.com/photos/197031237@N08/">Flickr</a>.</div>
    ],
    images: [[{
      src: '/portfolio-art-3.png',
      alt: ''
    }, {
      src: '/portfolio-art-1.png',
      alt: ''
    }],
    [{
      src: '/portfolio-photo-2.png',
      alt: ''
    }, {
      src: '/portfolio-photo-3.png',
      alt: ''
    }, {
      src: '/portfolio-photo-4.png',
      alt: ''
    }]]
  },
  {
    title: 'This Website ;)',
    link: '#home',
    subtitle: `2022`,
    images: [[{
      src: '/portfolio-portfolio.png',
      alt: ''
    }]]
  }
];

const HomeSection = forwardRef((props: { active: boolean, pagePercent: number, scroll: Record<string, Function> }, ref: React.Ref<HTMLDivElement>) => {

  return (
    <section className={`${styles.portfolio} ${styles.container}`} ref={ref} id="portfolio">
      <h2 className={styles.sectionHeader}>Portfolio</h2>

      {
        portfolioItems.map(item => <div>
          { item.link ? <a href={item.link}><h3>{item.title} <i className="icon icon-arrow-right"></i></h3></a> : <h3>{ item.title }</h3>}
          { item.subtitle ? <div className={styles.projectDescriptionSubtitle}>{ item.subtitle }</div> : '' }
          { item.description ? <div className={styles.projectDescription}>{ item.description }</div> : '' }
          { item.descriptions ? item.descriptions : '' }
          { item.images && item.images.length ? 
            item.images.map(imageStack => <div className={styles.projectImageStack}>
              { imageStack.map((image, index) => <img src={image.src} alt={image.alt} />) }
            </div>)
           : ''}
        </div>
        )
      }
    </section>
  );
});

export default HomeSection;