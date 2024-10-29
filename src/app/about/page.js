// src/app/about/page.js
import styles from './About.module.css';

export default function AboutPage() {
  return (
    <div className={styles.aboutContainer}>
      <h1 className={styles.aboutTitle}>About Us</h1>
      <p>
        Welcome to our website! This platform has been built using a Next.js template as part of an assessment. 
        Our goal is to showcase the features and capabilities of Next.js, including its powerful routing, 
        server-side rendering, and static site generation.
      </p>
      <h2 className={styles.aboutSubtitle}>What is Next.js?</h2>
      <p>
        Next.js is a React framework that enables developers to build server-rendered React applications 
        with ease. It offers various features such as automatic code splitting, optimized performance, 
        and a rich ecosystem that supports static site generation.
      </p>
      <h2 className={styles.aboutSubtitle}>Our Mission</h2>
      <p>
        Our mission is to provide an engaging user experience while demonstrating the capabilities of modern web technologies.
        We aim to create applications that are not only functional but also user-friendly and visually appealing.
      </p>
      <h2 className={styles.aboutSubtitle}>Our Values</h2>
      <ul className={styles.aboutList}>
        <li>Integrity</li>
        <li>Quality</li>
        <li>Innovation</li>
        <li>Customer Satisfaction</li>
      </ul>
    </div>
  );
}
