"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Calendar, Share2 } from "lucide-react"

type EventTab = "current" | "upcoming" | "past"

type EventItem = {
  id: number
  title: string
  description: string
  date: string
  location: string
  image: string
  status?: string
  category?: string
  attendees?: string
}

export default function Events() {
  const [activeTab, setActiveTab] = useState<EventTab>("current")
  const [search, setSearch] = useState("")

  const currentEvents: EventItem[] = [
    {
      id: 1,
      title: "Winter Fest 2025",
      description:
        "Ongoing celebration with cultural performances, music, and fun activities for the entire house community.",
      date: "Dec 23–27, 2025",
      location: "House Common Area",
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop",
      status: "Live Now",
    },
    {
      id: 2,
      title: "Chess Tournament Finals",
      description:
        "The final matches of our inter-house chess championship are being played this week.",
      date: "Dec 25–26, 2025",
      location: "Games Room",
      image:
        "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=800&h=600&fit=crop",
      status: "In Progress",
    },
    {
      id: 13,
      title: "Photography Contest",
      description:
        "Live entries and judging happening now. Showcase your talent and win prizes!",
      date: "Dec 24–26, 2025",
      location: "Art Studio",
      image:
        "https://images.unsplash.com/photo-1500530855697-77d6b10b6c6f?w=800&h=600&fit=crop",
      status: "Ongoing",
    },
  ]

  const upcomingEvents: EventItem[] = [
    {
      id: 3,
      title: "New Year Gala 2026",
      description:
        "Ring in the new year with an elegant gala featuring live music, dinner, and dancing.",
      date: "Dec 31, 2025",
      location: "Main Hall",
      image:
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=600&fit=crop",
      category: "Cultural",
    },
    {
      id: 4,
      title: "AI/ML Workshop",
      description:
        "Hands-on workshop on latest AI developments and machine learning techniques.",
      date: "Jan 8, 2026",
      location: "Tech Lab",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      category: "Academic",
    },
    {
      id: 5,
      title: "Basketball Tournament",
      description:
        "Annual inter-house basketball championship. Form your teams and register now!",
      date: "Jan 15–20, 2026",
      location: "Sports Complex",
      image:
        "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=600&fit=crop",
      category: "Sports",
    },
    {
      id: 6,
      title: "Freshers Welcome Party",
      description:
        "Official welcome party for the new batch with fun activities and team bonding.",
      date: "Jan 25, 2026",
      location: "House Courtyard",
      image:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop",
      category: "Social",
    },
    {
      id: 14,
      title: "Music Jam Night",
      description:
        "An open mic session where students can showcase their musical talent.",
      date: "Feb 5, 2026",
      location: "Auditorium",
      image:
        "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?w=800&h=600&fit=crop",
      category: "Entertainment",
    },
  ]

  const pastEvents: EventItem[] = [
    {
      id: 7,
      title: "Diwali Celebration 2024",
      description:
        "Grand Diwali celebration with traditional performances and festive dinner.",
      date: "Nov 1, 2024",
      location: "House Grounds",
      image:
        "https://images.unsplash.com/photo-1605815719053-f5a869e00a08?w=800&h=600&fit=crop",
      attendees: "200+",
    },
    {
      id: 8,
      title: "Tech Symposium 2024",
      description:
        "Annual tech symposium featuring talks on AI, blockchain, and quantum computing.",
      date: "Oct 15, 2024",
      location: "Auditorium",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
      attendees: "150+",
    },
    {
      id: 9,
      title: "Sports Day 2024",
      description:
        "House sports day with various competitions including cricket, football, and athletics.",
      date: "Sep 20, 2024",
      location: "Sports Complex",
      image:
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop",
      attendees: "180+",
    },
    {
      id: 10,
      title: "Orientation Week 2024",
      description:
        "Welcome week for new students with campus tours, ice-breaking activities, and mentor meetings.",
      date: "Aug 10–15, 2024",
      location: "Campus Wide",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
      attendees: "250+",
    },
    {
      id: 11,
      title: "Summer Farewell 2024",
      description:
        "Emotional farewell celebration for graduating seniors with performances and memories shared.",
      date: "Jul 28, 2024",
      location: "Main Hall",
      image:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop",
      attendees: "300+",
    },
    {
      id: 12,
      title: "Regional Meetup - Telangana",
      description:
        "Regional gathering bringing together students from Telangana for networking and cultural exchange.",
      date: "Jun 15, 2024",
      location: "Community Hall",
      image:
        "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&h=600&fit=crop",
      attendees: "80+",
    },
    {
      id: 15,
      title: "Hackathon 2024",
      description:
        "A 48-hour coding marathon where teams competed to build innovative solutions.",
      date: "May 20–21, 2024",
      location: "Tech Lab",
      image:
        "https://images.unsplash.com/photo-1581090700227-77d6b10b6c6f?w=800&h=600&fit=crop",
      attendees: "120+",
    },
  ]

  const events =
    activeTab === "current"
      ? currentEvents
      : activeTab === "upcoming"
      ? upcomingEvents
      : pastEvents

  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      {/* Soft background glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-24">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-5xl font-bold text-white mb-4">
            House <span className="text-primary">Events</span>
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            Discover what’s happening across Nallamala House
          </p>

          {/* Search */}
          <input
            type="text"
            placeholder="Search events..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md mx-auto px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-primary"
          />
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-14 flex-wrap">
          {(["current", "upcoming", "past"] as EventTab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-lg font-semibold transition ${
                activeTab === tab
                  ? "bg-primary text-black"
                  : "text-white/70 border border-white/10 hover:border-primary/40"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)} Events
            </button>
          ))}
        </div>

        {/* Events */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="rounded-xl overflow-hidden border border-white/10 bg-white/5
              hover:border-primary/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20
              transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {event.status && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-red-500 text-white">
                      {event.status}
                    </Badge>
                  </div>
                )}
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold text-white mb-2">
                  {event.title}
                </h3>
                <p className="text-white/70 text-sm mb-4">{event.description}</p>

                <div className="text-white/60 text-sm mb-4">
                  {event.date} • {event.location}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between">
                  {/* Add to Calendar */}
                  <a
                    href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
                      event.title
                    )}&details=${encodeURIComponent(
                      event.description
                    )}&location=${encodeURIComponent(event.location)}`}
                    target="_blank"
                    className="text-white/60 hover:text-primary"
                  >
                    <Calendar size={18} />
                  </a>

                  {/* Share */}
                  <button
                    onClick={() =>
                      navigator.share?.({
                        title: event.title,
                        text: event.description,
                      })
                    }
                    className="text-white/60 hover:text-primary"
                  >
                    <Share2 size={18} />
                  </button>
                </div>

                {event.attendees && (
                  <div className="mt-3 text-xs text-white/50">
                    {event.attendees} attendees
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  )
}
