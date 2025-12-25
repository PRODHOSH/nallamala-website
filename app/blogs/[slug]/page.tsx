"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Badge } from "@/components/ui/badge"

export default function BlogPost() {
  const params = useParams()
  const slug = params.slug as string

  // Sample blog data - in a real app, this would come from a CMS or database
  const blogData: { [key: string]: any } = {
    "welcome-to-nallamala-house": {
      title: "Welcome to Nallamala House: A Journey Begins",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=600&fit=crop",
      category: "Community",
      date: "Dec 20, 2024",
      author: "House Council",
      readTime: "5 min read",
      content: `
        <p>Welcome to Nallamala House, where tradition meets innovation and strangers become family. Since our establishment, we've been more than just a residential facility – we're a thriving community that shapes the lives of hundreds of students each year.</p>

        <h2>Our Story</h2>
        <p>Nallamala House was founded with a vision to create not just a place to stay, but a home where students could grow, learn, and build lifelong connections. Named after the historic Nallamala Hills, our house embodies the strength, resilience, and natural beauty of its namesake.</p>

        <h2>What Makes Us Special</h2>
        <p>At Nallamala House, we believe in fostering a culture of excellence, inclusivity, and mutual support. Our diverse community brings together students from all corners of the country, each contributing their unique perspectives and talents.</p>

        <h3>Key Highlights:</h3>
        <ul>
          <li><strong>Strong Community Bonds:</strong> Regular meetups, events, and activities that bring everyone together</li>
          <li><strong>Academic Excellence:</strong> Study groups, peer mentoring, and a conducive learning environment</li>
          <li><strong>Cultural Diversity:</strong> Celebrations of regional festivals and traditions from across India</li>
          <li><strong>Sports & Recreation:</strong> Active participation in inter-house competitions and sporting events</li>
          <li><strong>Leadership Opportunities:</strong> Platforms for students to develop leadership skills through various roles</li>
        </ul>

        <h2>Our Vision</h2>
        <p>We envision Nallamala House as a launchpad for future leaders, innovators, and changemakers. Through our programs and initiatives, we aim to develop well-rounded individuals who excel not just academically, but also in their personal and professional lives.</p>

        <h2>Join Our Family</h2>
        <p>Whether you're a fresher stepping into campus life or a senior continuing your journey, Nallamala House welcomes you with open arms. Here, you'll find not just roommates, but friends who'll stand by you through thick and thin.</p>

        <p>Together, we're building memories that last a lifetime. Welcome home!</p>
      `
    },
    "tech-symposium-2024-highlights": {
      title: "Tech Symposium 2024: Innovation at Its Best",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=600&fit=crop",
      category: "Events",
      date: "Dec 15, 2024",
      author: "WebOps Team",
      readTime: "8 min read",
      content: `
        <p>The annual Nallamala House Tech Symposium 2024 concluded with great success, bringing together tech enthusiasts, industry experts, and students for two days of learning, networking, and innovation.</p>

        <h2>Event Overview</h2>
        <p>This year's symposium focused on cutting-edge technologies shaping our future: Artificial Intelligence, Blockchain, Quantum Computing, and Sustainable Tech Solutions. With over 150 participants and 20+ speakers, the event was our biggest yet.</p>

        <h2>Key Highlights</h2>
        
        <h3>Day 1: AI & Machine Learning</h3>
        <p>The first day kicked off with keynote speeches from leading AI researchers discussing the latest developments in machine learning and neural networks. Workshops on practical ML applications kept attendees engaged throughout the day.</p>

        <h3>Day 2: Blockchain & Quantum Computing</h3>
        <p>Day two explored the revolutionary potential of blockchain technology and quantum computing. Industry professionals shared insights on real-world applications and future possibilities.</p>

        <h2>Notable Speakers</h2>
        <ul>
          <li>Dr. Priya Sharma - AI Research Lead at Tech Giants Inc.</li>
          <li>Rahul Verma - Blockchain Architect</li>
          <li>Prof. Anjali Desai - Quantum Computing Expert</li>
        </ul>

        <h2>Student Projects Showcase</h2>
        <p>The highlight of the symposium was the student projects showcase, where our talented members presented their innovative solutions. From AI-powered study assistants to blockchain-based verification systems, the creativity on display was truly inspiring.</p>

        <h2>Looking Ahead</h2>
        <p>The success of Tech Symposium 2024 sets a high bar for future events. We're already planning next year's edition, promising even more exciting content and opportunities for learning and collaboration.</p>

        <p>Thank you to all participants, speakers, and organizers who made this event a memorable success!</p>
      `
    },
    "diwali-celebration-memories": {
      title: "Diwali 2024: Lights, Joy, and Togetherness",
      image: "https://images.unsplash.com/photo-1605815719053-f5a869e00a08?w=1200&h=600&fit=crop",
      category: "Culture",
      date: "Nov 5, 2024",
      author: "Cultural Team",
      readTime: "6 min read",
      content: `
        <p>Diwali 2024 at Nallamala House was a spectacular celebration that brought our entire community together in a festival of lights, joy, and togetherness. From traditional rituals to modern entertainment, the event captured the true spirit of this beloved festival.</p>

        <h2>The Celebrations</h2>
        <p>Our Diwali festivities began early in the morning with the traditional puja ceremony, followed by a day packed with exciting activities and performances.</p>

        <h3>Rangoli Competition</h3>
        <p>The house courtyard was transformed into a canvas of colors with our annual rangoli competition. Students from different regions showcased their traditional designs, creating a beautiful tapestry of cultural diversity.</p>

        <h3>Cultural Performances</h3>
        <p>The evening witnessed mesmerizing performances including:</p>
        <ul>
          <li>Classical dance performances celebrating Indian mythology</li>
          <li>Musical renditions of traditional Diwali songs</li>
          <li>A spectacular fashion show featuring traditional attire from different states</li>
          <li>Comedy skits that had everyone in splits</li>
        </ul>

        <h2>The Grand Feast</h2>
        <p>No Diwali celebration is complete without delicious food! Our special dinner featured cuisines from across India, with each dish prepared with love by our mess staff and student volunteers.</p>

        <h2>Lighting Ceremony</h2>
        <p>As darkness fell, the entire house lit up with thousands of diyas and decorative lights. The sight was truly magical, symbolizing the victory of light over darkness and the bonds that unite us all.</p>

        <h2>Memories to Cherish</h2>
        <p>What made this Diwali special was not just the festivities, but the warmth and camaraderie shared by everyone. For many students away from home, Nallamala House became their family, making the festival just as special as celebrating with loved ones.</p>

        <p>Here's to many more beautiful celebrations together! Happy Diwali from the Nallamala House family! 🪔✨</p>
      `
    },
    "regional-meetup-success": {
      title: "Regional Meetups: Bringing Communities Together",
      image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1200&h=600&fit=crop",
      category: "Community",
      date: "Oct 28, 2024",
      author: "Regional Leaders",
      readTime: "7 min read",
      content: `
        <p>Regional meetups have become the cornerstone of community building at Nallamala House. These gatherings bring together students from the same geographical regions, creating a sense of home away from home.</p>

        <h2>Why Regional Meetups Matter</h2>
        <p>Moving away from home for higher education can be challenging. Regional meetups provide a familiar cultural environment where students can:</p>
        <ul>
          <li>Connect with others who speak their language</li>
          <li>Share and celebrate regional festivals and traditions</li>
          <li>Build a support network with people from similar backgrounds</li>
          <li>Exchange experiences and advice about adapting to campus life</li>
        </ul>

        <h2>Our Regional Communities</h2>
        
        <h3>Telangana Meetup</h3>
        <p>The Telangana community organized a grand Bathukamma celebration, complete with traditional songs, dance, and authentic Hyderabadi cuisine. Over 80 students participated, making it one of our largest regional events.</p>

        <h3>Tamil Nadu Gathering</h3>
        <p>Tamil students came together for Pongal celebrations, complete with kolam competitions and traditional games. The aroma of freshly made sakkarai pongal filled the entire house!</p>

        <h3>Kerala Community</h3>
        <p>Onam celebrations by the Kerala community were a visual treat, with elaborate pookkalam designs and a grand sadya feast that had everyone asking for seconds.</p>

        <h2>Cross-Cultural Exchange</h2>
        <p>While regional meetups celebrate specific cultures, they're open to everyone. This has led to beautiful cross-cultural exchanges, with students learning about different traditions, languages, and cuisines from across India.</p>

        <h2>Building Lasting Bonds</h2>
        <p>These meetups have resulted in strong friendships and mentorship relationships. Senior students guide freshers through academic challenges, homesickness, and the overall college experience.</p>

        <h2>Looking Forward</h2>
        <p>We're expanding our regional meetup program to include more activities like language exchange sessions, traditional cooking workshops, and cultural storytelling nights. Every region has unique stories to share, and we're creating platforms for these voices to be heard.</p>

        <p>Together, we're building a diverse yet united community where everyone feels at home!</p>
      `
    },
    "sports-championship-victory": {
      title: "Glory on the Field: Inter-House Sports Championship",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200&h=600&fit=crop",
      category: "Sports",
      date: "Sep 22, 2024",
      author: "Sports Committee",
      readTime: "5 min read",
      content: `
        <p>Nallamala House emerged victorious in the Inter-House Sports Championship 2024, demonstrating exceptional athletic prowess and team spirit across multiple sporting events.</p>

        <h2>Championship Overview</h2>
        <p>The annual Inter-House Sports Championship is the most anticipated sporting event on campus, featuring competitions in cricket, football, basketball, badminton, athletics, and more. This year's championship saw fierce competition from all houses.</p>

        <h2>Our Winning Journey</h2>

        <h3>Cricket Championship</h3>
        <p>Our cricket team dominated the tournament with an unbeaten streak. Captain Rahul's brilliant leadership and stellar performances from both batsmen and bowlers secured us the trophy.</p>

        <h3>Basketball Glory</h3>
        <p>The basketball team showcased incredible teamwork and strategy, winning the final match in a nail-biting finish. The entire house erupted in celebration as the final buzzer sounded!</p>

        <h3>Athletics Excellence</h3>
        <p>Our athletes set new records in multiple events:</p>
        <ul>
          <li>100m Sprint - New house record by Priya</li>
          <li>Long Jump - Gold medal performance</li>
          <li>Relay Races - Dominated all categories</li>
        </ul>

        <h2>The Spirit of Sportsmanship</h2>
        <p>Beyond winning, what made us proud was the sportsmanship displayed by our athletes. They supported each other, respected opponents, and played with integrity – true champions in every sense.</p>

        <h2>Behind the Scenes</h2>
        <p>This victory wouldn't have been possible without months of rigorous training, dedication from our coaches, and the unwavering support from the entire house community. From early morning practice sessions to late-night strategy meetings, everyone gave their all.</p>

        <h2>Celebrating Together</h2>
        <p>The championship win was celebrated with a grand party where athletes, supporters, and organizers came together to relive the glorious moments. The trophy now has a special place in our house common room!</p>

        <h2>Looking Ahead</h2>
        <p>This championship victory has set a high standard for future years. We're already preparing for next year's tournament, with new talent emerging and veterans ready to defend our title.</p>

        <p>Here's to the champions of Nallamala House – your hard work and dedication have made us all proud! 🏆</p>
      `
    },
    "freshman-orientation-guide": {
      title: "Freshman Orientation: Your Guide to Nallamala House",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=600&fit=crop",
      category: "Guide",
      date: "Aug 15, 2024",
      author: "House Mentors",
      readTime: "10 min read",
      content: `
        <p>Welcome to Nallamala House! This comprehensive guide will help you navigate your first few weeks and make the most of your house experience.</p>

        <h2>Getting Started</h2>

        <h3>Check-In Process</h3>
        <p>Your journey begins at the house reception. Here's what you need:</p>
        <ul>
          <li>Institute ID and admission documents</li>
          <li>Hostel allotment letter</li>
          <li>Two passport-size photographs</li>
          <li>Contact information for emergencies</li>
        </ul>

        <h2>Know Your House</h2>

        <h3>Facilities</h3>
        <ul>
          <li><strong>Common Room:</strong> Equipped with TV, games, and seating areas for relaxation</li>
          <li><strong>Study Room:</strong> 24/7 access with high-speed internet</li>
          <li><strong>Gym:</strong> Modern equipment for your fitness needs</li>
          <li><strong>Music Room:</strong> Soundproof practice space for musicians</li>
          <li><strong>Kitchen:</strong> Limited access for special occasions</li>
        </ul>

        <h2>House Rules & Regulations</h2>

        <h3>Essential Guidelines</h3>
        <p>To maintain a harmonious living environment:</p>
        <ul>
          <li>Respect quiet hours (10 PM - 7 AM)</li>
          <li>Keep common areas clean</li>
          <li>Follow mess timings strictly</li>
          <li>Visitors must be registered at reception</li>
          <li>No unauthorized modifications to rooms</li>
        </ul>

        <h2>Getting Involved</h2>

        <h3>House Council</h3>
        <p>Our democratically elected council manages house activities. Consider running for positions like Secretary, Deputy Secretary, or committee heads.</p>

        <h3>Clubs & Communities</h3>
        <p>Join clubs based on your interests:</p>
        <ul>
          <li>Tech Club (Coding, AI/ML projects)</li>
          <li>Cultural Committee (Events and festivals)</li>
          <li>Sports Committee (Organize tournaments)</li>
          <li>Regional Communities (Connect with home state peers)</li>
        </ul>

        <h2>Academic Support</h2>

        <h3>Peer Mentorship</h3>
        <p>Every freshman is assigned a senior mentor who can help with:</p>
        <ul>
          <li>Academic guidance</li>
          <li>Course selection advice</li>
          <li>Campus navigation</li>
          <li>Personal challenges</li>
        </ul>

        <h3>Study Groups</h3>
        <p>Join or form study groups for collaborative learning. The house study room is the perfect place for group discussions.</p>

        <h2>Social Life</h2>

        <h3>Regular Events</h3>
        <p>Participate in our regular events:</p>
        <ul>
          <li>Weekly movie nights</li>
          <li>Monthly cultural programs</li>
          <li>Inter-house competitions</li>
          <li>Festival celebrations</li>
          <li>Guest lectures and workshops</li>
        </ul>

        <h2>Health & Well-being</h2>

        <h3>Medical Facilities</h3>
        <p>Institute health center operates 24/7. Keep emergency numbers handy and inform your floor warden about any medical conditions.</p>

        <h3>Mental Health Support</h3>
        <p>Counseling services are available. Don't hesitate to reach out – taking care of your mental health is just as important as physical health.</p>

        <h2>Tips from Seniors</h2>

        <blockquote>
          <p>"Balance is key. Excel academically, but also make time for friends and activities. These four years go by quickly!" - Rahul, 4th Year</p>
        </blockquote>

        <blockquote>
          <p>"Get involved early. Join clubs, attend events, make friends. The house community becomes your family away from home." - Priya, 3rd Year</p>
        </blockquote>

        <h2>Important Contacts</h2>
        <ul>
          <li>House Warden: +91-XXXXXXXXXX</li>
          <li>Secretary: +91-XXXXXXXXXX</li>
          <li>Emergency Services: 112</li>
          <li>Institute Security: +91-XXXXXXXXXX</li>
        </ul>

        <h2>Final Thoughts</h2>
        <p>Nallamala House is more than just accommodation – it's a community that will shape your college experience. Be open to new experiences, make lasting friendships, and don't hesitate to ask for help when needed.</p>

        <p>Welcome to the Nallamala family. Your journey begins here! 🏠✨</p>
      `
    }
  }

  const blog = blogData[slug]

  if (!blog) {
    return (
      <main className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Blog Not Found</h1>
          <Link href="/blogs" className="text-primary hover:underline">
            ← Back to Blogs
          </Link>
        </div>
      </main>
    )
  }

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

      <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 max-w-4xl">
        {/* Back Button */}
        <Link 
          href="/blogs"
          className="inline-flex items-center gap-2 text-white/70 hover:text-primary transition-colors mb-8"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blogs
        </Link>

        {/* Header Image */}
        <div className="relative h-96 rounded-2xl overflow-hidden mb-8">
          <Image
            src={blog.image}
            alt={blog.title}
            width={1200}
            height={600}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        </div>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <Badge className={categoryColors[blog.category]}>
            {blog.category}
          </Badge>
          <div className="flex items-center gap-4 text-white/60 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{blog.date}</span>
            </div>
            <span>•</span>
            <span>{blog.readTime}</span>
            <span>•</span>
            <span>By {blog.author}</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-5xl font-serif font-bold text-white mb-8">
          {blog.title}
        </h1>

        {/* Content */}
        <div 
          className="prose prose-invert prose-lg max-w-none
            prose-headings:font-serif prose-headings:text-white prose-headings:font-bold
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-primary
            prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
            prose-p:text-white/80 prose-p:leading-relaxed prose-p:mb-6
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            prose-strong:text-white prose-strong:font-semibold
            prose-ul:text-white/80 prose-ul:my-6
            prose-li:my-2
            prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-white/70"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        {/* Share Section */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex items-center justify-between">
            <p className="text-white/70">Share this article:</p>
            <div className="flex gap-4">
              <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary/20 flex items-center justify-center transition-colors">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </button>
              <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary/20 flex items-center justify-center transition-colors">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </button>
              <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary/20 flex items-center justify-center transition-colors">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
