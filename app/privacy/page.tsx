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
          <p className="text-zinc-300 mb-6">Last updated: 2025/6/15</p>

          <section className="mb-8">
            <h2 className="text-xl font-light mb-4">1. Information We Collect</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Quiet View collects minimal information to improve our service. This includes:
            </p>
            <ul className="text-zinc-300 leading-relaxed mb-4 ml-6 list-disc">
              <li>Usage data via Google Analytics</li>
              <li>Technical details such as browser type and device information</li>
              <li>We do <strong>not</strong> collect personally identifiable information directly</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-light mb-4">2. Google Analytics</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">
              We use Google Analytics to understand how users interact with our website.
              Data is collected anonymously and used for analytical purposes only.
            </p>
            <p className="text-zinc-300 leading-relaxed mb-4">
              You can opt out by installing the{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                className="text-blue-400 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Analytics Opt-out Browser Add-on
              </a>
              .
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-light mb-4">3. YouTube Integration</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Quiet View embeds live camera feeds using YouTube.
              YouTube may collect viewing data according to their own{" "}
              <a
                href="https://policies.google.com/privacy"
                className="text-blue-400 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                privacy policy
              </a>
              . We use <code>youtube-nocookie.com</code> whenever possible to enhance privacy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-light mb-4">4. Cookies</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">We use cookies to:</p>
            <ul className="text-zinc-300 leading-relaxed mb-4 ml-6 list-disc">
              <li>Track analytics</li>
              <li>Improve user experience</li>
              <li>No personal data is stored in cookies</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-light mb-4">5. Data Security</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">
              We take appropriate security measures to protect data from unauthorized access, alteration, or destruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-light mb-4">6. Changes to This Policy</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">
              We may update this Privacy Policy occasionally. Any changes will be posted on this page.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-light mb-4">7. Contact</h2>
            <p className="text-zinc-300 leading-relaxed">
              For any questions about this Privacy Policy, please contact us at:<br />
              <strong>gotokaoru0617@gmail.com</strong>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
