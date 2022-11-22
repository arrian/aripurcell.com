import styles from '../styles/Home.module.css'
import linkedinImage from '../public/linkedin.svg';
import githubImage from '../public/github.svg';
import readcvImage from '../public/read-cv.svg';

const ContactLinks = () => {
  return <div className={styles.sectionLinks}>
    <a className={styles.socialLink} href="https://github.com/arrian">
      <img src={githubImage.src} alt="Github icon" />
      github
    </a>
    <a className={styles.socialLink} href="https://www.linkedin.com/in/arrianpurcell">
      <img src={linkedinImage.src} alt="LinkedIn icon" />
      linkedin
    </a>
    <a className={styles.socialLink} href="https://read.cv/aripurcell">
      <img src={readcvImage.src} alt="Read.cv icon" />
      read.cv
    </a>
  </div>
}

export default ContactLinks;