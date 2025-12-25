"use client"

import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Badge } from "@/components/ui/badge"

export default function Blogs() {
  const blogs = [
    {
      slug: "welcome-to-nallamala-house",
      title: "Welcome to Nallamala House: A Journey Begins",
      excerpt: "Discover how our house became a home for hundreds of students, fostering bonds that last a lifetime.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
      category: "Community",
      date: "Dec 20, 2024",
      author: "House Council",
      readTime: "5 min read"
    },
    {
      slug: "tech-symposium-2024-highlights",
      title: "Tech Symposium 2024: Innovation at Its Best",
      excerpt: "A recap of our annual tech symposium featuring talks on AI, blockchain, and the future of technology.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
      category: "Events",
      date: "Dec 15, 2024",
      author: "WebOps Team",
      readTime: "8 min read"
    },
    {
      slug: "diwali-celebration-memories",
      title: "Diwali 2024: Lights, Joy, and Togetherness",
      excerpt: "Reliving the magical moments from our Diwali celebration with rangoli, performances, and festive dinner.",
      image: "https://images.unsplash.com/photo-1605815719053-f5a869e00a08?w=800&h=600&fit=crop",
      category: "Culture",
      date: "Nov 5, 2024",
      author: "Cultural Team",
      readTime: "6 min read"
    },
    {
      slug: "regional-meetup-success",
      title: "Regional Meetups: Bringing Communities Together",
      excerpt: "How our regional meetups are strengthening bonds and creating lasting friendships across states.",
      image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&h=600&fit=crop",
      category: "Community",
      date: "Oct 28, 2024",
      author: "Regional Leaders",
      readTime: "7 min read"
    },
    {
      slug: "sports-championship-victory",
      title: "Glory on the Field: Inter-House Sports Championship",
      excerpt: "Our house teams dominated the inter-house sports championship with remarkable performances in multiple events.",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop",
      category: "Sports",
      date: "Sep 22, 2024",
      author: "Sports Committee",
      readTime: "5 min read"
    },
    {
      slug: "freshman-orientation-guide",
      title: "Freshman Orientation: Your Guide to Nallamala House",
      excerpt: "Everything new members need to know about settling into house life and making the most of their experience.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
      category: "Guide",
      date: "Aug 15, 2024",
      author: "House Mentors",
      readTime: "10 min read"
    }
  ]

  const categoryColors: { [key: string]: string } = {
    Community: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    Events: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    Culture: "bg-pink-500/20 text-pink-300 border-pink-500/30",
    Sports: "bg-green-500/20 text-green-300 border-green-500/30",
    Guide: "bg-orange-500/20 text-orange-300 border-orange-500/30",
  }

  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      
      {/* Background animations */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif font-bold text-white mb-4">
            Insights & <span className="text-primary">Stories</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Explore stories, experiences, and insights from our vibrant community
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Link 
              key={blog.slug} 
              href={`/blogs/${blog.slug}`}
              className="group"
            >
              <article className="glass-dark rounded-xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={categoryColors[blog.category]}>
                      {blog.category}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {blog.title}
                  </h2>
                  <p className="text-white/70 text-sm mb-4 line-clamp-3 flex-1">
                    {blog.excerpt}
                  </p>
                  
                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs text-white/50 pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{blog.date}</span>
                    </div>
                    <span>{blog.readTime}</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  )
}
