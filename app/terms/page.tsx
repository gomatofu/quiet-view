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
          <p className="text-zinc-300 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="text-xl font-light mb-4">1. Acceptance of Terms</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">
              By accessing and using Quiet View, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-light mb-4">2. Use License</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Permission is granted to temporarily view the materials on Quiet View for personal, non-commercial transitory viewing only.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-light mb-4">3. Disclaimer</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">
              The materials on Quiet View are provided on an &apos;as is&apos; basis. Quiet View makes no warranties, expressed or implied, and hereby disclaims all other warranties including, without limitation, implied warranties of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-light mb-4">4. Limitations</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">
              In no event shall Quiet View be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Quiet View, even if Quiet View or its authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-light mb-4">5. Revisions</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Quiet View may revise these terms of service at any time without notice. By using this site, you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-light mb-4">6. Contact Information</h2>
            <p className="text-zinc-300 leading-relaxed">
              If you have any questions about these Terms of Service, please contact us through our website.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}