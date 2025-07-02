import React from 'react';

type FooterProps = {
  message: string;
  extra?: React.ReactNode;
};

export default function Footer({ message, extra }: FooterProps) {
  return (
    <footer>
      <span>{message}</span>
      {extra && <span className="footer-extra">{extra}</span>}
    </footer>
  );
}