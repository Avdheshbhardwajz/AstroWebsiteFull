import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#1a0b2e] text-white py-12">
      <div className="container mx-auto px-4">
        <Card className="bg-[#2d1b4e] border-none text-white">
          <CardHeader>
            <CardTitle className="text-3xl font-bold mb-6">Privacy Policy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-3">Introduction</h2>
              <p>
                At Astrowallas, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you interact with our website or use our services. By accessing or using our website, you consent to the practices described in this policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Information We Collect</h2>
              <p>We collect the following types of personal information:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Personal Identification Information: Name, email address, phone number, etc.</li>
                <li>Non-Personal Identification Information: Browser type, device type, IP address, and usage statistics.</li>
                <li>Cookies and Tracking Technologies: We use cookies to track website visits and improve user experience. This includes third-party analytics services for better marketing strategies.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">How We Use Your Information</h2>
              <p>Your information is used for:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Providing and improving our services.</li>
                <li>Communicating with you regarding your account, services, or promotions.</li>
                <li>Customizing our website content to improve user experience.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Data Security</h2>
              <p>
                We take appropriate security measures to prevent unauthorized access, alteration, disclosure, or destruction of your personal data. These include encryption, secure networks, and compliance with global data protection standards.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Sharing Your Information</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personally identifiable information to third parties. However, we may share it with trusted partners to help us operate our website or deliver services to you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Your Rights</h2>
              <p>
                You have the right to access, update, and delete your personal information. You can contact us to request these changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Changes to the Privacy Policy</h2>
              <p>
                We may update this policy periodically to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the new policy on our website.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

