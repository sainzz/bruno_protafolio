'use client'

import React, { useMemo, useState } from 'react';
import Image from 'next/image';

type SectionId = 'sobre' | 'experiencia' | 'proyectos';

const projects = [
  {
    title: 'Control EMG + SNN',
    desc: 'Prototipo bioinspirado para controlar perifericos con senales EMG y redes neuronales de picos.',
  },
  {
    title: 'Scraper de perfumes (2023)',
    desc: 'Extraccion automatizada de datos de perfumes para comparar precios y stock; normalizacion y reportes claros.',
  },
  {
    title: 'Bot de Telegram de libros (2023)',
    desc: 'Alertas de actualizacion de libros via web scraping con notificaciones automaticas en Telegram.',
  },
];

const experiences = [
  {
    role: 'Desarrollador de Chatbot Medico',
    place: 'Empresa privada',
    period: '2025 - Actualidad',
    desc: 'Chatbot para catalogos quirurgicos: NLP con validacion en bases medicas, colaboracion con equipos clinicos y optimizacion del flujo conversacional para pruebas en produccion.',
  },
  {
    role: 'Practica en vision por computadora',
    place: 'Deliryum',
    period: '2025',
    desc: 'Deteccion, seguimiento y segmentacion orientadas a seguridad. Integracion de modelos y documentacion para equipos tecnicos y no tecnicos.',
  },
  {
    role: 'Investigacion — Congreso Vive la Investigacion',
    place: 'UTEM',
    period: '2025',
    desc: 'Poster sobre control de perifericos con senales EMG y redes bioinspiradas: experimentacion, preprocesamiento y analisis de resultados.',
  },
  {
    role: 'Ingenieria Civil en Ciencia de Datos',
    place: 'UTEM',
    period: '2021 - 2026',
    desc: '',
  },
];

const contacts = [
  { label: 'Correo', value: 'contactobsainz@gmail.com', href: 'mailto:contactobsainz@gmail.com', icon: '/email-logo.png' },
  { label: 'LinkedIn', value: '/in/brunosainzsilva', href: 'https://www.linkedin.com/in/brunosainzsilva', icon: '/linkedin-logo.png' },
  { label: 'Descargar CV', value: 'cv-bruno-sainz.pdf', href: '/cv-bruno-sainz.pdf', icon: null },
];

