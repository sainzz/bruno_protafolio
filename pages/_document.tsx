import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <meta
          name="description"
          content="Portafolio de Bruno Sainz: IA conversacional, visión por computadora, ciencia de datos y seguridad."
        />
        <meta
          name="keywords"
          content="ciencia de datos, inteligencia artificial, machine learning, visión por computadora, Bruno Sainz, chatbots, seguridad"
        />
        <meta name="author" content="Bruno Sainz" />

        <meta property="og:title" content="Bruno Sainz | Ciencia de Datos e IA aplicada" />
        <meta
          property="og:description"
          content="Proyectos de IA, visión por computadora y datos listos para producción."
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_ES" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bruno Sainz | Ciencia de Datos e IA aplicada" />
        <meta
          name="twitter:description"
          content="Proyectos de IA, visión por computadora y datos listos para producción."
        />

        <meta name="robots" content="index, follow" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
