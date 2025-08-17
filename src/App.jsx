import React, { useState } from 'react'
import { Button } from './components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card.jsx'
import { Mail, Phone, Instagram, Youtube, MapPin, Twitter, Rss, Linkedin, TikTok, MessageCircle, Link as LinkIcon } from 'lucide-react'

// === Datos del cuerpo técnico ===
const TEAM = [
  {
    name: 'Flavio Robatto',
    role: 'Director Técnico',
    bio: 'Entrenador con Licencia PRO CONMEBOL. Modelo de Juego basado en Juego de Posición.',
    img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Franco Cadile',
    role: 'Preparador Físico',
    bio: 'Control de cargas (ICR), fuerza, velocidad y prevención de lesiones.',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Gabriel González',
    role: 'Analista de Rendimiento',
    bio: 'Análisis de rivales, cortes de video y feedback táctico.',
    img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop',
  },
]

// === Servicios/metodología ===
const SERVICES = [
  { title: 'Juego de Posición', desc: 'Modelo ofensivo que busca ventajas a partir del orden estructural.' },
  { title: 'Planificación Antifrágil', desc: 'Microciclos adaptativos que responden a la competencia y al estado del jugador.' },
  { title: 'Control de Cargas', desc: 'Índice de Carga Relevante (ICR) con métricas GPS, wellness y rendimiento físico.' },
  { title: 'Análisis de Rivales', desc: 'Estudios detallados de fortalezas, debilidades y comportamientos tácticos.' },
]

// === Contacto y redes ===
const CONTACT = {
  phone: '+54 9 261 000 0000',
  email: 'contacto@cuerpotecnico.com',
  city: 'Mendoza, Argentina',
  instagram: 'https://www.instagram.com/',
  youtube: 'https://www.youtube.com/',
  twitter: 'https://x.com/',
  linkedin: 'https://www.linkedin.com/',
  tiktok: 'https://www.tiktok.com/@',
  whatsapp: 'https://wa.me/5492610000000?text=Hola%20quiero%20hablar%20con%20el%20CT',
  rss: '/blog/rss.xml',
}

// === Blog ===
const BLOG = [
  {
    title: 'Nuestro modelo de Juego de Posición',
    date: '2025-08-12',
    excerpt: 'Cómo estructuramos el 1-4-3-3 en fases de inicio, creación y finalización.',
    link: '/blog/modelo-juego-posicion',
  },
  {
    title: 'Planificación semanal tipo',
    date: '2025-07-20',
    excerpt: 'Ejemplo de microciclo estructurado entre partidos domingo-domingo.',
    link: '/blog/planificacion-semanal-tipo',
  },
  {
    title: 'Tecnología aplicada al rendimiento',
    date: '2025-06-28',
    excerpt: 'Uso de GPS, videoanálisis y tableros simples para decidir mejor.',
    link: '/blog/tecnologia-y-rendimiento',
  },
]

