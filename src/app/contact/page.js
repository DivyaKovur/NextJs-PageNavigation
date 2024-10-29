"use client"
import { useState } from 'react';
import styles from './Contact.module.css';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your message, ${name}!`);
  };

  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.contactTitle}>Contact Us</h1>
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.contactInput}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.contactInput}
            required
          />
        </label>
        <br />
        <label>
          Message:
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={styles.contactInput}
            required
          ></textarea>
        </label>
        <br />
        <button type="submit" className={styles.contactButton}>Submit</button>
      </form>
    </div>
  );
}
