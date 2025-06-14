import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-[#1a0b2e] text-white py-12">
      <div className="container mx-auto px-4">
        <Card className="bg-[#2d1b4e] border-none text-white">
          <CardHeader>
            <CardTitle className="text-3xl font-bold mb-6">
              Terms and Conditions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-3">Introduction</h2>
              <p>
                By using the services of Astrowallas, you agree to comply with
                the following Terms and Conditions. Please read them carefully
                before engaging in any transactions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Services Provided</h2>
              <p>We provide the following services:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Vedic Astrology Consultations</li>
                <li>Vastu Consultation</li>
                <li>Numerology Consultations</li>
                <li>Gemstone Consultations</li>
                <li>Residential and Commercial Vastu</li>
                <li>
                  Online Courses and Workshops in Astrology and Occult Sciences
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Account Creation</h2>
              <p>
                To use certain services, you may be required to create an
                account. You are responsible for maintaining the confidentiality
                of your login information and for all activities that occur
                under your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                Deliverables and Timelines
              </h2>
              <p>
                We will provide the deliverables as outlined in the service
                agreement. We will make reasonable efforts to meet the deadlines
                mentioned in the project plan or consultation schedule.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Payment and Fees</h2>
              <p>
                Payments for services must be made according to the agreed
                terms. Non-payment or delay in payment may result in the
                suspension or termination of services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">User Conduct</h2>
              <p>
                You agree not to engage in any illegal, offensive, or harmful
                activities when using our services. This includes, but is not
                limited to, abusive language, harassment, and actions that could
                harm the reputation of Astrowallas.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                Limitation of Liability
              </h2>
              <p>
                Astrowallas will not be liable for any indirect, incidental, or
                consequential damages arising from the use of our services,
                except where explicitly stated in the service agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                Intellectual Property
              </h2>
              <p>
                All content, designs, logos, and intellectual property created
                by Astrowallas remain the property of the company unless
                specified otherwise.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Amendments</h2>
              <p>
                We reserve the right to amend these terms at any time. Any
                changes will be posted on this page and will become effective
                immediately.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
