import React, { ReactNode } from 'react';
import Helmet from 'react-helmet';
import { withPrefix } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../global-styles';

interface Props {
  children: ReactNode;
  title?: string;
  description?: string;
  image?: string | null;
  maxWidth?: number;
}

const theme = {
  grey: '#857272',
  margin: '2em',
};

export default ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <Helmet title="Poď voliť">
        <html lang="sk" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta property="og:title" content="Záleží ti na Slovensku?" />
        <meta name="google-site-verification" content="8cQKXsfHMuCdSPV42iiMJB-KbCCykX8cdpZOcoW-U8M" />
        <meta property="og:image" content={withPrefix('share1.png')} />
      </Helmet>
      <GlobalStyle />
      {children}
    </>
  </ThemeProvider>
);
