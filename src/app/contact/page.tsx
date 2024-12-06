'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Facebook, Instagram, Twitter, Mail, Phone, Globe, MapPin, Clock } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#1a0b2e] text-white py-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <h1 className="text-5xl font-bold text-center mb-12">Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg mb-8 text-purple-200">
              We would love to hear from you! Whether you are looking to book a consultation, have questions about our services, or need more information, Astrowallas is here to assist you. Our team is ready to provide the guidance you need.
            </p>
            <ContactForm />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <ContactInfo />
          </motion.div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <SocialMedia />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <OfficeHours />
          </motion.div>
        </div>
      </motion.div>
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
              className="bg-[#3d2b5e] border-purple-400 text-white placeholder-purple-300" 
            />
          </div>
          <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white transition-colors duration-300">
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

function ContactInfo() {
  return (
    <Card className="bg-[#2d1b4e] border-none shadow-lg hover:shadow-purple-500/20 transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-white">Contact Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center text-purple-200 hover:text-white transition-colors duration-300">
          <Phone className="mr-4 text-purple-400" />
          <span>+91 (Phone number not provided)</span>
        </div>
        <div className="flex items-center text-purple-200 hover:text-white transition-colors duration-300">
          <Mail className="mr-4 text-purple-400" />
          <span>support@astrowallas.com</span>
        </div>
        <div className="flex items-center text-purple-200 hover:text-white transition-colors duration-300">
          <Globe className="mr-4 text-purple-400" />
          <span>www.astrowallas.com</span>
        </div>
        <div className="flex items-center text-purple-200 hover:text-white transition-colors duration-300">
          <MapPin className="mr-4 text-purple-400" />
          <span>(Address not provided)</span>
        </div>
      </CardContent>
    </Card>
  )
}

function SocialMedia() {
  return (
    <Card className="bg-[#2d1b4e] border-none shadow-lg hover:shadow-purple-500/20 transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-white">Connect With Us</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center">
          <Facebook className="mr-4 text-purple-400" />
          <a href="https://facebook.com/astrowallas" className="text-purple-200 hover:text-white transition-colors duration-300">facebook.com/astrowallas</a>
        </div>
        <div className="flex items-center">
          <Instagram className="mr-4 text-purple-400" />
          <a href="https://instagram.com/astrowallas" className="text-purple-200 hover:text-white transition-colors duration-300">instagram.com/astrowallas</a>
        </div>
        <div className="flex items-center">
          <Twitter className="mr-4 text-purple-400" />
          <a href="https://twitter.com/astrowallas" className="text-purple-200 hover:text-white transition-colors duration-300">twitter.com/astrowallas</a>
        </div>
      </CardContent>
    </Card>
  )
}

function OfficeHours() {
  return (
    <Card className="bg-[#2d1b4e] border-none shadow-lg hover:shadow-purple-500/20 transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-white">Office Hours</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center text-purple-200">
          <Clock className="mr-4 text-purple-400" />
          <span>Monday to Friday: 10:00 AM – 6:00 PM</span>
        </div>
        <div className="flex items-center text-purple-200">
          <Clock className="mr-4 text-purple-400" />
          <span>Saturday: 11:00 AM – 4:00 PM</span>
        </div>
        <div className="flex items-center text-purple-200">
          <Clock className="mr-4 text-purple-400" />
          <span>Sunday: Closed</span>
        </div>
      </CardContent>
    </Card>
  )
}

