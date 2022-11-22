import styles from '../styles/Home.module.css'
import React, { forwardRef } from 'react';
import ContactLinks from './ContactLinks';

const HomeSection = forwardRef((props: { active: boolean, pagePercent: number }, ref: React.Ref<HTMLDivElement>) => {

  return (
    <section className={styles.contact} ref={ref} id="contact">
      <div className={styles.container}>
        <div className={styles.sectionHeaderContainer}><h2 className={styles.sectionHeader}>Contact</h2></div>

        <p className={styles.contactDescription}>
          It'd be great to hear from you! Contact me through the following channels:
        </p>

        <ContactLinks></ContactLinks>
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