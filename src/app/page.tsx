import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ClientCounter } from "@/components/ClientCounter";
import { FeatureCard } from "@/components/Card";
import { Button } from "@/components/Button";

function CodeIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 16l4-16M6 12a4 4 0 11-8 0 4 4 0 018 0m12 0a4 4 0 11-8 0 4 4 0 018 0" />
    </svg>
  );
}

function ApiIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}

function DeployIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

const techStack = [
  { name: "Next.js 16", color: "bg-surface-100 dark:bg-surface-800 text-text-primary dark:text-text-inverse border border-border-primary" },
  { name: "React 19", color: "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-900/30" },
  { name: "TypeScript", color: "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-900/30" },
  { name: "Tailwind CSS", color: "bg-cyan-50 dark:bg-cyan-900/20 text-cyan-700 dark:text-cyan-300 border border-cyan-100 dark:border-cyan-900/30" },
  { name: "Cloudflare Pages", color: "bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 border border-orange-100 dark:border-orange-900/30" },
  { name: "Edge Runtime", color: "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border border-green-100 dark:border-green-900/30" },
  { name: "GitHub Actions", color: "bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 border border-purple-100 dark:border-purple-900/30" },
  { name: "Static Export", color: "bg-surface-100 dark:bg-surface-800 text-text-primary dark:text-text-inverse border border-border-primary" },
] as const;

export default function Home() {
  return (
    <div className="min-h-screen bg-bg-primary font-sans antialiased flex flex-col">
      <Header />

      <main className="flex-1 pt-32 pb-20 lg:pb-28">
        <div className="container">
          {/* Hero Section */}
          <section className="mb-20 lg:mb-28 animate-fade-in-up stagger-1" aria-labelledby="hero-heading">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 dark:bg-brand-900/30 border border-brand-200 dark:border-brand-800 mb-6 animate-fade-in stagger-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-600" />
                </span>
                <span className="text-sm font-medium text-brand-700 dark:text-brand-300">Production Ready · Static Export · Edge CDN</span>
              </div>

              <h1 id="hero-heading" className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-text-primary leading-tight tracking-tight mb-6 animate-fade-in-up stagger-2">
                Next.js 16 на{" "}
                <span className="text-brand-600 dark:text-brand-400">Cloudflare Pages</span>
              </h1>

              <p className="text-lg sm:text-xl lg:text-2xl text-text-secondary max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in-up stagger-3">
                Полноценное React-приложение с TypeScript, Tailwind CSS, файловым роутингом, API routes и статическим экспортом — развёрнутое бесплатно на глобальном CDN Cloudflare.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up stagger-4">
                <Link href="/about">
                  <Button size="lg" rightIcon={<ArrowRightIcon />}>
                    Узнать больше
                  </Button>
                </Link>
                <a href="https://github.com/CptEugeneSparrow/test-nextjs-site" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" leftIcon={<GithubIcon />}>
                    GitHub
                  </Button>
                </a>
              </div>
            </div>
          </section>

          {/* Features Grid */}
          <section className="mb-20 lg:mb-28" aria-labelledby="features-heading">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 id="features-heading" className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
                Ключевые возможности
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Всё, что нужно для современного веб-приложения — из коробки, без лишней конфигурации.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              <FeatureCard
                icon={<CodeIcon />}
                title="Файловый роутинг"
                description="Создаёшь файл в app/ — получаешь страницу. Вложенные папки = вложенные маршруты. Никакой конфигурации."
                className="animate-fade-in-up stagger-1"
              />
              <FeatureCard
                icon={<ApiIcon />}
                title="API Routes"
                description="Свой бэкенд внутри Next.js: app/api/route.ts. Работает на Edge — мгновенно по всему миру."
                className="animate-fade-in-up stagger-2"
              />
              <FeatureCard
                icon={<DeployIcon />}
                title="Статический экспорт"
                description="output: 'export' → папка out/ → Cloudflare Pages. Никаких серверов, только CDN."
                className="animate-fade-in-up stagger-3"
              />
            </div>
          </section>

          {/* Live Demo */}
          <section className="mb-20 lg:mb-28 animate-fade-in-up" aria-labelledby="demo-heading">
            <div className="bg-bg-primary border border-border-primary rounded-2xl p-8 lg:p-12 shadow-xl">
              <div className="max-w-md mx-auto">
                <h2 id="demo-heading" className="text-2xl sm:text-3xl font-bold text-text-primary mb-3 text-center">
                  Живой демо: интерактивный счётчик
                </h2>
                <p className="text-text-secondary text-center mb-8">
                  Клиентский React-компонент без серверной логики. Состояние сохраняется в браузере.
                </p>
                <ClientCounter />
              </div>
            </div>
          </section>

          {/* Tech Stack */}
          <section aria-labelledby="tech-heading">
            <div className="text-center mb-10 animate-fade-in-up">
              <h2 id="tech-heading" className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
                Технологический стек
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Современные инструменты, проверенные в продакшене.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 animate-fade-in-up stagger-1">
              {techStack.map((tech) => (
                <span
                  key={tech.name}
                  className={`px-4 py-2 rounded-full text-sm font-medium border ${tech.color} transition-all duration-fast hover:shadow-md hover:border-brand-300 dark:hover:border-brand-700`}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}