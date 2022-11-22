import styles from '../styles/Home.module.css'
import React, { forwardRef } from 'react';

const HomeSection = forwardRef((props: { active: boolean, pagePercent: number }, ref: React.Ref<HTMLDivElement>) => {

  return (
    <section className={styles.contact} ref={ref} id="contact">
      <div className={styles.container}>
        <div className={styles.sectionHeaderContainer}><h2 className={styles.sectionHeader}>Contact</h2></div>

        <p className={styles.contactDescription}>
          It'd be great to hear from you! Contact me through the following channels:
        </p>


        <div className={styles.sectionLinks}>
          <a className={styles.socialLink} href="https://github.com/arrian"><i className="icon icon-github"></i> github</a>
          <a className={styles.socialLink} href="https://www.linkedin.com/in/arrianpurcell"><i className="icon icon-linkedin"></i> linkedin</a>
          <a className={styles.socialLink} href="https://read.cv/aripurcell">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"><path fillRule="evenodd" clipRule="evenodd" d="M10.809 5.242a1.25 1.25 0 00-1.531.884L6.042 18.2a1.25 1.25 0 00.884 1.53l9.66 2.59a1.25 1.25 0 001.53-.885l3.236-12.074a1.25 1.25 0 00-.884-1.53l-9.66-2.589zm-2.98.496a2.75 2.75 0 013.368-1.945l9.66 2.588A2.75 2.75 0 0122.8 9.75l-3.236 12.074a2.75 2.75 0 01-3.368 1.945L6.538 21.18a2.75 2.75 0 01-1.944-3.368L7.829 5.738z" fill="#F1EADB"></path><path fillRule="evenodd" clipRule="evenodd" d="M10.518 8.27a.75.75 0 01.919-.53l7.241 1.94a.75.75 0 01-.388 1.449l-7.242-1.94a.75.75 0 01-.53-.919zM9.677 11.41a.75.75 0 01.918-.531l7.242 1.94a.75.75 0 11-.388 1.45l-7.242-1.941a.75.75 0 01-.53-.919zM8.836 14.549a.75.75 0 01.918-.53l4.83 1.293a.75.75 0 11-.388 1.45l-4.83-1.295a.75.75 0 01-.53-.918z" fill="#F1EADB"></path></svg>
            read.cv
          </a>
        </div>
      </div>

      <div className={styles.contactSquares} style={{ gap: props.active ? `${1000 - props.pagePercent * 1000}px` : '100px' }}>
        <div><div className={styles.blueSquare}></div></div>
        <div><div className={styles.yellowSquare}></div></div>
        <div><div className={styles.magentaSquare}></div></div>
        <div><div className={styles.blackSquare}></div></div>
      </div>
    </section>
  );
});

export default HomeSection;