import theme from "@components/Theme";
import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* PWA primary color */}
          <meta
            key="theme-color"
            name="theme-color"
            content={theme.palette.primary.main}
          />
          <meta name="robots" content="noindex" />
          <link key="favicon" rel="icon" href="/favicon.ico" />

          <link
            href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;500;600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// https://fonts.google.com/share?selection.family=Inconsolata:wght@400;500;600
