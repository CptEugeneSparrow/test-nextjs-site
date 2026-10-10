import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 font-sans antialiased pt-20 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
              Next.js + Cloudflare
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Главная</Link>
              <Link href="/about" className="text-indigo-600 dark:text-indigo-400 font-medium">О проекте</Link>
              <Link href="/api/hello" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">API Demo</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            О проекте
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Демонстрация возможностей Next.js 16 на Cloudflare Pages
          </p>
        </div>

        <div className="space-y-8">
          <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
              Что это за проект?
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Это эталонный проект, демонстрирующий развёртывание Next.js 16 приложения на Cloudflare Pages с использованием статического экспорта (<code className="bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded">output: 'export'</code>).
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Проект создан как часть обучения: от простейшего HTML до полноценного Next.js приложения с CI/CD через GitHub.
              </p>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 16l4-16M6 12a4 4 0 11-8 0 4 4 0 018 0m12 0a4 4 0 11-8 0 4 4 0 018 0"/></svg>
              Файловая структура
            </h2>
            <pre className="bg-gray-100 dark:bg-gray-900 rounded-xl p-6 overflow-x-auto text-sm font-mono text-gray-800 dark:text-gray-200"><code>{`test-nextjs-site/
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
└── tsconfig.json`}</code></pre>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              Как работает деплой
            </h2>
            <ol className="space-y-4 text-gray-600 dark:text-gray-300 list-decimal list-inside">
              <li><strong>Push в main</strong> → GitHub уведомляет Cloudflare Pages</li>
              <li><strong>Build</strong> → <code className="bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded">npm run build</code> создаёт папку <code className="bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded">out/</code></li>
              <li><strong>Deploy</strong> → Cloudflare загружает 40+ файлов на глобальный CDN</li>
              <li><strong>Live</strong> → Сайт доступен по <code className="bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded">test-nextjs-site-9da.pages.dev</code></li>
            </ol>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
              Что можно добавить дальше
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Авторизация (NextAuth.js) — Google, GitHub, Email",
                "База данных (Prisma + SQLite/PostgreSQL)",
                "Полнотекстовый поиск (Algolia / Meilisearch)",
                "Платежи (Stripe) — подписки, разовые платежи",
                "Админка — управление контентом, пользователями",
                "Тесты (Vitest + Playwright) в GitHub Actions",
                "Storybook — каталог UI компонентов",
                "i18n — многоязычность (next-intl)",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <span className="w-6 h-6 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                  </span>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-12 text-center">
          <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m7 7H3"/></svg>
            Назад на главную
          </Link>
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-4">
        <div className="max-w-6xl mx-auto text-center text-gray-600 dark:text-gray-400 text-sm">
          Развёрнуто через Cloudflare Pages из GitHub · Автор: CptEugeneSparrow
        </div>
      </footer>
    </div>
  );
}