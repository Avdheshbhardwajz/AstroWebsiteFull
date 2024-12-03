'use client'

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const courses = [
  {
    title: "Master the 5000 years old Vedic Astrology",
    image: "/course-vedic-astrology.jpg",
  },
  {
    title: "Unlock the Secrets of Vedic Vastu & Feng Shui",
    image: "/course-vastu-fengshui.jpg",
  },
  {
    title: "Unveil Your Future with Tarot",
    image: "/course-tarot.jpg",
  },
  {
    title: "Decode Your Destiny with Face Reading",
    image: "/course-face-reading.jpg",
  },
  {
    title: "Discover Your True Potential with Numerology",
    image: "/course-numerology.jpg",
  },
]

export function CourseCarousel() {
  return (
    <Carousel className="w-full max-w-xs mx-auto text-white">
      <CarouselContent>
        {courses.map((course, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="bg-[#3d2b5e] border-none text-white">
                <CardContent className="flex flex-col items-center p-6">
                  <Image
                    src={course.image}
                    alt={course.title}
                    width={300}
                    height={200}
                    className="rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-bold mb-2 text-center">{course.title}</h3>
                  <p className="text-purple-300 mb-2">15 Sessions</p>
                  <p className="text-2xl font-bold mb-4">₹8,000</p>
                  <Button className="bg-purple-600 hover:bg-purple-700">Enroll Now</Button>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

