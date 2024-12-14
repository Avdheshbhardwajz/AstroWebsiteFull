'use client';
import Image from 'next/image'
//import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PopupForm } from '@/components/PopupForm'
import { useRouter } from 'next/navigation';
import AnimatedImage from '@/components/AnimatedImage';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1a0b2e] text-white font-poppins">
      <HeroSection />
      <StatsSection />
      <ExpertSection />
      <ReadingsSection />
      <CoursesSection />
      <TestimonialsSection />
    </main>
  )
}

function HeroSection() {
  const router = useRouter();

  const handleGetStartedClick = () => {
    router.push('/courses');
  };

  return (
    <section className="relative h-screen flex justify-center items-center py-12">
      {/* <Image
        src="/heroSection.jpg"
        alt="Astrology Background"
        layout="fill"
        objectFit="cover"
        className="z-0"
      /> */}
      <div className="container  px-4 z-10 flex flex-row flex-wrap-reverse gap-10 justify-center items-center ">
        <div className="max-w-2xl text-center md:text-left md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Astrowallas</h1>
          <p className="text-xl md:text-2xl mb-8">Discover the Power of Prediction</p>
          
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700" onClick={handleGetStartedClick}>Get Started</Button>
          
        </div>
        <div className="w-[450px] flex justify-center  ">
          <AnimatedImage/>
        </div>
      </div>
    </section>
  )
}

function StatsSection() {
  const stats = [
    { title: "12+ Years", description: "Experience" },
    { title: "1500+", description: "Happy Students" },
    { title: "PhD Expert", description: "Learn from the Best" },
    { title: "100%", description: "Satisfaction" },
  ]

  return (
    <section className="py-20 bg-[#2d1b4e] text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-[#3d2b5e] border-none text-white">
              <CardContent className="p-6 text-center">
                <h3 className="text-3xl font-bold mb-2">{stat.title}</h3>
                <p className="text-purple-300">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function ExpertSection() {
  return (
    <section className="py-20 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Meet our Expert</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <Image
              src="/MentorImage.jpg"
              alt="Dr. Sugandha Rawat"
              width={400}
              height={600}
              className="border-2 border-white border-double shadow-lg"
            />
          </div>
          <div className="md:w-2/3">
            <h3 className="text-3xl font-bold mb-4">Dr. Sugandha Rawat</h3>
            <p className="text-lg mb-6">
              Dr. Sugandha Rawat is a renowned expert in Vedic Astrology, Tarot, Numerology, and Face Reading with over 12 years of dedicated practice. Holding a PhD in Vedic sciences, she has a deep understanding of ancient astrological systems and their practical application in modern life.
            </p>
            <p className="text-lg mb-6">
              She has guided and mentored over 1,500 students through her live online courses, personalized consultations, and in-person workshops. She combines the timeless wisdom of Vedic traditions with engaging storytelling and real-world examples, making complex concepts easy to grasp.
            </p>
            <p className="text-lg">
              Beyond teaching, Dr. Sugandha offers insightful consultations designed to empower individuals on their journey of self-discovery, personal growth, and decision-making. Whether you are seeking guidance, eager to learn, or curious about unlocking your potential, Dr. Sugandha Rawat wisdom and experience offer a profound and enlightening journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function ReadingsSection() {
  const readings = [
    {
      title: "Kundli Milan",
      description: "Curious if they're the one for you? Dive deep into your compatibility, uncover potential challenges, and discover where your strengths as a couple lie. Discover how your stars align, gain personalized remedies, and create a stronger, more harmonious bond with expert astrological guidance.",
      price: 3000,
    },
    {
      title: "Tarot Reading",
      description: "Uncover the answers to your deepest questions with Tarot Reading. Explore your past, present, and future to gain clarity, guidance, and insight into life's challenges and opportunities. Receive powerful remedies and personalized advice from one of India's leading astrologers to navigate your journey with confidence.",
      price: 2000,
    },
    {
      title: "Vedic Horoscope",
      description: "Guided by one of India's leading astrologers, tap into the ancient wisdom of Vedic Astrology to find clarity and direction in your life. Understand your strengths, challenges, and potential through your birth chart, and uncover practical remedies to overcome obstacles and create a more fulfilling future.",
      price: 3000,
    },
  ]

  return (
    <section className="py-20 bg-[#2d1b4e] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-center">Astrology Readings</h2>
        <h3 className="text-2xl mb-12 text-center">Personal Consultations</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {readings.map((reading, index) => (
            <Card key={index} className="bg-[#3d2b5e] border-none text-white">
              <CardContent className="p-6">
                <h4 className="text-2xl font-bold mb-4">{reading.title}</h4>
                <p className="mb-6">{reading.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">₹{reading.price}</span>
                  <PopupForm>
                  <Button className="bg-purple-600 hover:bg-purple-700">Book Now</Button>
                  </PopupForm>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function CoursesSection() {
  const courses = [
    "Master the 5000 years old Vedic Astrology",
    "Unlock the Secrets of Vedic Vastu & Feng Shui",
    "Unveil Your Future with Tarot",
    "Decode Your Destiny with Face Reading",
    "Discover Your True Potential with Numerology",
  ]

  return (
    <section className="py-20 relative text-white">
      {/* <Image
        src="/courses-bg.jpg"
        alt="Courses Background"
        layout="fill"
        objectFit="cover"
        className="z-0"
      /> */}
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold mb-4 text-center">Courses</h2>
        <h3 className="text-2xl mb-12 text-center">Our Best Tutorials</h3>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <ul className="space-y-4">
              {courses.map((course, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-purple-400 mr-2">•</span>
                  <span className="text-lg">{course}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-center items-end">
            <p className="text-3xl font-bold mb-4">₹8,000</p>
            <PopupForm>
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">Enroll Now</Button>
            </PopupForm>
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  const testimonials = [
    { name: "Priya Sharma", location: "Delhi" , url : "/Studentfeedback.jpg" },
    { name: "Rahul Patel", location: "Mumbai" , url : "/studentFeedback1.jpg" },
    { name: "Anita Desai", location: "Bangalore" , url : "/studentFeedback2.jpg" },
    { name: "Vikram Singh", location: "Jaipur" , url : "/studentFeedback3.jpg" },
  ]

  return (
    <section className="py-20 bg-[#2d1b4e] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-center">Testimonials</h2>
        <h3 className="text-2xl mb-12 text-center">Real Stories from Our Learners</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-[#3d2b5e] border-none text-white">
              <CardContent className="p-6">
                <div className="w-full h-auto mb-4">
                  <Image
                    src={testimonial.url}
                    alt={`Testimonial by ${testimonial.name}`}
                    width={300}
                    height={200}
                    className="border-2 border-double  w-full h-auto"
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                {/* <h4 className="text-xl font-bold">{testimonial.name}</h4>
                <p className="text-purple-300">{testimonial.location}</p> */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
