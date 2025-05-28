import Link from "next/link"
import { DiscIcon as Discord, ExternalLink, MessageCircle } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-slate-900 text-white flex flex-col items-center justify-center p-4">
      <div className="max-w-3xl w-full space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
            AMAN PRAKASH
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-md mx-auto">Premium Discord services and  Exchanges & Middlemen  Service </p>
        </div>

        {/* Links Section */}
        <div className="grid gap-4 md:grid-cols-2">
          <LinkCard
            title="Official store Website"
            description="Visit our official website for purchase"
            href="https://cloanboost.com/"
            icon={<ExternalLink className="h-5 w-5" />}
          />

          <LinkCard
            title="Cloan Boosts"
            description="Join our main shop server"
            href="https://discord.gg/cloanb"
            icon={<Discord className="h-5 w-5" />}
          />

          <LinkCard
            title="Gold MM"
            description="Middleman and Exchnage services"
            href="https://goldmm.one/"
            icon={<ExternalLink className="h-5 w-5" />}
          />

          <LinkCard
            title="Sova Vault"
            description="Join our Sova Vault Discord server"
            href="https://discord.gg/sovavault"
            icon={<Discord className="h-5 w-5" />}
          />
        </div>

        {/* Telegram Contact */}
        <div className="flex justify-center pt-6">
          <Button
            variant="outline"
            className="border-purple-500 text-purple-400 hover:bg-purple-500/10 hover:text-purple-300 transition-all duration-300"
            asChild
          >
            <Link
              href="https://t.me/AmxnPrakash"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              Contact 
            </Link>
          </Button>
        </div>

        {/* Footer */}
        <footer className="text-center text-sm text-slate-500 pt-8">
          <p>© {new Date().getFullYear()} CLOAN BOOST. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}

function LinkCard({ title, description, href, icon }) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" className="group">
      <div className="border border-slate-800 bg-black/50 backdrop-blur-sm rounded-xl p-6 h-full transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.15)] group-hover:translate-y-[-2px]">
        <div className="flex items-start gap-4">
          <div className="p-2 rounded-lg bg-slate-800/50 text-purple-400 group-hover:text-purple-300 transition-colors">
            {icon}
          </div>
          <div>
            <h2 className="text-lg font-medium mb-1">{title}</h2>
            <p className="text-slate-400 text-sm">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
