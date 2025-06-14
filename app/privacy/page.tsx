import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Quiet View",
  description: "Privacy Policy for Quiet View",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-zinc-100">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-light mb-8">Privacy Policy</h1>
        
        <div className="prose prose-invert prose-zinc max-w-none">
          <p className="text-zinc-300 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="text-xl font-light mb-4">1. Information We Collect</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Quiet View collects minimal information to provide and improve our service:
            </p>
            <ul className="text-zinc-300 leading-relaxed mb-4 ml-6">
              <li>• Usage analytics through Google Analytics</li>
              <li>• Technical information such as browser type and device information</li>
              <li>• No personal identifiable information is collected directly</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-light mb-4">2. Google Analytics</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">
              We use Google Analytics to understand how visitors interact with our website. Google Analytics collects information anonymously and reports website trends without identifying individual visitors.
            </p>
            <p className="text-zinc-300 leading-relaxed mb-4">
              You can opt out of Google Analytics by installing the Google Analytics opt-out browser add-on.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-light mb-4">3. YouTube Integration</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Our website displays live camera feeds through YouTube embeds. YouTube may collect data about your viewing habits according to their privacy policy. We use youtube-nocookie.com domains where possible to enhance privacy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-light mb-4">4. Cookies</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">
              We use cookies for:
            </p>
            <ul className="text-zinc-300 leading-relaxed mb-4 ml-6">
              <li>• Google Analytics tracking</li>
              <li>• Improving user experience</li>
              <li>• No personal data is stored in cookies</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-light mb-4">5. Data Security</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">
              We implement appropriate security measures to protect against unauthorized access, alteration, disclosure, or destruction of data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-light mb-4">6. Changes to Privacy Policy</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-light mb-4">7. Contact Us</h2>
            <p className="text-zinc-300 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us through our website.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}