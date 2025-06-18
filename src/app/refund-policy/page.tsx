import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-[#1a0b2e] text-white py-12">
      <div className="container mx-auto px-4">
        <Card className="bg-[#2d1b4e] border-none text-white">
          <CardHeader>
            <CardTitle className="text-3xl font-bold mb-6">
              Refund Policy
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-3">Introduction</h2>
              <p>
                At Astrowallas, we want to ensure your satisfaction with our
                services. However, we understand that there may be situations
                where a refund is necessary.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                Refund Eligibility
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Consultation Services:</strong> If you are not
                  satisfied with the consultation, you may request a refund
                  within 24 hours of the session. After this period, no refund
                  will be issued.
                </li>
                <li>
                  <strong>
                    One-time Services (e.g., Personalized Horoscope Reports):
                  </strong>{" "}
                  No refunds will be issued once the report or service has been
                  delivered.
                </li>
                <li>
                  <strong>Online Courses/Workshops:</strong> You may request a
                  refund within 7 days if you are not satisfied with the course
                  content. refund will be credited to your original payment
                  method within 7 business days.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Refund Process</h2>
              <p>
                To request a refund, please contact us via email or phone,
                providing your reasons for dissatisfaction. We will process your
                request and notify you about the outcome.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
