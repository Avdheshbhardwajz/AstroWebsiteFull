import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const faqs = [
  {
    question: "What services does Astrowallas offer?",
    answer: "Astrowallas offers a variety of services including Vedic astrology consultations, tarot readings, numerology, gemstone consultations, vaastu remedies, and online courses in astrology and occult sciences."
  },
  {
    question: "How do I get started with your services?",
    answer: "Simply contact us through our website or call us to schedule your consultation. We'll arrange a time that suits you and provide any necessary information regarding our services."
  },
  {
    question: "What is the timeline for receiving my personalized report?",
    answer: "The timeline for delivering your personalized report depends on the service. For horoscope reports, it may take 3-5 business days to prepare and send. For tarot readings, you'll receive a summary shortly after the session."
  },
  {
    question: "Do you offer a money-back guarantee?",
    answer: "Yes, we offer a money-back guarantee for consultations if you are not satisfied within 24 hours of the session. Refunds are not available for completed reports or courses after the service has been delivered."
  },
  {
    question: "What if I am unhappy with my consultation or report?",
    answer: "We strive for 100% client satisfaction. If you are unhappy with your consultation or report, please let us know, and we will work with you to make the necessary adjustments or offer a refund (if applicable)."
  },
  {
    question: "Can I cancel or reschedule my consultation?",
    answer: "Yes, you can cancel or reschedule your consultation. Please inform us at least 24 hours before your scheduled time to avoid cancellation fees."
  },
  {
    question: "How do you protect my data?",
    answer: "We take data protection seriously. Your personal and sensitive information is kept secure through encryption, firewalls, and regular security audits."
  },
  {
    question: "Do you offer online consultations?",
    answer: "Yes, we provide online consultations via video call or phone for your convenience."
  },
  {
    question: "Can I buy a course or report as a gift?",
    answer: "Yes, you can purchase a course or report as a gift. Please contact us for more details on how to proceed with gifting our services."
  }
]

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-[#1a0b2e] text-white py-12">
      <div className="container mx-auto px-4">
        <Card className="bg-[#2d1b4e] border-none text-white">
          <CardHeader>
            <CardTitle className="text-3xl font-bold mb-6">Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

