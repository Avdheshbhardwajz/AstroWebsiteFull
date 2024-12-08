
import { CourseForm } from '@/components/CourseForm'
import { CourseCarousel } from '@/components/CourseCarousel'
//import { Button } from "@/components/ui/button"

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-[#1a0b2e] text-white">
      <HeroSection />
      <AllCoursesSection />
      <PrivacySection />
    </div>
  )
}

function HeroSection() {
  return (
    <section className="relative py-20">
      {/* <Image
        src="/astro-bg.jpg"
        alt="Astrology Background"
        layout="fill"
        objectFit="cover"
        className="z-0"
      /> */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-6">Master Vedic Astrology</h1>
            <p className="text-lg mb-6">
              Namaste! I am excited to share the ancient wisdom of Vedic Astrology through my online course. This course will help you connect deeply with the Universe and unlock the secrets of your own life. Vedic astrology is not just about learning—it is about discovering your true self and empowering you to help others do the same. I make astrology easy, practical, and enjoyable. Join me on this transformative journey, and lets explore the stars together!
            </p>
          </div>
          <div className="md:w-1/2">
            <CourseForm />
          </div>
        </div>
      </div>
    </section>
  )
}

function AllCoursesSection() {
  return (
    <section className="py-20 bg-[#2d1b4e]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">All Courses</h2>
        <CourseCarousel />
      </div>
    </section>
  )
}

function PrivacySection() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Where Your Data Is Sent</h2>
        <p className="mb-4">
          Visitor comments may be checked through an automated spam detection service.
        </p>
        <p>
          For any privacy-related inquiries, feel free to contact us through{' '}
          <a href="https://gurukul.astrowallas.in/" className="text-purple-400 hover:underline">
            https://gurukul.astrowallas.in/
          </a>
          .
        </p>
      </div>
    </section>
  )
}

