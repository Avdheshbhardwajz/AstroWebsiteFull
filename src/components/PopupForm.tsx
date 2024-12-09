'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function PopupForm({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    city: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Replace this URL with your Google Apps Script deployment URL
  //  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxi6j7L7LQWv75J3VyU4zqpfdGL1lMJjMYT7zEhnBsDsQHzVQykQT6mqvzf_4o3W25b/exec'
    
//     try {

//         // Format data for Google Apps Script
//       const formDataObj = new FormData();
//       Object.keys(formData).forEach(key => {
//         formDataObj.append(key, formData[key as keyof typeof formData]);
//       });
//     //   const response =
//        await fetch(SCRIPT_URL, {
//         method: 'POST',
//         mode: 'no-cors',
        
//         body: formDataObj,
//       })

//       // Since we're using no-cors, we won't get a proper response
//       // So we'll just assume it worked if there's no error
//       alert('Form submitted successfully!')
//       setFormData({ fullName: '', mobile: '', city: '', message: '' })
//       setIsOpen(false)
//     } catch (error) {
//       console.error('Error:', error)
//       alert('Error submitting form. Please try again.')
//     }
//   }
try {
    // Convert form data to URL parameters
    const params = new URLSearchParams({
      fullName: formData.fullName,
      mobile: formData.mobile,
      city: formData.city,
      message: formData.message
    }).toString();

    const finalUrl = `https://script.google.com/macros/s/AKfycbwfLwxpriYlig4lHkQXRnbRdX-AtH0j8s3yhXkfBSMj42m5BVuxFXZkREaNYpRd9vW8Yw/exec?${params}`;

    await fetch(finalUrl, {
      method: 'GET',
      mode: 'no-cors',
    });

    alert('Form submitted successfully!')
    setFormData({ fullName: '', mobile: '', city: '', message: '' })
    setIsOpen(false)
  } catch (error) {
    console.error('Error:', error)
    alert('Error submitting form. Please try again.')
  }
}

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <div onClick={() => setIsOpen(true)}>
        {children}
      </div>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Contact Us</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              placeholder="Full Name"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              required
            />
          </div>
          <div>
            <Input
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
              required
            />
          </div>
          <div>
            <Input
              placeholder="City"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              required
            />
          </div>
          <div>
            <Textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
            />
          </div>
          <Button type="submit" className="w-full">Submit</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}