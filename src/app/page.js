// src/app/page.js
import styles from './Home.module.css';

export default function HomePage() {
  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.welcomeTitle}>Welcome to Our Platform</h1>
      <p>
        This website is built using Next.js, a powerful React framework that allows for efficient 
        development of modern web applications. Our platform showcases the capabilities of Next.js, 
        including server-side rendering, static site generation, and an intuitive routing system.
      </p>
      <h2 className={styles.featuresTitle}>Key Features</h2>
      <ul className={styles.featuresList}>
        <li>🌟 Fast and Responsive Design</li>
        <li>📊 Dynamic Content with Server-Side Rendering</li>
        <li>📱 Mobile-Friendly User Interface</li>
        <li>🔄 Easy Navigation Across Pages</li>
        <li>🛠️ Built with Clean and Maintainable Code</li>
      </ul>
      <h2 className={styles.getStartedTitle}>Get Started</h2>
      <p>
        Explore our pages to learn more about who we are and how we can assist you. 
        Visit the <a href="/about" className={styles.link}>About Us</a> page to understand our mission, 
        or head to the <a href="/contact" className={styles.link}>Contact Us</a> page to reach out with any questions. 
        We’re here to help!
      </p>
    </div>
  );
}
