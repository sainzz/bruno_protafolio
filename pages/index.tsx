import React from 'react';
import Head from 'next/head';
import ProfileSwitcher from '@/components/ProfileSwitcher';

export default function Home() {
  return (
    <>
      <Head>
        <title>Bruno Sainz | IA y Ciencia de Datos</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta
          name="description"
          content="Portafolio sin scroll: explora perfil, habilidades, proyectos, experiencia y contacto de Bruno Sainz en un panel único."
        />
      </Head>
      <main className="min-h-screen">
        <ProfileSwitcher />
      </main>
    </>
  );
}
