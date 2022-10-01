import React from 'react';
import { Footer, Header } from '../index';

interface IHeaderAndFooter {
  children: React.ReactNode;
}

export const HeaderAndFooter: React.FC<IHeaderAndFooter> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
