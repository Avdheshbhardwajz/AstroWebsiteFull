'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Facebook, Instagram, Twitter, Mail, Phone, Globe, MapPin, Clock } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#1a0b2e] text-white py-16">
      <div className="container mx-auto px-4 animate-fadeIn">
        <h1 className="text-5xl font-bold text-center mb-12">Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="animate-slideInLeft">
            <p className="text-lg mb-8 text-purple-200">
              We would love to hear from you! Whether you are looking to book a consultation, have questions about our services, or need more information, Astrowallas is here to assist you. Our team is ready to provide the guidance you need.
            </p>
            <ContactForm />
          </div>
          <div className="animate-slideInRight">
            <ContactInfo />
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-fadeInUp">
            <SocialMedia />
          </div>
          <div className="animate-fadeInUp delay-200">
            <OfficeHours />
          </div>
        </div>
      </div>
    </div>
  )
}

function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formState)
  }

  return (
    <Card className="bg-[#2d1b4e] border-none shadow-lg hover:shadow-purple-500/20 transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-white">Send us a message</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input 
              placeholder="Your Name" 
              name="name"
              value={formState.name}
              onChange={handleChange}
              className="bg-[#3d2b5e] border-purple-400 text-white placeholder-purple-300"
            />
          </div>
          <div>
            <Input 
              type="email" 
              placeholder="Your Email" 
              name="email"
              value={formState.email}
              onChange={handleChange}
              className="bg-[#3d2b5e] border-purple-400 text-white placeholder-purple-300"
            />
          </div>
          <div>
            <Input 
              placeholder="Subject" 
              name="subject"
              value={formState.subject}
              onChange={handleChange}
              className="bg-[#3d2b5e] border-purple-400 text-white placeholder-purple-300"
            />
          </div>
          <div>
            <Textarea 
              placeholder="Your Message" 
              name="message"
              value={formState.message}
              onChange={handleChange}
              className="bg-[#3d2b5e] border-purple-400 text-white placeholder-purple-300 min-h-[150px]"
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-purple-600 hover:bg-purple-700 text-white"
          >
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

function ContactInfo() {
  return (
    <Card className="bg-[#2d1b4e] text-white border-none shadow-lg hover:shadow-purple-500/20 transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-white">Contact Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center space-x-4">
          <Phone className="text-purple-400" />
          <span>+91 8791182343</span>
        </div>
        <div className="flex items-center space-x-4">
          <Mail className="text-purple-400" />
          <span>info@astrowallas.com</span>
        </div>
        <div className="flex items-center space-x-4">
          <Globe className="text-purple-400" />
          <span>www.astrowallas.com</span>
        </div>
        <div className="flex items-center space-x-4">
          <MapPin className="text-purple-400" />
          <span>B 73
Motikunj
Mathura 281001 , Uttar Pradesh India</span>
        </div>
      </CardContent>
    </Card>
  )
}

function SocialMedia() {
  return (
    <Card className="bg-[#2d1b4e] border-none shadow-lg hover:shadow-purple-500/20 transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-white">Follow Us</CardTitle>
      </CardHeader>
      <CardContent className="flex space-x-6">
        <a href="http://www.youtube.com/@ASTROwallas" className="text-purple-400 hover:text-purple-300 transition-colors">
          <Facebook size={24} />
        </a>
        <a href="http://www.youtube.com/@ASTROwallas" className="text-purple-400 hover:text-purple-300 transition-colors">
          <Instagram size={24} />
        </a>
        <a href="http://twitter.com/astrowallas" className="text-purple-400 hover:text-purple-300 transition-colors">
          <Twitter size={24} />
        </a>
      </CardContent>
    </Card>
  )
}

function OfficeHours() {
  return (
    <Card className="bg-[#2d1b4e] border-none shadow-lg hover:shadow-purple-500/20 transition-shadow duration-300 text-white">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-white">Office Hours</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-4">
          <Clock className="text-purple-400" />
          <div>
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 10:00 AM - 4:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
