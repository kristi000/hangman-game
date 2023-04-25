import Hangman from "@/components/Hangman"

export default function Home() {
  return (
    <div className="bg-slate-700 min-h-screen">
      <main className="max-w-7xl mx-auto">
        <Hangman />
      </main>
    </div>
  )
}
