import React, { useState } from 'react';
import { Typography } from '../../../atoms/Typography';
import { Button } from '../../../atoms/Button';
import { InputField } from '../../../atoms/InputField';
import styles from './FooterLarge.module.css';

interface FooterLargeProps {
  className?: string;
  items?: Array<{
    title: string;
    links: Array<{ text: string; href: string }>;
  }>;
  serviceItems?: Array<{ text: string; href: string }>;
}

export const FooterLarge: React.FC<FooterLargeProps> = ({
  className,
  items = [],
  serviceItems = [],
}) => {
  const [email, setEmail] = useState<string>('');

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email subscription
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <footer className={`${styles.footer} ${className || ''}`}>
      <div className={styles.footerContent}>
        <div className={styles.footerMain}>
          <div className={styles.footerBrand}>
            <Typography variant="h4">ASI:Create</Typography>
            <Typography variant="body2" color="secondary">
              Building the future of AI
            </Typography>
          </div>

          <div className={styles.footerNewsletter}>
            <Typography variant="h6">Stay Updated</Typography>
            <form onSubmit={handleEmailSubmit}>
              <InputField
                id="footer-email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button type="submit" variant="primary">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className={styles.footerLinks}>
          {items?.map((column, index) => (
            <div key={index} className={styles.footerColumn}>
              <Typography variant="h6">{column.title}</Typography>
              <ul>
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.href}>{link.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.footerServices}>
          {serviceItems?.map((item, index) => (
            <a key={index} href={item.href} className={styles.serviceLink}>
              {item.text}
            </a>
          ))}
        </div>
      </div>

      <div className={styles.footerBottom}>
        <Typography variant="body3" color="secondary">
          © 2024 ASI:Create. All rights reserved.
        </Typography>
      </div>
    </footer>
  );
};

export default FooterLarge;
