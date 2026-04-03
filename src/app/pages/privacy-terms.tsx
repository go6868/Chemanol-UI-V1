import { PageHeader } from "@/app/components/page-header";
import { Breadcrumbs } from "@/app/components/breadcrumbs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";

export function PrivacyTerms() {
  return (
    <div className="bg-neutral-50">
      <PageHeader
        title="Privacy Policy & Terms of Use"
        description="Our commitment to protecting your privacy and the terms governing the use of our website."
      />

      <div className="max-w-[1440px] mx-auto px-12 py-12">
        <Breadcrumbs items={[{ label: "Privacy Policy & Terms of Use" }]} />
        
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="privacy" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="privacy">Privacy Policy</TabsTrigger>
              <TabsTrigger value="terms">Terms of Use</TabsTrigger>
            </TabsList>

            {/* Privacy Policy Tab */}
            <TabsContent value="privacy" className="space-y-6">
              <div className="bg-white border border-neutral-200 rounded-sm p-8">
                <h2 className="text-2xl mb-4 text-neutral-900">Privacy Policy</h2>
                <p className="text-sm text-neutral-600 mb-6">Last Updated: January 2026</p>

                <div className="space-y-6 text-sm text-neutral-700">
                  <section>
                    <h3 className="text-base text-neutral-900 mb-3">1. Introduction</h3>
                    <p>
                      Chemanol (Methanol Chemicals Company) ("we", "our", or "us") is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-base text-neutral-900 mb-3">2. Information We Collect</h3>
                    <p className="mb-3">We may collect and process the following types of information:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Personal Information:</strong> Name, email address, phone number, company name, and job title when you submit enquiry forms or contact us</li>
                      <li><strong>Technical Data:</strong> IP address, browser type, operating system, and pages visited</li>
                      <li><strong>Usage Data:</strong> Information about how you use our website, products, and services</li>
                      <li><strong>Communications:</strong> Records of correspondence when you contact us</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-base text-neutral-900 mb-3">3. How We Use Your Information</h3>
                    <p className="mb-3">We use the information we collect to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Respond to your enquiries and provide customer support</li>
                      <li>Provide information about our products and services</li>
                      <li>Process and fulfill your requests</li>
                      <li>Improve our website and user experience</li>
                      <li>Comply with legal and regulatory requirements</li>
                      <li>Send marketing communications (with your consent)</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-base text-neutral-900 mb-3">4. Data Security</h3>
                    <p>
                      We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-base text-neutral-900 mb-3">5. Data Retention</h3>
                    <p>
                      We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-base text-neutral-900 mb-3">6. Your Rights</h3>
                    <p className="mb-3">You have the right to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Access your personal information</li>
                      <li>Request correction of inaccurate data</li>
                      <li>Request deletion of your personal information</li>
                      <li>Object to processing of your personal information</li>
                      <li>Withdraw consent at any time</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-base text-neutral-900 mb-3">7. Cookies</h3>
                    <p>
                      Our website uses cookies to enhance user experience. Cookies are small text files placed on your device. You can set your browser to refuse cookies, but this may limit your ability to use certain features of our website.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-base text-neutral-900 mb-3">8. Third-Party Links</h3>
                    <p>
                      Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites and encourage you to read their privacy policies.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-base text-neutral-900 mb-3">9. Changes to This Policy</h3>
                    <p>
                      We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-base text-neutral-900 mb-3">10. Contact Us</h3>
                    <p>
                      If you have questions about this Privacy Policy or our data practices, please contact us at:
                    </p>
                    <div className="mt-3 p-4 bg-neutral-50 border border-neutral-200 rounded-sm">
                      <p><strong>Chemanol (Methanol Chemicals Company)</strong></p>
                      <p>Email: privacy@chemanol.com</p>
                      <p>Phone: +966 (0)3 341 8888</p>
                    </div>
                  </section>
                </div>
              </div>
            </TabsContent>

            {/* Terms of Use Tab */}
            <TabsContent value="terms" className="space-y-6">
              <div className="bg-white border border-neutral-200 rounded-sm p-8">
                <h2 className="text-2xl mb-4 text-neutral-900">Terms of Use</h2>
                <p className="text-sm text-neutral-600 mb-6">Last Updated: January 2026</p>

                <div className="space-y-6 text-sm text-neutral-700">
                  <section>
                    <h3 className="text-base text-neutral-900 mb-3">1. Acceptance of Terms</h3>
                    <p>
                      By accessing and using this website, you accept and agree to be bound by the terms and conditions of this agreement. If you do not agree to these terms, please do not use this website.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-base text-neutral-900 mb-3">2. Use of Website</h3>
                    <p className="mb-3">You may use this website for lawful purposes only. You agree not to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Use the website in any way that violates applicable laws or regulations</li>
                      <li>Attempt to gain unauthorized access to any part of the website</li>
                      <li>Interfere with or disrupt the website or servers</li>
                      <li>Use automated systems to access the website without our permission</li>
                      <li>Copy, modify, or distribute content without authorization</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-base text-neutral-900 mb-3">3. Intellectual Property</h3>
                    <p>
                      All content on this website, including text, graphics, logos, images, and software, is the property of Chemanol or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may not use, reproduce, or distribute any content without our express written permission.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-base text-neutral-900 mb-3">4. Product Information</h3>
                    <p>
                      We strive to provide accurate product information on this website. However, we do not warrant that product descriptions, specifications, or other content is accurate, complete, reliable, current, or error-free. Product specifications are subject to change without notice.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-base text-neutral-900 mb-3">5. Technical Documentation</h3>
                    <p>
                      Safety Data Sheets (SDS), Technical Data Sheets (TDS), and other technical documents are provided for informational purposes. While we make every effort to ensure accuracy, users should verify information before use in any application.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-base text-neutral-900 mb-3">6. Limitation of Liability</h3>
                    <p>
                      To the fullest extent permitted by law, Chemanol shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of this website or any content, products, or services obtained through the website.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-base text-neutral-900 mb-3">7. Disclaimer of Warranties</h3>
                    <p>
                      This website and its content are provided "as is" without any warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-base text-neutral-900 mb-3">8. External Links</h3>
                    <p>
                      This website may contain links to third-party websites. These links are provided for your convenience only. We do not endorse or assume responsibility for the content, products, or services of linked sites.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-base text-neutral-900 mb-3">9. Indemnification</h3>
                    <p>
                      You agree to indemnify and hold harmless Chemanol, its affiliates, officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses arising from your use of the website or violation of these terms.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-base text-neutral-900 mb-3">10. Governing Law</h3>
                    <p>
                      These terms shall be governed by and construed in accordance with the laws of the Kingdom of Saudi Arabia. Any disputes arising from these terms or your use of the website shall be subject to the exclusive jurisdiction of the courts of Saudi Arabia.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-base text-neutral-900 mb-3">11. Changes to Terms</h3>
                    <p>
                      We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on this page. Your continued use of the website after changes are posted constitutes acceptance of the modified terms.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-base text-neutral-900 mb-3">12. Contact Information</h3>
                    <p>
                      If you have questions about these Terms of Use, please contact us at:
                    </p>
                    <div className="mt-3 p-4 bg-neutral-50 border border-neutral-200 rounded-sm">
                      <p><strong>Chemanol (Methanol Chemicals Company)</strong></p>
                      <p>Email: legal@chemanol.com</p>
                      <p>Phone: +966 (0)3 341 8888</p>
                    </div>
                  </section>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
