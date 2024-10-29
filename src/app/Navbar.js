// src/app/Navbar.js
import React from 'react';
import Link from 'next/link';
import styles from '../components/Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.navLink}>Home</Link>
      <Link href="/about" className={styles.navLink}>About</Link>
      <Link href="/contact" className={styles.navLink}>Contact</Link>
    </nav>
  );
};

export default Navbar;