function SocialBar() {
  return (
    <div className="flex flex-wrap items-center gap-3 text-sm">
      <a href={CONTACT.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:opacity-80"><Instagram className="w-4 h-4"/>Instagram</a>
      <a href={CONTACT.twitter} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:opacity-80"><Twitter className="w-4 h-4"/>X/Twitter</a>
      <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:opacity-80"><Linkedin className="w-4 h-4"/>LinkedIn</a>
      <a href={CONTACT.tiktok} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:opacity-80"><TikTok className="w-4 h-4"/>TikTok</a>
      <a href={CONTACT.youtube} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:opacity-80"><Youtube className="w-4 h-4"/>YouTube</a>
      <a href={CONTACT.rss} className="inline-flex items-center gap-1 hover:opacity-80"><Rss className="w-4 h-4"/>RSS</a>
    </div>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* NAV */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-xl">Cuerpo Técnico</a>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#quienes">Quiénes somos</a>
            <a href="#quehacemos">Qué hacemos</a>
            <a href="#metodo">Método</a>
            <a href="#blog">Blog</a>
            <a href="#contacto">Contacto</a>
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <SocialBar />
            <Button asChild>
              <a href="#contacto">Hablemos</a>
            </Button>
          </div>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-3 text-sm">
              <a href="#quienes" onClick={() => setMenuOpen(false)}>Quiénes somos</a>
              <a href="#quehacemos" onClick={() => setMenuOpen(false)}>Qué hacemos</a>
              <a href="#metodo" onClick={() => setMenuOpen(false)}>Método</a>
              <a href="#blog" onClick={() => setMenuOpen(false)}>Blog</a>
              <a href="#contacto" onClick={() => setMenuOpen(false)}>Contacto</a>
              <div className="pt-2"><SocialBar/></div>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="py-20 md:py-28 bg-neutral-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold">Cuerpo Técnico Flavio Robatto</h1>
          <p className="mt-4 text-neutral-700 max-w-2xl mx-auto">Modelo de juego, metodología integrada y planificación al detalle para competir en la élite del fútbol sudamericano.</p>
          <div className="mt-6 flex items-center justify-center">
            <SocialBar />
          </div>
        </div>
      </section>

      {/* QUIÉNES SOMOS */}
      <section id="quienes" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold">Quiénes somos</h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM.map((m, i) => (
              <Card key={i}>
                <CardHeader className="p-0">
                  <img src={m.img} alt={m.name} className="h-40 w-full object-cover" />
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle>{m.name}</CardTitle>
                  <p className="text-sm text-neutral-600">{m.role}</p>
                  <p className="text-sm text-neutral-700 mt-2">{m.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* QUÉ HACEMOS */}
      <section id="quehacemos" className="py-16 md:py-24 bg-white border-t">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold">Qué hacemos</h2>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s, i) => (
              <Card key={i}>
                <CardContent className="p-5">
                  <h3 className="font-medium">{s.title}</h3>
                  <p className="text-sm text-neutral-700 mt-1.5">{s.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* MÉTODO */}
      <section id="metodo" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold">Nuestro método</h2>
          <div className="mt-6 grid lg:grid-cols-2 gap-8 items-start">
            <div className="prose prose-neutral max-w-none">
              <ul className="space-y-3 text-neutral-800">
                <li><strong>Planificación antifrágil:</strong> estructura que mejora con la variabilidad. Ajustes diarios según wellness, RPE y contexto competitivo.</li>
                <li><strong>ICR (Índice de Carga Relevante):</strong> métrica simple que integra volumen, intensidad y especificidad del estímulo para cada jugador.</li>
                <li><strong>Del papel a la cancha:</strong> tareas claras, progresiones por cualidad y feedback inmediato con video corto.</li>
                <li><strong>Comunicación de vestuario:</strong> mensajes simples y visuales para que todo el equipo entienda el objetivo del día.</li>
              </ul>
            </div>
            <div className="aspect-[16/10] rounded-2xl bg-white card overflow-hidden">
              <img src="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1400&auto=format&fit=crop" alt="Pizarra táctica" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-3xl font-semibold">Blog</h2>
            <a href={CONTACT.rss} className="inline-flex items-center gap-2 text-sm hover:opacity-80"><Rss className="w-4 h-4"/> RSS</a>
          </div>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {BLOG.map((post, i) => (
              <Card key={i} className="overflow-hidden border-neutral-200">
                <CardContent className="p-5">
                  <h3 className="font-medium">{post.title}</h3>
                  <p className="text-xs text-neutral-500 mt-1">{new Date(post.date).toLocaleDateString()}</p>
                  <p className="text-sm text-neutral-700 mt-2">{post.excerpt}</p>
                  <div className="mt-3 flex items-center gap-3 text-sm">
                    <a href={post.link} className="text-blue-600 hover:underline inline-flex items-center gap-1"><LinkIcon className="w-4 h-4"/> Leer más</a>
                    <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(post.link)}&text=${encodeURIComponent(post.title)}`} target="_blank" rel="noreferrer" className="hover:underline inline-flex items-center gap-1"><Twitter className="w-4 h-4"/> Compartir</a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-16 md:py-24 bg-white border-t">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold">Contacto</h2>
          <div className="mt-6 space-y-3 text-sm">
            <p><Phone className="inline w-4 h-4 mr-1" /> <a href={`tel:${CONTACT.phone}`}>{CONTACT.phone}</a></p>
            <p><Mail className="inline w-4 h-4 mr-1" /> <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></p>
            <p><MapPin className="inline w-4 h-4 mr-1" /> {CONTACT.city}</p>
            <div className="flex gap-4 mt-3">
              <a href={CONTACT.instagram} target="_blank" rel="noreferrer"><Instagram className="w-5 h-5"/></a>
              <a href={CONTACT.twitter} target="_blank" rel="noreferrer"><Twitter className="w-5 h-5"/></a>
              <a href={CONTACT.linkedin} target="_blank" rel="noreferrer"><Linkedin className="w-5 h-5"/></a>
              <a href={CONTACT.tiktok} target="_blank" rel="noreferrer"><TikTok className="w-5 h-5"/></a>
              <a href={CONTACT.youtube} target="_blank" rel="noreferrer"><Youtube className="w-5 h-5"/></a>
              <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer"><MessageCircle className="w-5 h-5"/></a>
              <a href={CONTACT.rss} target="_blank" rel="noreferrer"><Rss className="w-5 h-5"/></a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t text-center text-sm text-neutral-600">
        © {new Date().getFullYear()} Cuerpo Técnico Flavio Robatto
      </footer>

      {/* Floating WhatsApp */}
      <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 md:bottom-8 md:right-8 inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:scale-105 transition">
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  )
}
