import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, FeatureCard } from "@/components/Card";
import { Button } from "@/components/Button";

function FolderIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
    </svg>
  );
}

function RocketIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function ArrowLeftIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  );
}

const futureFeatures = [
  "Авторизация (NextAuth.js) — Google, GitHub, Email",
  "База данных (Prisma + SQLite/PostgreSQL)",
  "Полнотекстовый поиск (Algolia / Meilisearch)",
  "Платежи (Stripe) — подписки, разовые платежи",
  "Админка — управление контентом, пользователями",
  "Тесты (Vitest + Playwright) в GitHub Actions",
  "Storybook — каталог UI компонентов",
  "i18n — многоязычность (next-intl)",
] as const;

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-bg-primary font-sans antialiased flex flex-col">
      <Header />

      <main className="flex-1 pt-28 pb-20 lg:pb-28">
        <div className="container max-w-4xl">
          {/* Page Header */}
          <header className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-4">
              О проекте
            </h1>
            <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto">
              Демонстрация возможностей Next.js 16 на Cloudflare Pages
            </p>
          </header>

          <div className="space-y-8">
            {/* What is this project */}
            <section className="animate-fade-in-up stagger-1" aria-labelledby="what-heading">
              <Card>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-brand-100 dark:bg-brand-900/30 rounded-xl flex items-center justify-center text-brand-600 dark:text-brand-400">
                    <FolderIcon />
                  </div>
                  <h2 id="what-heading" className="text-2xl font-bold text-text-primary">
                    Что это за проект?
                  </h2>
                </div>
                <div className="prose dark:prose-invert max-w-none text-text-secondary leading-relaxed space-y-4">
                  <p>
                    Это эталонный проект, демонстрирующий развёртывание Next.js 16 приложения на Cloudflare Pages с использованием статического экспорта (
                    <code className="bg-bg-tertiary dark:bg-surface-700 px-1.5 py-0.5 rounded text-sm font-mono text-brand-600 dark:text-brand-400 border border-border-primary">output: 'export'</code>
                    ).
                  </p>
                  <p>
                    Проект создан как часть обучения: от простейшего HTML до полноценного Next.js приложения с CI/CD через GitHub.
                  </p>
                </div>
              </Card>
            </section>

            {/* File Structure */}
            <section className="animate-fade-in-up stagger-2" aria-labelledby="structure-heading">
              <Card>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-brand-100 dark:bg-brand-900/30 rounded-xl flex items-center justify-center text-brand-600 dark:text-brand-400">
                    <SettingsIcon />
                  </div>
                  <h2 id="structure-heading" className="text-2xl font-bold text-text-primary">
                    Файловая структура
                  </h2>
                </div>
                <pre className="bg-surface-950 dark:bg-surface-950 rounded-xl p-6 overflow-x-auto text-sm font-mono text-surface-100 dark:text-surface-100/90 leading-relaxed">
{`test-nextjs-site/
├── src/
│   └── app/
│       ├── page.tsx          # Главная страница
│       ├── about/
│       │   └── page.tsx      # Эта страница (/about)
│       ├── api/
│       │   └── hello/
│       │       └── route.ts  # API endpoint (/api/hello)
│       ├── layout.tsx        # Корневой layout
│       └── globals.css       # Глобальные стили
├── public/                   # Статические ассеты
├── next.config.ts            # Конфигурация (output: 'export')
├── package.json
└── tsconfig.json`}
                </pre>
              </Card>
            </section>

            {/* How Deploy Works */}
            <section className="animate-fade-in-up stagger-3" aria-labelledby="deploy-heading">
              <Card>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-brand-100 dark:bg-brand-900/30 rounded-xl flex items-center justify-center text-brand-600 dark:text-brand-400">
                    <RocketIcon />
                  </div>
                  <h2 id="deploy-heading" className="text-2xl font-bold text-text-primary">
                    Как работает деплой
                  </h2>
                </div>
                <ol className="space-y-4 text-text-secondary leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center text-brand-600 dark:text-brand-400 font-bold text-sm">1</span>
                    <div>
                      <strong className="text-text-primary">Push в main</strong> → GitHub уведомляет Cloudflare Pages
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center text-brand-600 dark:text-brand-400 font-bold text-sm">2</span>
                    <div>
                      <strong className="text-text-primary">Build</strong> →{" "}
                      <code className="bg-bg-tertiary dark:bg-surface-700 px-1.5 py-0.5 rounded text-sm font-mono text-brand-600 dark:text-brand-400 border border-border-primary">npm run build</code>{" "}
                      создаёт папку{" "}
                      <code className="bg-bg-tertiary dark:bg-surface-700 px-1.5 py-0.5 rounded text-sm font-mono text-brand-600 dark:text-brand-400 border border-border-primary">out/</code>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center text-brand-600 dark:text-brand-400 font-bold text-sm">3</span>
                    <div>
                      <strong className="text-text-primary">Deploy</strong> → Cloudflare загружает 40+ файлов на глобальный CDN
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center text-brand-600 dark:text-brand-400 font-bold text-sm">4</span>
                    <div>
                      <strong className="text-text-primary">Live</strong> → Сайт доступен по{" "}
                      <code className="bg-bg-tertiary dark:bg-surface-700 px-1.5 py-0.5 rounded text-sm font-mono text-brand-600 dark:text-brand-400 border border-border-primary">test-nextjs-site-9da.pages.dev</code>
                    </div>
                  </li>
                </ol>
              </Card>
            </section>

            {/* Future Features */}
            <section className="animate-fade-in-up stagger-4" aria-labelledby="future-heading">
              <Card>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-brand-100 dark:bg-brand-900/30 rounded-xl flex items-center justify-center text-brand-600 dark:text-brand-400">
                    <RocketIcon />
                  </div>
                  <h2 id="future-heading" className="text-2xl font-bold text-text-primary">
                    Что можно добавить дальше
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {futureFeatures.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-bg-secondary rounded-lg border border-border-primary transition-colors duration-fast hover:border-brand-300 dark:hover:border-brand-700">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center text-brand-600 dark:text-brand-400">
                        <CheckIcon />
                      </span>
                      <span className="text-sm text-text-secondary">{item}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </section>
          </div>

          {/* Back to Home */}
          <div className="mt-12 text-center animate-fade-in-up stagger-5">
            <Link href="/">
              <Button variant="primary" leftIcon={<ArrowLeftIcon />} size="lg">
                Назад на главную
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}