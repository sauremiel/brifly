import { Music2, Send, ArrowUpRight } from "lucide-react"

export function Header({ count }: { count: number }) {
  return (
    <header className="relative">
      <div className="absolute right-0 top-0">
        <div className="flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-terracotta opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-terracotta" />
          </span>
          <span className="tabular-nums font-mono text-sm font-medium text-foreground">
            {count.toLocaleString("ru-RU")}
          </span>
          <span className="hidden text-xs text-muted-foreground sm:inline">
            сгенерировано
          </span>
        </div>
      </div>

      <div className="max-w-2xl pr-24 sm:pr-40">
        <h1 className="text-6xl font-extrabold tracking-tight text-foreground sm:text-8xl">
          Бриф
        </h1>
        <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          Бесплатный генератор брифов и случайных заданий на фирменный стиль.
          Крути барабаны и получай вымышленного клиента: нишу, настроение,
          название и палитру.
        </p>

        <nav className="mt-6 flex flex-wrap items-center gap-2">
          <SocialLink href="https://www.tiktok.com" icon={<Music2 className="h-4 w-4" />}>
            TikTok
          </SocialLink>
          <SocialLink href="https://t.me" icon={<Send className="h-4 w-4" />}>
            Telegram
          </SocialLink>
          <SocialLink
            href="https://www.behance.net"
            icon={<ArrowUpRight className="h-4 w-4" />}
          >
            Портфолио
          </SocialLink>
        </nav>
      </div>
    </header>
  )
}

function SocialLink({
  href,
  icon,
  children,
}: {
  href: string
  icon: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-foreground/30 hover:bg-secondary"
    >
      {icon}
      {children}
    </a>
  )
}
