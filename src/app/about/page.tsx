import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-[#1a0b2e] text-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">About Astrowallas</h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <Image
              src="/about-us-image.jpg"
              alt="Dr. Sugandha Rawat"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <p className="text-lg mb-6">
              Welcome to Astrowallas, where ancient wisdom meets modern solutions. With 16 years of experience in astrology, numerology, tarot reading, vaastu, and other occult sciences, we have been helping individuals navigate lifes complexities with clarity, confidence, and purpose.
            </p>
            <p className="text-lg mb-6">
              Founded by Dr. Sugandha Rawat, a highly experienced and respected expert in the mystical sciences, Astrowallas is dedicated to providing personalized consultations in astrology, tarot readings, gemstone advice, vaastu remedies, and more.
            </p>
          </div>
        </div>

        <Card className="bg-[#2d1b4e] border-none mb-16 text-white">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">
              Our services are tailored to meet the unique needs of each client, ensuring that every session delivers transformative insights and guidance for personal and professional growth. Whether you seek spiritual enlightenment, astrological advice, or solutions for practical matters, our team, led by Dr. Sugandha Rawat, is here to empower you with the knowledge and tools necessary for a balanced, harmonious, and fulfilling life.
            </p>
          </CardContent>
        </Card>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-white">
            {['Astrology', 'Numerology', 'Tarot Reading', 'Vaastu', 'Gemstone Consultation', 'Occult Sciences'].map((expertise, index) => (
              <Card key={index} className="bg-[#3d2b5e] border-none">
                <CardContent className="p-6 text-white">
                  <p className="text-xl font-semibold">{expertise}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-6">Learn with Us</h2>
          <p className="text-lg text-center mb-8">
            We also offer online courses and workshops designed to help you learn and deepen your understanding of astrology and other occult sciences. Whether you are a beginner or an advanced enthusiast, Astrowallas has something for everyone.
          </p>
          <div className="text-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Explore Our Courses
            </Button>
          </div>
        </div>

        <Card className="bg-[#2d1b4e] border-none text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Join Us Today</h2>
            <p className="text-lg mb-6">
              Embark on a transformative journey toward understanding and improving your life with Astrowallas.
            </p>
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Book a Consultation
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

