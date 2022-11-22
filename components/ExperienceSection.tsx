import styles from '../styles/Home.module.css'
import React, { forwardRef } from 'react';

const HomeSection = forwardRef((props: { active: boolean, pagePercent: number }, ref: React.Ref<HTMLDivElement>) => {

  return (
    <section className={`${styles.experience} ${styles.container}`} ref={ref} id="experience">
      <h2 className={styles.sectionHeader}>Experience</h2>
      <div className={styles.experienceItem}>
        <div className={styles.experienceItemHeader}>
          <div className={styles.experienceItemDate}>2017 - 2021</div>
          <div className={styles.experienceItemTitle}>Article.com</div>
          <div className={styles.experienceItemLabel}>Work</div>
        </div>
        <div className={styles.experienceItemSubheader}>Senior Software Engineer (Front End) / Software Engineer (Front End)</div>
        <div className={styles.experienceItemDescription}>
          <ul className={styles.experienceItemList}>
            <li>
              Maintained the public facing article.com e-commerce website and internal applications using Javascript (Vue, Angular) and Java.
            </li>
            <li>
              Implemented and maintained features for customer experience, reviews, checkout, account management, catalog management, experimentation, tracking, and warehouse management.
            </li>
            <li>
              Introduced a first cut of a design and component library in collaboration with UX.
            </li>
            <li>
              Introduced Cypress and Jest as company standard test tooling.
            </li>
            <li>
              Participated in scrum, design reviews, code reviews, hiring and new hire training.
            </li>
            <li>
              Initiated and participated in the integration with many third party tools and services (eg. Algolia, Contentful, Paypal, Stripe).
            </li>
            <li>
              Initiated and drove migration from legacy Play framework to Vue for the full Article website.
            </li>
            <li>
              Involved in a re-architecture of the technology stack including introducing Vue SSR, Node and GraphQL which improved website speed and reliability.
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.experienceItem}>
        <div className={styles.experienceItemHeader}>
          <div className={styles.experienceItemDate}>2013 - 2017</div>
          <div className={styles.experienceItemTitle}>Orion Health</div>
          <div className={styles.experienceItemLabel}>Work</div>
        </div>
        <div className={styles.experienceItemSubheader}>Intermediate Software Engineer / Junior Software Engineer / Graduate Software Engineer</div>
        <div className={styles.experienceItemDescription}>
          Assisted in bringing the Medicines healthcare software product from inception to market. Experience with the full range of software development practices through design, implementation and support utilising Agile software development with Scrum, BDD and TDD. Development using primarily Javascript and Java. Comprehensive testing practices with automated testing using JUnit, Selenium, Docker and Bamboo.
        </div>
      </div>

      <div className={styles.experienceItem}>
        <div className={styles.experienceItemHeader}>
          <div className={styles.experienceItemDate}>2010 - 2011</div>
          <div className={styles.experienceItemTitle}>General Dynamics - Mediaware</div>
          <div className={styles.experienceItemLabel}>Work</div>
        </div>
        <div className={styles.experienceItemSubheader}>Internship</div>
        <div className={styles.experienceItemDescription}>
          Internship developing test suites for the EditEngine Desktop video editing software product. Development in C++ and Python.
        </div>
      </div>

      <div className={styles.experienceItem}>
        <div className={styles.experienceItemHeader}>
          <div className={styles.experienceItemDate}>2011 - 2014</div>
          <div className={styles.experienceItemTitle}>Australian National University</div>
          <div className={styles.experienceItemLabel}>Education</div>
        </div>
        <div className={styles.experienceItemSubheader}>Bachelor of Software Engineering (Honours)</div>
        <div className={styles.experienceItemDescription}>
          <p>
            Coursework: Algorithms, Databases, Software Analysis & Design, Concurrent & Distributed Systems, Information Theory, Managing Software Development, HCI, Psychology, Accounting & Economics.
          </p>
          <p>
            Honours thesis in human-computer interaction, building and evaluating interfaces for communicating the software development process. Published a paper and presented results at the OzCHI '14 conference.
          </p>
        </div>
      </div>
    </section>
  );
});

export default HomeSection;