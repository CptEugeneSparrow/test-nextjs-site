import Link from "next/link";
import { ClientCounter } from "@/components/ClientCounter";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 font-sans antialiased">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
              Next.js + Cloudflare
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Главная</Link>
              <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">О проекте</Link>
              <Link href="/api/hello" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">API Demo</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Next.js 16 на <span className="text-indigo-600 dark:text-indigo-400">Cloudflare Pages</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Полноценное React-приложение с TypeScript, Tailwind CSS, файловым роутингом, API routes и статическим экспортом — развёрнутое бесплатно на глобальном CDN Cloudflare.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/about" className="inline-flex items-center gap-2 px-8 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors shadow-lg">
                Узнать больше
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </Link>
              <a href="https://github.com/CptEugeneSparrow/test-nextjs-site" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                GitHub
              </a>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <FeatureCard
              icon={<CodeIcon />}
              title="Файловый роутинг"
              desc="Создаёшь файл в app/ — получаешь страницу. Вложенные папки = вложенные маршруты. Никакой конфигурации."
            />
            <FeatureCard
              icon={<ApiIcon />}
              title="API Routes"
              desc="Свой бэкенд внутри Next.js: app/api/route.ts. Работает на Edge — мгновенно по всему миру."
            />
            <FeatureCard
              icon={<DeployIcon />}
              title="Статический экспорт"
              desc="output: 'export' → папка out/ → Cloudflare Pages. Никаких серверов, только CDN."
            />
          </div>

          {/* Live Demo */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Живой демо: счётчик на клиенте</h2>
            <ClientCounter />
          </div>

          {/* Tech Stack */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Технологический стек</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: "Next.js 16", color: "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white" },
                { name: "React 19", color: "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300" },
                { name: "TypeScript", color: "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300" },
                { name: "Tailwind CSS", color: "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-300" },
                { name: "Cloudflare Pages", color: "bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300" },
                { name: "Edge Runtime", color: "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300" },
                { name: "GitHub Actions", color: "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300" },
                { name: "Static Export", color: "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white" },
              ].map((tech) => (
                <span key={tech.name} className={`px-4 py-2 rounded-full text-sm font-medium ${tech.color}`}>
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-gray-600 dark:text-gray-400 text-sm">
          <p>Развёрнуто через <a href="https://pages.cloudflare.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline">Cloudflare Pages</a> из <a href="https://github.com/CptEugeneSparrow/test-nextjs-site" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline">GitHub</a></p>
          <p className="mt-1">Автор: CptEugeneSparrow · Бесплатно навсегда · SSL · Глобальный CDN</p>
        </div>
      </footer>
    </div>
  );
}

// Feature Card Component
function FeatureCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
      <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center mb-4 text-indigo-600 dark:text-indigo-400">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{desc}</p>
    </div>
  );
}

// Icons
function CodeIcon() {
  return <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 16l4-16M6 12a4 4 0 11-8 0 4 4 0 018 0m12 0a4 4 0 11-8 0 4 4 0 018 0"/></svg>;
}
function ApiIcon() {
  return <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>;
}
function DeployIcon() {
  return <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>;
}