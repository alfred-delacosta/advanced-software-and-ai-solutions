import Link from "next/link";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms of Use",
  description:
    "Terms of Use for the Advanced Software and AI Solutions LLC marketing website.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <section className="section">
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Terms of Use</span>
        </nav>
        <p className="eyebrow">Legal</p>
        <h1 className="h1">Terms of Use</h1>
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
            These Terms of Use (“Terms”) govern access to and use of{" "}
            <a href="https://advancedsoftwareandaisolutions.com">
              https://advancedsoftwareandaisolutions.com
            </a>{" "}
            (the “Site”).
          </p>
          <p>
            By using the Site, you agree to these Terms. If you do not agree, do
            not use the Site.
          </p>
          <p>
            <strong>Not legal advice.</strong> Paid product subscriptions and
            client engagements are governed by separate product terms or a signed
            statement of work / services agreement, not by these Site Terms alone.
          </p>

          <h2 className="h2">1. Who we are</h2>
          <p>
            Advanced Software and AI Solutions LLC
            <br />
            Email:{" "}
            <a href="mailto:contact@advancedsoftwareandaisolutions.com">
              contact@advancedsoftwareandaisolutions.com
            </a>
            <br />
            Remote-first across the United States
          </p>

          <h2 className="h2">2. The Site is informational</h2>
          <p>
            The Site describes our company, services, and products. Content is
            for general information. It is not a binding offer to contract, legal
            advice, a security certification, or a guarantee that any product or
            service fits a particular purpose.
          </p>
          <p>
            Availability, pricing, and features may change. Products described as
            coming soon (including BriefSeal and EmailArchiver) are governed by
            their own terms, pricing, and security disclosures when published on
            those product sites.
          </p>

          <h2 className="h2">3. Acceptable use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the Site in violation of applicable law</li>
            <li>Attempt unauthorized access to the Site or related systems</li>
            <li>
              Disrupt, overload, or interfere with the Site (except security
              research we have agreed to in writing)
            </li>
            <li>
              Submit unlawful, harmful, defamatory, or knowingly false content
              through the contact form
            </li>
            <li>
              Scrape or harvest Site content in a way that overloads
              infrastructure or ignores robots.txt, other than ordinary
              search-engine indexing
            </li>
            <li>Impersonate ASAIS or misrepresent your affiliation with us</li>
          </ul>
          <p>We may suspend or block access that appears abusive.</p>

          <h2 className="h2">4. Contact form, waitlists, and email</h2>
          <p>If you contact us through the Site or by email:</p>
          <ul>
            <li>
              You confirm the information is accurate to the best of your
              knowledge
            </li>
            <li>
              You allow us to use that content to reply and evaluate a possible
              engagement
            </li>
            <li>
              Do not send passwords, full payment card numbers, or unnecessary
              sensitive personal data through the marketing contact form
            </li>
          </ul>
          <p>
            Product waitlist / interest signups are free interest lists, not paid
            subscriptions. How we use waitlist emails is described in our{" "}
            <Link href="/privacy/">Privacy Policy</Link>.
          </p>
          <p>
            Confidential project details should wait until an appropriate
            agreement is in place.
          </p>
          <p>
            Our use of contact information is also described in our{" "}
            <Link href="/privacy/">Privacy Policy</Link>.
          </p>

          <h2 className="h2">5. Intellectual property</h2>
          <p>
            The Site, including text, branding, logos, layout, and graphics, is
            owned by ASAIS or its licensors and protected by intellectual
            property laws.
          </p>
          <p>
            You may view pages for personal or internal business evaluation. You
            may not copy, modify, scrape for commercial reuse, or redistribute
            Site content without our prior written permission, except as allowed
            by fair use or other applicable law.
          </p>
          <p>
            “ASAIS,” “Advanced Software and AI Solutions,” “BriefSeal,”
            “EmailArchiver,” and related names and marks are trademarks or trade
            names of ASAIS. Third-party names belong to their owners.
          </p>

          <h2 className="h2">6. Third-party links and products</h2>
          <p>
            Links to product domains or third-party sites are provided for
            convenience. We are not responsible for third-party content or
            practices. Product use is subject to those products’ own terms and
            privacy notices.
          </p>

          <h2 className="h2">7. Disclaimer of warranties</h2>
          <p>
            THE SITE IS PROVIDED “AS IS” AND “AS AVAILABLE.” TO THE MAXIMUM
            EXTENT PERMITTED BY LAW, ASAIS DISCLAIMS ALL WARRANTIES, EXPRESS OR
            IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
            AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SITE WILL BE
            UNINTERRUPTED, ERROR-FREE, OR FREE OF HARMFUL COMPONENTS.
          </p>

          <h2 className="h2">8. Limitation of liability</h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, ASAIS AND ITS OWNERS,
            EMPLOYEES, AND CONTRACTORS WILL NOT BE LIABLE FOR ANY INDIRECT,
            INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES,
            OR ANY LOSS OF PROFITS, REVENUE, DATA, OR GOODWILL, ARISING OUT OF OR
            RELATED TO YOUR USE OF THE SITE.
          </p>
          <p>
            OUR TOTAL LIABILITY FOR CLAIMS ARISING OUT OF THE SITE WILL NOT
            EXCEED ONE HUNDRED US DOLLARS (US $100).
          </p>
          <p>
            Some places do not allow certain limitations; there, our liability is
            limited to the fullest extent permitted by law.
          </p>
          <p>
            <strong>Important:</strong> This Site liability cap does{" "}
            <strong>not</strong> set the terms for paid SaaS subscriptions or
            client services. Those need their own contracts.
          </p>

          <h2 className="h2">9. Indemnity</h2>
          <p>
            To the extent permitted by law, you agree to defend and indemnify
            ASAIS against claims arising from your misuse of the Site, your
            violation of these Terms, or content you submit.
          </p>

          <h2 className="h2">10. Governing law</h2>
          <p>
            These Terms are governed by the laws of the State of{" "}
            <strong>South Carolina</strong>, USA, without regard to
            conflict-of-law rules, except where mandatory consumer or other local
            laws apply.
          </p>
          <p>
            Exclusive venue for disputes arising from these Site Terms is the
            state or federal courts located in South Carolina, unless applicable
            law requires otherwise.
          </p>

          <h2 className="h2">11. Changes</h2>
          <p>
            We may update these Terms by posting a revised version on the Site
            and changing the “Last updated” date. Continued use after the
            effective date means you accept the updated Terms. If you disagree,
            stop using the Site.
          </p>

          <h2 className="h2">12. Contact</h2>
          <p>
            Questions about these Terms:{" "}
            <a href="mailto:contact@advancedsoftwareandaisolutions.com">
              contact@advancedsoftwareandaisolutions.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
