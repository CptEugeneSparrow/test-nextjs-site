import { NextResponse } from "next/server";

export const dynamic = "force-static";

export async function GET() {
  const data = {
    message: "Привет от API на Cloudflare Edge!",
    timestamp: new Date().toISOString(),
    runtime: "edge",
    version: "1.0.0",
    features: [
      "Статический экспорт (output: 'export')",
      "API Routes работают как статические JSON файлы",
      "Глобальный CDN Cloudflare (300+ локаций)",
      "Бесплатно: 100,000 запросов/день",
      "SSL, DDoS защита, сжатие — включено",
    ],
    links: {
      github: "https://github.com/CptEugeneSparrow/test-nextjs-site",
      cloudflare: "https://pages.cloudflare.com",
      nextjs: "https://nextjs.org/docs/app/building-your-application/routing/route-handlers",
    },
  };

  return NextResponse.json(data, {
    headers: {
      "Cache-Control": "public, max-age=60, s-maxage=300",
      "Access-Control-Allow-Origin": "*",
    },
  });
}