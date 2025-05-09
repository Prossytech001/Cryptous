// src/pages/PrivacyPolicy.jsx
import React from 'react';
import Footer from '../components/Footer/Footer';

const PrivacyPolicy = () => {
  return (
    <>
    <div className="privacy-policy-container ">
      <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
      <div className="space-y-8 text-base leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold mb-2">1. Information We Collect</h2>
          <p>We collect your personal, financial, device, and usage information to improve our platform and ensure a secure experience.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">2. How We Use Your Information</h2>
          <p>Your data is used for account management, communication, investment processing, security, and compliance with regulations.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">3. Sharing Your Information</h2>
          <p>We only share data with trusted service providers or legal authorities when required, and never sell your personal data.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">4. Cookies and Tracking</h2>
          <p>Cookies help manage sessions and analytics. You can disable them in your browser settings, but it may affect functionality.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">5. Data Retention</h2>
          <p>We retain your data as long as needed to fulfill services and legal obligations. Inactive data may be removed after 24 months.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">6. Your Rights</h2>
          <p>You can request access, corrections, or deletion of your data. Email us at support@alextouchcrypto.com.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">7. Data Security</h2>
          <p>We implement SSL encryption, access controls, and regular audits to keep your data safe.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">8. International Transfers</h2>
          <p>Your data may be stored in data centers across countries with proper legal protections in place.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">9. Changes to This Policy</h2>
          <p>We may update this policy. Please check back regularly for any changes to our privacy practices.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">10. Contact Us</h2>
          <p>If you have any questions, reach out to our support team at support@alextouchcrypto.com or call us at +123-456-7890.</p>
        </section>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default PrivacyPolicy;
