import styles from '../styles/Home.module.css'
import React, { forwardRef } from 'react';

const HomeSection = forwardRef((props: { active: boolean, pagePercent: number }, ref: React.Ref<HTMLDivElement>) => {

  return (
    <section className={styles.home} id="home" ref={ref}>
      <div className={styles.roleContainer}>
        <div className={styles.role}>Software Engineer</div>
      </div>
      <div className={styles.locationContainer}>
        <div className={styles.location}><i className="icon icon-location"></i>Vancouver, Canada</div>
      </div>

      <div className={styles.description}>
        Hi, I’m <span className={styles.highlight}>Ari</span>. I write software. Let me help you solve your problem.
        
        <div className={styles.homeCircles} style={{ gap: props.active ? `${props.pagePercent * 300}px` : '40px' }}>
          <div><div className={styles.blueCircle}></div></div>
          <div><div className={styles.yellowCircle}></div></div>
          <div><div className={styles.magentaCircle}></div></div>
          <div><div className={styles.blackCircle}></div></div>
        </div>
      </div>
    </section>
  );
});

export default HomeSection;