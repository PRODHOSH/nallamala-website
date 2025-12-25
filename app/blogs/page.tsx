"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Blogs() {
  return (
    <main className="min-h-screen bg-black flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-2xl w-full text-center">
          {/* Background animations */}
          <div className="absolute inset-0 overflow-hidden -z-10">
            <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-20"></div>
          </div>

          <div className="glass-dark p-12 rounded-2xl border border-primary/30">
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
            <h1 className="text-4xl font-serif font-bold text-white mb-4">Insights & Stories</h1>
            <p className="text-white/70 text-lg mb-8">
              We're crafting amazing stories and insights from our community
            </p>
            <div className="inline-block px-8 py-4 bg-primary/10 border border-primary/30 rounded-lg">
              <p className="text-primary text-xl font-bold">🚀 Coming Soon!</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
