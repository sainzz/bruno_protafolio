# Portafolio de Bruno Sainz

Sitio web estático de marca personal para Bruno Sainz, ingeniero civil en Ciencia de Datos. Presenta su identidad profesional, habilidades, proyectos y medios de contacto en una sola pantalla sin scroll, siguiendo la pauta de marca personal.

## Propósito e identidad
- **Quién representa:** Bruno Sainz, enfocado en IA aplicada (chatbots, visión por computadora) y seguridad.
- **Objetivo:** Mostrar perfil, proyectos y formas de contacto de manera clara y rápida.
- **CV:** Disponible en `public/cv-bruno-sainz.pdf`.

## Secciones del sitio
- **Hero / Perfil:** Nombre, rol y presentación breve con enfoque en IA, visión y ciberseguridad.
- **Sobre mí / Resumen:** Copy extendido con intereses en IA responsable y SNN.
- **Experiencia:** Hitos recientes (chatbot médico con NLP y validación, práctica en visión con pruebas en terreno, congreso, formación UTEM).
- **Proyectos:** 3 proyectos destacados: control EMG + SNN, scraper de perfumes (2023), bot de Telegram para alertas de libros (2023).
- **Contacto:** Correo y LinkedIn (íconos desde `public/email-logo.png` y `public/linkedin-logo.png`) + enlace a CV.

## Tecnologías utilizadas
- **Obligatorias:** HTML5 semántico y CSS3 a través de **Next.js 14**, **React 18**, **Tailwind CSS**.
- TypeScript para tipado.

## Cómo visualizar
- Entorno local:
  1. `npm install`
  2. `npm run dev`
  3. Abrir `http://localhost:3000`
- Build de producción:
  1. `npm run build`
  2. `npm start`

## Contenido y archivos clave
- Páginas y layout: `pages/index.tsx`
- Componentes: `components/` (ProfileSwitcher centraliza las secciones).
- Estilos y paleta: `styles/globals.css`, `tailwind.config.js`
- Activos: `public/` (CV, logos e imágenes).

## Despliegue
Listo para Vercel u otro hosting de Next.js sin configuración adicional. No se incluye un enlace público en este repositorio.
