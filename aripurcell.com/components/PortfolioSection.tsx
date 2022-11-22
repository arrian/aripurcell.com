import styles from '../styles/Home.module.css'
import React, { forwardRef } from 'react';

const HomeSection = forwardRef((props: { active: boolean, pagePercent: number, scroll: Record<string, Function> }, ref: React.Ref<HTMLDivElement>) => {

  return (
    <section className={`${styles.portfolio} ${styles.container}`} ref={ref} id="portfolio">
      <h2 className={styles.sectionHeader}>Portfolio</h2>
      <div>
        <a href="https://www.article.com/"><h3>Article.com Website <i className="icon icon-arrow-right"></i></h3></a>
        <div className={styles.projectDescriptionSubtitle}>article.com, 2017 - 2021</div>
        <div className={styles.projectDescription}>With a team, built and maintained the full website experience on article.com.</div>
        <div className={styles.projectImageStack}>
          <img src="/portfolio-article-cart.png" alt="Article.com cart" />
          <img src="/portfolio-article-browse.png" alt="Article.com browse" />
          {/* <img src="/portfolio-article-gallery.png" alt="Article.com gallery" /> */}
          <img src="/portfolio-article-review.png" alt="Article.com review" />
          <img src="/portfolio-article-search.png" alt="Article.com search" />
          <img src="/portfolio-article-support.png" alt="Article.com support" />
          <img src="/portfolio-article-mobile.png" alt="Article.com mobile" />
        </div>
      </div>

      <div>
        <h3>Pixel Component Library</h3>
        <div className={styles.projectDescriptionSubtitle}>article.com, 2018</div>
        <div className={styles.projectDescription}>In collaboration with UX, built and maintained a style guide and component library used in internal and externally facing software projects.</div>
        <div className={styles.projectImageStack}>
          <img src="/portfolio-article-pixel-1.png" />
          <img src="/portfolio-article-pixel-2.png" />
          <img src="/portfolio-article-pixel-3.png" />
        </div>
      </div>


      <div>
        <h3>Furniture AR Viewer</h3>
        <div className={styles.projectDescriptionSubtitle}>article.com, 2021</div>
        <div className={styles.projectDescription}>As part of an exploratory project, implemented an augmented reality furniture viewer on the article.com website.</div>
        <div className={styles.projectImageStack}>
          <img src="/portfolio-article-ar-1.png" />
          <img src="/portfolio-article-ar-2.png" />
        </div>
      </div>

      {/* <div>
              <div className={styles.projectDescription}><h4>Tools</h4></div>
              <div className={styles.projectImageStack}>
              <img src="/portfolio-article-cypress-runner.png" />
              <img src="/portfolio-article-experiment-platform.png" />
              <img src="/portfolio-article-experiment-platform-2.png" />
              <img src="/portfolio-article-order-transfer.png" />
              </div>
              </div> */}

      <div>
        <h3>Warehouse Scanner App</h3>
        <div className={styles.projectDescriptionSubtitle}>article.com, 2017</div>
        <div className={styles.projectDescription}>Implemented a warehouse management tool to improve accuracy and efficiency while moving stock.</div>
        <div className={styles.projectImageStack}>
          <img src="/portfolio-article-scan-1.png" />
          <img src="/portfolio-article-scan-2.png" />
          <img src="/portfolio-article-scan-3.png" />
        </div>
      </div>

      <div>
        <a href="https://orionhealth.com/uk/products/medicines/"><h3>Medicines Web App <i className="icon icon-arrow-right"></i></h3></a>
        <div className={styles.projectDescriptionSubtitle}>Orion Health, 2014 - 2017</div>
        <div className={styles.projectDescription}>Built Medicines features and maintained the Medicines web application for managing patient medications in healthcare settings.</div>
        <div className={styles.projectImageStack}>
          <img src="/portfolio-orion-medicines.png" alt="Orion medicines" />
        </div>
      </div>

      <div>
        <a href="http://dl.acm.org/citation.cfm?id=2686634"><h3>Visualising a Live Coding Arts Process <i className="icon icon-arrow-right"></i></h3></a>
        <div className={styles.projectDescriptionSubtitle}>Research Paper OzChi '14, 2014</div>
        <div className={styles.projectDescription}>Published a research paper based on the results of the undergraduate thesis.</div>
        <div className={styles.projectImageStack}>
          <img src="/portfolio-uni-paper.png" />
        </div>
      </div>

      <div>
        <a href="https://github.com/arrian/research-project/blob/master/thesis/thesis.pdf"><h3>Art and Understanding through Code Visualisation <i className="icon icon-arrow-right"></i></h3></a>
        <div className={styles.projectDescriptionSubtitle}>ANU Undergraduate Thesis, 2014</div>
        <div className={styles.projectDescription}>Explored methods of code visualisation and conducted user studies to determine effectiveness of visualisations.</div>
        <div className={styles.projectImageStack}>
          <img src="/portfolio-uni-thesis-1.png" />
          <img src="/portfolio-uni-thesis-2.png" />
          <img src="/portfolio-uni-thesis-3.png" />
        </div>
      </div>
      {/* <h3>Shopify Themes</h3>
              <div></div> */}
      {/* <div>
                <h3>Side Projects</h3>
              </div> */}

      <div>
        <h3>Social Landscape</h3>
        <div className={styles.projectDescriptionSubtitle}>Android App, 2013</div>
        <div className={styles.projectDescription}>As part of a university project, our team implemented an Android app in collboration with an external company.</div>
        <div className={styles.projectImageStack}>
          <img src="/portfolio-social-landscape-1.png" />
          <img src="/portfolio-social-landscape-2.png" />
        </div>
      </div>
      <div>
        <h3>Coding</h3>
        <div className={styles.projectDescriptionSubtitle}>Ongoing</div>
        <div className={styles.projectDescription}>I publish side projects, experiments and code across <a className={styles.link} href="https://github.com/arrian">Github</a>, <a className={styles.link} href="https://www.youtube.com/@codebyari">Youtube (@codebyari)</a>, <a className={styles.link} href="https://www.npmjs.com/~arrian">NPM</a> and <a className={styles.link} href="https://codepen.io/arrian">CodePen</a>.</div>
        <div className={styles.projectDescription}>Some example projects include websocket poker, FHIR validator, code graph, planet search and sony camera js api.</div>
      </div>
      <div>
        <h3>Art / Photography</h3>
        <div className={styles.projectDescriptionSubtitle}>Ongoing</div>
        <div className={styles.projectDescription}>As a side project, I occasionally publish paintings on <a className={styles.link} href="https://www.youtube.com/@art-by-ari">Youtube (@art-by-ari)</a> and photos on <a className={styles.link} href="https://www.flickr.com/photos/197031237@N08/">Flickr</a>.</div>
        <div className={styles.projectImageStack}>
          <img src="/portfolio-art-3.png" />
          <img src="/portfolio-art-1.png" />
        </div>
        <div className={styles.projectImageStack}>
          <img src="/portfolio-photo-1.png" />
          <img src="/portfolio-photo-2.png" />
          <img src="/portfolio-photo-3.png" />
          <img src="/portfolio-photo-4.png" />
        </div>
      </div>

      <div>
        <a href="#" onClick={() => props.scroll.home()}><h3>This Website ;) <i className="icon icon-arrow-right"></i></h3></a>
        <div className={styles.projectDescriptionSubtitle}>2022</div>
        <div className={styles.projectImageStack}>
          <img src="/portfolio-portfolio.png" />
        </div>
      </div>
    </section>
  );
});

export default HomeSection;