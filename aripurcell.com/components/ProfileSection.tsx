import styles from '../styles/Home.module.css'
import React, { forwardRef } from 'react';
import headshot from '../public/ari-purcell-w640.webp';
import ContactLinks from './ContactLinks';

const HomeSection = forwardRef((props: { active: boolean, pagePercent: number }, ref: React.Ref<HTMLDivElement>) => {

  return (
    <section className={`${styles.profile} ${styles.container}`} ref={ref} id="profile">
      <h2 className={styles.sectionHeader}>Profile</h2>
      
      <div className={styles.profileContainer}>
        <div className={styles.profileImage}>
          <div className={styles.profileLeftPanel}>
            <div className={styles.profileImagePlaceholder}>
              <img src={ headshot.src } alt="Ari Purcell" width={headshot.width} height={headshot.height} />
            </div>
            <ContactLinks></ContactLinks>
          </div>
        </div>
        <div className={styles.profileContent}>
          <h3>About</h3>
          <p>
            I am a full stack software engineer with a particular focus on building web experiences and interfaces that excite. I love solving problems and delivering creative solutions using a variety of technologies. During a normal day you would see me using a good mix of Javascript (using both Node and React), HTML and CSS for both small and large projects.
          </p>
          <p>
            My work experience has led me to build web applications for the e-commerce and health care sectors and my education has led me to research the impact of interfaces on user experiences. I hope to promote designing for usability.
          </p>

          <h3>Languages</h3>

          <p>Javascript, Typescript, Java, Python, C, C++, HTML, CSS, SQL, GraphQL</p>

          <p>I've recently been enjoying playing around with Rust, WebAssembly and WebGL</p>

          <h3>Frameworks</h3>

          <p>Vue.js, React, Alpine.js, Node.js, Express.js</p>


          <h3>Tools</h3>

          <p>Git, AWS (ECS, Lambda, S3, DynamoDB), Docker, Webpack, Vite, Cypress, Figma, Illustrator, After Effects, Premiere Pro, Photoshop</p>
        </div>
      </div>
    </section>
  );
});

export default HomeSection;