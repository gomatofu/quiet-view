import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Quiet View",
  description: "Terms of Service for Quiet View",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-zinc-100">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-light mb-8">Terms of Service</h1>

        <div className="prose prose-invert prose-zinc max-w-none">
          <p className="text-zinc-300 mb-6">Last updated: 2025/6/15</p>

          <section className="mb-8">
            <h2 className="text-xl font-light mb-4">1. Acceptance of Terms</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">
              By accessing or using Quiet View, you agree to comply with and be bound by these Terms of Service. If you do not agree, you may not use the site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-light mb-4">2. License to Use</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">
              We grant you a limited, non-exclusive, non-transferable license to view and use the content on Quiet View for personal, non-commercial use only.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-light mb-4">3. Disclaimer</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">
              All content on Quiet View is provided “as is” without warranties of any kind, either express or implied. We do not guarantee accuracy, reliability, or availability of the content.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-light mb-4">4. Limitation of Liability</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Quiet View shall not be liable for any indirect, incidental, or consequential damages arising from your use of or inability to use the site, even if we have been advised of the possibility of such damages.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-light mb-4">5. Changes to Terms</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">
              We may update these Terms of Service from time to time. Continued use of Quiet View after changes are posted means you accept the revised terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-light mb-4">6. Contact</h2>
            <p className="text-zinc-300 leading-relaxed">
              For questions about these Terms of Service, please contact us at:<br />
              <strong>gotokaoru0617@gmail.com</strong>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
