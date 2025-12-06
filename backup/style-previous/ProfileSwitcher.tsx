'use client'

import React, { useMemo, useState } from 'react';
import Image from 'next/image';

type SectionId = 'sobre' | 'experiencia' | 'proyectos' | 'contacto';

const projects = [
  {
    title: 'Control EMG + SNN',
    desc: 'Prototipo bioinspirado para controlar periféricos con señales EMG y redes neuronales de picos.',
  },
  {
    title: 'Scraper de perfumes (2023)',
    desc: 'Extracción automatizada de datos de perfumes para comparar precios y stock; normalización y entrega en reportes.',
  },
  {
    title: 'Bot de Telegram de libros (2023)',
    desc: 'Alertas de actualización de libros vía web scraping con notificaciones automáticas en Telegram.',
  },
];

const experiences = [
  'Desarrollador de Chatbot Médico (Empresa privada, 2025-actualidad): consultas sobre herramientas y procedimientos quirúrgicos, NLP con validación en bases médicas, backend y optimización del flujo conversacional.',
  'Práctica en visión por computadora (Deliryum, 2025): desarrollo de detección, seguimiento y segmentación para seguridad; integración de modelos y pruebas en terreno.',
  'Congreso Vive la Investigación (2025): póster sobre control de periféricos con señales EMG y redes bioinspiradas.',
  'Ingeniería Civil en Ciencia de Datos (UTEM, 2021-2026).',
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
            <p>
              Me dedico a crear soluciones con IA que se sienten cercanas: chatbots médicos, visión para seguridad y
              flujos de datos con controles claros. Me muevo entre explorar el problema, prototipar rápido y dejar todo
              listo para producción.
            </p>
            <p>
              Disfruto conversar con los equipos para traducir necesidades en entregas concretas, con documentación y
              métricas para monitorear. Intereses actuales: IA responsable y redes neuronales bioinspiradas (SNN).
            </p>
          </div>
        );
      case 'experiencia':
        return (
          <div className="space-y-3 text-text-secondary text-base sm:text-lg leading-relaxed">
            {experiences.map((item) => (
              <div key={item} className="flex gap-2">
                <span className="text-accent-primary font-semibold">—</span>
                <span>
                  <span className="font-semibold">{item.split(':')[0]}:</span> {item.split(':').slice(1).join(':').trim()}
                </span>
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
      case 'contacto':
        return (
          <div className="grid sm:grid-cols-2 gap-4 text-base sm:text-lg">
            {contacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-accent-primary transition-colors"
              >
                <p className="text-sm text-text-secondary">{contact.label}</p>
                <p className="text-text-primary font-semibold">{contact.value}</p>
              </a>
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
      className="relative min-h-screen flex items-start justify-center px-5 py-14 sm:py-16 bg-black text-text-primary"
      aria-labelledby="profile-heading"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)',
          opacity: 0.55,
        }}
        aria-hidden
      />
      <div className="relative z-10 w-full max-w-6xl grid md:grid-cols-[1fr,1.05fr] gap-12 lg:gap-16">
        <div className="space-y-10">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.15em] text-text-secondary/80">Ciencia de Datos · IA aplicada</p>
            <h1
              id="profile-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
              style={{ fontFamily: '"Playfair Display", "Space Grotesk", serif' }}
            >
              Bruno Sainz
            </h1>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-xl">
              Soy ingeniero civil en ciencia de datos, con formación en Machine Learning, visión por computadora y
              ciberseguridad. Experiencia práctica en el desarrollo de soluciones basadas en inteligencia artificial,
              desde la detección y análisis visual hasta la interacción conversacional con modelos de lenguaje.
              Interés en la aplicación de IA y redes neuronales bioinspiradas a problemas reales, especialmente en el
              ámbito médico y de seguridad. Capacidad demostrada para liderar proyectos, comunicar resultados técnicos y
              colaborar en equipos multidisciplinarios.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:space-y-3 sm:gap-0">
            {([
              { id: 'sobre', label: 'Sobre mí' },
              { id: 'experiencia', label: 'Experiencia' },
              { id: 'proyectos', label: 'Proyectos' },
              { id: 'contacto', label: 'Contacto' },
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
                  <span className="w-2.5 h-2.5 rounded-full bg-accent-primary shadow-[0_0_0_6px_rgba(255,95,82,0.15)]" />
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

        <div className="space-y-5">
          <div className="text-text-primary text-lg sm:text-xl font-semibold">
            {active === 'sobre' && 'Sobre mí'}
            {active === 'experiencia' && 'Experiencia'}
            {active === 'proyectos' && 'Proyectos'}
            {active === 'contacto' && 'Contacto'}
          </div>
          {content}
        </div>
      </div>
    </section>
  );
}
