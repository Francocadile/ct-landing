export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Header */}
      <header className="border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
          <span className="text-lg font-semibold">Cuerpo Técnico</span>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#inicio" className="hover:text-neutral-600">Inicio</a>
            <a href="#staff" className="hover:text-neutral-600">Staff</a>
            <a href="#contacto" className="hover:text-neutral-600">Contacto</a>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main id="inicio" className="mx-auto max-w-5xl px-4">
        <section className="py-14">
          <h1 className="text-3xl font-bold">Cuerpo Técnico de Flavio Robatto</h1>
          <p className="mt-3 text-neutral-600">
            Sitio oficial: perfil, experiencia y staff.
          </p>
        </section>

        <section id="staff" className="py-10">
          <h2 className="text-2xl font-semibold">Staff</h2>
          <p className="mt-2 text-neutral-600">
            Pronto verás las tarjetas del equipo aquí.
          </p>
        </section>

        <section id="contacto" className="py-10">
          <h2 className="text-2xl font-semibold">Contacto</h2>
          <p className="mt-2 text-neutral-600">Información de contacto próximamente.</p>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t">
        <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-neutral-500">
          © {new Date().getFullYear()} Cuerpo Técnico. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}