export default function ProfileSwitcher() {
  const [active, setActive] = useState<SectionId>('sobre');

  const content = useMemo(() => {
    switch (active) {
      case 'sobre':
        return (
          <div className="space-y-4 text-text-secondary text-base sm:text-lg leading-relaxed">
            <p>Soy Bruno Sainz, ingeniero civil en ciencia de datos. Me gusta crear soluciones de IA que se sientan utiles y cercanas. Trabajo entre el analisis, el prototipado y la puesta en produccion, siempre entendiendo el problema antes que la tecnologia.</p>
            <p>Tengo experiencia en deteccion visual, analisis de imagenes y chatbots medicos. Me interesan la IA aplicada a salud y medio ambiente, y estoy aprendiendo sobre redes neuronales bioinspiradas (SNN) para conectar mejor la tecnologia con procesos naturales.</p>
            <p>Disfruto colaborar con equipos diversos, traducir necesidades en entregas concretas y documentar lo suficiente para que cualquiera pueda seguir el flujo de trabajo. Sigo aprendiendo cada dia para mejorar tanto en lo tecnico como en lo humano.</p>
            <p className="text-text-primary font-semibold mt-3">Fuera del trabajo</p>
            <p className="text-text-secondary text-sm sm:text-base">Calistenia, natacion, cuidar plantas y cocinar para compartir.</p>
          </div>
        );
      case 'experiencia':
        return (
          <div className="space-y-3 text-text-secondary text-base sm:text-lg leading-relaxed">
            {experiences.map((item) => (
              <div key={item.role} className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent-primary" aria-hidden />
                  <p className="text-text-primary font-semibold">{item.role}</p>
                </div>
                <p className="text-sm text-text-secondary">{item.place} — {item.period}</p>
                {item.desc && <p>{item.desc}</p>}
              </div>
            ))}
          </div>
        );
      case 'proyectos':
        return (
          <div className="space-y-4 text-text-secondary text-base sm:text-lg leading-relaxed">
            {projects.map((project) => (
              <div key={project.title} className="space-y-1">
                <p className="text-text-primary font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent-primary" aria-hidden />
                  {project.title}
                </p>
                <p className="pl-4">{project.desc}</p>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  }, [active]);

  return (
    <section
      id="panel"
      className="relative min-h-screen flex items-start justify-center px-5 py-14 sm:py-16 bg-black text-text-primary overflow-hidden"
      aria-labelledby="profile-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(3,32,105,0.12),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(29,90,255,0.12),transparent_30%)]" aria-hidden />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)',
          opacity: 0.5,
        }}
        aria-hidden
      />
      <div className="absolute -left-32 top-20 w-60 h-60 rounded-full bg-accent-primary/15 blur-3xl" aria-hidden />
      <div className="absolute -right-32 bottom-10 w-64 h-64 rounded-full bg-accent-secondary/15 blur-3xl" aria-hidden />

      <div className="relative z-10 w-full max-w-6xl grid md:grid-cols-[1fr,1.05fr] gap-12 lg:gap-16">
        <div className="space-y-10">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.15em] text-text-secondary/80">Ciencia de Datos · IA aplicada</p>
            <div className="animate-fade-in">
              <div
                className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-[12px] overflow-hidden bg-white/5"
                style={{
                  border: '2px solid rgba(3, 32, 105, 0.25)',
                  boxShadow: '0 0 28px rgba(3, 32, 105, 0.15)',
                }}
              >
                <Image
                  src="/foto.jpg"
                  alt="Foto de Bruno Sainz — Cientista de Datos"
                  fill
                  sizes="160px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <h1
              id="profile-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
              style={{ fontFamily: '"Playfair Display", "Space Grotesk", serif' }}
            >
              Bruno Sainz
            </h1>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-3xl">
              Soy ingeniero civil en ciencia de datos, con formacion en Machine Learning, vision por computadora y
              ciberseguridad. Experiencia practica en el desarrollo de soluciones basadas en inteligencia artificial,
              desde la deteccion y analisis visual hasta la interaccion conversacional con modelos de lenguaje. Interes
              en la aplicacion de IA y redes neuronales bioinspiradas a problemas reales, especialmente en el ambito
              medico y de seguridad. Capacidad demostrada para liderar proyectos, comunicar resultados tecnicos y
              colaborar en equipos multidisciplinarios.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:space-y-3 sm:gap-0">
            {([
              { id: 'sobre', label: 'Sobre mi' },
              { id: 'experiencia', label: 'Experiencia' },
              { id: 'proyectos', label: 'Proyectos' },
            ] as { id: SectionId; label: string }[]).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`group flex items-center gap-4 uppercase tracking-[0.08em] text-xs sm:text-sm font-semibold transition-all ${
                  active === tab.id ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                <span
                  className={`h-[2px] w-10 sm:w-12 transition-all rounded-full ${
                    active === tab.id ? 'bg-accent-primary w-16' : 'bg-white/15 group-hover:w-16'
                  }`}
                  aria-hidden
                />
                <span>{tab.label}</span>
                {active === tab.id && (
                  <span className="w-2.5 h-2.5 rounded-full bg-accent-primary shadow-[0_0_0_6px_rgba(110,243,255,0.18)]" />
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 text-text-secondary flex-wrap">
            {contacts.map((contact) => (
              <a
                key={contact.href}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="px-3 h-10 inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 hover:border-accent-primary hover:text-text-primary transition-colors text-xs sm:text-sm font-semibold"
              >
                {contact.icon && (
                  <Image
                    src={contact.icon}
                    alt={contact.label}
                    width={18}
                    height={18}
                    className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
                  />
                )}
                {contact.label}
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-5 bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-card backdrop-blur">
          <div className="text-text-primary text-lg sm:text-xl font-semibold">
            {active === 'sobre' && 'Sobre mi'}
            {active === 'experiencia' && 'Experiencia'}
            {active === 'proyectos' && 'Proyectos'}
          </div>
          {content}
        </div>
      </div>
    </section>
  );
}
