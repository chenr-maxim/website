import NextLink from 'next/link';
import React from 'react';

import styles from '@/src/styles/Link.module.scss';

const Link = ({ activeTab, href, className, children, ...props }) => {
  const isExternal = /^https?:\/\//.test(href);
  const cls = `${styles.links} ${activeTab ? styles.active : ''} ${className || ''}`.trim();

  return (
    <NextLink
      href={href}
      className={cls}
      aria-current={activeTab ? 'page' : undefined}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      {...props}
    >
      {children}
    </NextLink>
  );
};

export default Link;
