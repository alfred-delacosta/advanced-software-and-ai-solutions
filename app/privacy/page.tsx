import Link from "next/link";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How Advanced Software and AI Solutions LLC collects, uses, and shares information on the marketing website and contact form.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <section className="section">
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Privacy Policy</span>
        </nav>
        <p className="eyebrow">Legal</p>
        <h1 className="h1">Privacy Policy</h1>
        <p className="lead">
          <strong>Advanced Software and AI Solutions LLC</strong> (“ASAIS,” “we,”
          “us,” or “our”)
        </p>
        <p className="muted">
          <strong>Last updated:</strong> September 12, 2026
          <br />
          <strong>Effective date:</strong> September 12, 2026
        </p>

        <div className="prose">
          <p>
            This Privacy Policy explains how we collect, use, and share
            information when you visit{" "}
            <a href="https://advancedsoftwareandaisolutions.com">
              https://advancedsoftwareandaisolutions.com
            </a>{" "}
            (the “Site”) or contact us through the Site.
          </p>
          <p>
            This policy covers the <strong>marketing website and contact form
            only</strong>. BriefSeal, EmailArchiver, and other ASAIS products
            have (or will have) their own privacy notices when you use those
            services.
          </p>
          <p>
            <strong>Not legal advice.</strong> This is a business draft for
            publication on our Site. For regulated or high-risk uses, consult a
            licensed attorney.
          </p>

          <h2 className="h2">1. Who we are</h2>
          <div className="table-wrap">
            <table>
              <tbody>
                <tr>
                  <th scope="row">Legal name</th>
                  <td>Advanced Software and AI Solutions LLC</td>
                </tr>
                <tr>
                  <th scope="row">Also known as</th>
                  <td>ASAIS / Advanced Software and AI Solutions</td>
                </tr>
                <tr>
                  <th scope="row">Website</th>
                  <td>
                    <a href="https://advancedsoftwareandaisolutions.com">
                      https://advancedsoftwareandaisolutions.com
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Email</th>
                  <td>
                    <a href="mailto:contact@advancedsoftwareandaisolutions.com">
                      contact@advancedsoftwareandaisolutions.com
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">How we operate</th>
                  <td>Remote-first across the United States</td>
                </tr>
                <tr>
                  <th scope="row">Public contact</th>
                  <td>
                    Email only (no phone number or street address on the Site)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Privacy questions: email the address above with the subject line{" "}
            <strong>Privacy</strong>.
          </p>

          <h2 className="h2">2. Information we collect</h2>
          <h3 className="h3">Information you give us</h3>
          <p>If you use the contact form or email us, we collect:</p>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th scope="col">Field</th>
                  <th scope="col">Required?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>Yes (form)</td>
                </tr>
                <tr>
                  <td>Email address</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Company name</td>
                  <td>Optional</td>
                </tr>
                <tr>
                  <td>Service interest</td>
                  <td>Yes (form)</td>
                </tr>
                <tr>
                  <td>Message</td>
                  <td>Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            We do <strong>not</strong> ask for Social Security numbers, payment
            card numbers, or government ID numbers through the Site contact form.
            Please do not send passwords or highly sensitive personal data through
            that form.
          </p>

          <h3 className="h3">Information collected automatically</h3>
          <p>
            When you visit the Site, our hosting provider may process standard
            technical data needed to deliver and secure the Site, such as IP
            address, browser type, pages requested, approximate timing, and
            referrer URL. That data appears in ordinary server or platform logs.
          </p>

          <h3 className="h3">Local storage (not advertising cookies)</h3>
          <p>
            The Site stores your theme preference (`light`, `dark`, or system) in
            your browser’s <strong>localStorage</strong> under the key{" "}
            <code>asais-theme</code>. That preference stays on your device so the
            Site can remember how you like it displayed. It is not used to track
            you across other websites.
          </p>

          <h3 className="h3">What we do not use on the Site today</h3>
          <p>
            As of the effective date above, the marketing Site does{" "}
            <strong>not</strong> use:
          </p>
          <ul>
            <li>Third-party advertising or marketing pixels</li>
            <li>
              Analytics products such as Google Analytics, Plausible, or similar
              (unless we update this policy first)
            </li>
            <li>A Site login or account</li>
          </ul>
          <p>
            Fonts used on the Site are loaded through our application build
            (self-hosted via Next.js font tooling), not through a separate
            third-party font request at browse time.
          </p>

          <h2 className="h2">3. How we use information</h2>
          <p>We use Site and contact information to:</p>
          <ul>
            <li>Respond to inquiries and discuss potential work</li>
            <li>Route messages internally</li>
            <li>Operate, secure, and improve the Site</li>
            <li>Prevent spam and abuse</li>
            <li>Comply with law and enforce our Terms of Use</li>
          </ul>
          <p>
            We do <strong>not</strong> sell personal information. We do{" "}
            <strong>not</strong> share Site contact submissions with unrelated
            third-party advertisers.
          </p>

          <h2 className="h2">4. How we share information</h2>
          <p>
            We share information only as needed to run the Site and our business:
          </p>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th scope="col">Recipient</th>
                  <th scope="col">Role</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Vercel</strong>
                  </td>
                  <td>Hosts and delivers the Site; may process technical logs</td>
                </tr>
                <tr>
                  <td>
                    <strong>Resend</strong>
                  </td>
                  <td>
                    Sends contact-form emails when that integration is enabled
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Professional advisors</strong>
                  </td>
                  <td>
                    Legal, accounting, or security help under confidentiality
                    obligations, when needed
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Authorities</strong>
                  </td>
                  <td>
                    When required by law, legal process, or to protect rights,
                    safety, or security
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Business transfer</strong>
                  </td>
                  <td>
                    In a merger, acquisition, or asset sale, with appropriate
                    protections
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            If Resend is not configured, form submissions may be accepted and
            logged operationally, and visitors can still reach us by mailto.
          </p>

          <h2 className="h2">5. Retention</h2>
          <ul>
            <li>
              <strong>Contact inquiries:</strong> kept as long as reasonably
              needed to respond, manage a business relationship, and maintain
              ordinary records, then deleted or archived under our practices. As
              a working target for ordinary marketing inquiries with no active
              engagement, we aim to review and purge stale threads within{" "}
              <strong>24 months</strong>, unless a longer period is needed for
              legal, security, or accounting reasons.
            </li>
            <li>
              <strong>Hosting / platform logs:</strong> retained according to our
              host’s defaults and our operational needs (often on the order of
              weeks to a few months).
            </li>
          </ul>
          <p>
            To request deletion of a contact submission, email{" "}
            <a href="mailto:contact@advancedsoftwareandaisolutions.com">
              contact@advancedsoftwareandaisolutions.com
            </a>
            . We may keep limited records when required by law or for security
            and accounting.
          </p>

          <h2 className="h2">6. Security</h2>
          <p>
            We use reasonable measures appropriate to a small US remote business,
            including HTTPS on the Site and limited internal access to inquiry
            content. No transmission or storage method is 100% secure.
          </p>
          <p>
            Security details for BriefSeal, EmailArchiver, and other products are
            described on those products’ own pages and are not restated here.
          </p>

          <h2 className="h2">7. Your choices and US state privacy rights</h2>
          <p>
            You may email us to ask what personal information we hold from Site
            contact, to correct it, or to request deletion, subject to applicable
            law.
          </p>
          <p>
            Depending on where you live, state law may give you additional rights
            (for example access, deletion, or appeal rights). To make a request,
            email{" "}
            <a href="mailto:contact@advancedsoftwareandaisolutions.com">
              contact@advancedsoftwareandaisolutions.com
            </a>{" "}
            with enough detail for us to verify and respond. We will not
            discriminate against you for exercising privacy rights that apply to
            you.
          </p>
          <p>
            We do not sell personal information. If that ever changes, we will
            update this policy and provide any required opt-out mechanism first.
          </p>

          <h2 className="h2">8. Children</h2>
          <p>
            The Site is for businesses and adults. We do not knowingly collect
            personal information from children under 13. If you believe a child
            provided information to us through the Site, contact us and we will
            delete it.
          </p>

          <h2 className="h2">9. United States focus</h2>
          <p>
            We operate in the United States. If you contact us from outside the
            US, your information will be processed in the United States, where
            privacy laws may differ from those in your country.
          </p>

          <h2 className="h2">10. Other sites and products</h2>
          <p>
            Links to BriefSeal, EmailArchiver, or third-party sites are for
            convenience. Their privacy practices are governed by their own
            policies.
          </p>

          <h2 className="h2">11. Changes</h2>
          <p>
            We may update this Privacy Policy by posting a new version on this
            page and changing the “Last updated” date. If changes are material,
            we may also notify you by email when appropriate.
          </p>

          <h2 className="h2">12. Contact</h2>
          <p>
            <strong>Advanced Software and AI Solutions LLC</strong>
            <br />
            Email:{" "}
            <a href="mailto:contact@advancedsoftwareandaisolutions.com">
              contact@advancedsoftwareandaisolutions.com
            </a>
            <br />
            Subject suggestion: Privacy
          </p>
        </div>
      </div>
    </section>
  );
}
