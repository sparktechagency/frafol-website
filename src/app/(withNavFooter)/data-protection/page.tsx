import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import React from "react";

const GeneralDataProtectionRegulation = () => {
  return (
    <Container>
      <div className=" py-10 text-gray-800">
        <SectionHeader title="General Data Protection Regulation." />

        <section className="mb-6">
          <h2 className="font-semibold text-lg mb-2">Introduction</h2>
          <p>
            At Swuviun, we are committed to protecting your privacy and ensuring
            that your personal information is handled in a safe and responsible
            manner. This Privacy Policy outlines the types of information we
            collect, how we use it, and the steps we take to ensure that your
            information is protected.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="font-semibold text-lg mb-2">Information We Collect</h2>
          <p>
            We collect information from you when you visit our website, create
            an account, place an order, subscribe to our newsletter, or fill out
            a form. The types of information we may collect include:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>
              <strong>Personal Information:</strong> Name, email address,
              mailing address, phone number, payment information, and any other
              details necessary for processing your orders.
            </li>
            <li>
              <strong>Non-Personal Information:</strong> IP address, browser
              type, operating system, and browsing habits, which help us improve
              our website and your shopping experience.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="font-semibold text-lg mb-2">
            How We Use Your Information
          </h2>
          <p>
            The information we collect from you may be used in the following
            ways:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>
              <strong>To Process Transactions:</strong> Your information helps
              us to quickly process your orders and provide you with efficient
              customer service.
            </li>
            <li>
              <strong>To Improve Our Website:</strong> We continually strive to
              improve our website offerings based on the information and
              feedback we receive from you.
            </li>
            <li>
              <strong>To Send Periodic Emails:</strong> The email address you
              provide for order processing may be used to send you information
              and updates pertaining to your order, as well as occasional
              company news, updates, and related product or service information.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="font-semibold text-lg mb-2">
            Protection of Your Information
          </h2>
          <p>
            We implement a variety of security measures to maintain the safety
            of your personal information when you place an order or enter,
            submit, or access your personal information. These security measures
            include:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>
              <strong>Encryption:</strong> All sensitive/credit information is
              transmitted via Secure Socket Layer (SSL) technology and then
              encrypted into our payment gateway providers&apos; databases.
            </li>
            <li>
              <strong>Access Control:</strong> Only authorized personnel with
              special access rights to our systems are allowed to access your
              personal information, and they are required to keep the
              information confidential.
            </li>
            <li>
              <strong>Data Retention:</strong> We will retain your personal
              information only for as long as necessary to fulfill the purposes
              for which we collected it, including for the purposes of
              satisfying any legal, accounting, or reporting requirements.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="font-semibold text-lg mb-2">
            Sharing Your Information
          </h2>
          <p>
            We do not sell, trade, or otherwise transfer to outside parties your
            personally identifiable information, except to trusted third parties
            who assist us in operating our website, conducting our business, or
            servicing you, so long as those parties agree to keep this
            information confidential. We may also release your information when
            we believe release is appropriate to comply with the law, enforce
            our site policies, or protect ours or others’ rights, property, or
            safety.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="font-semibold text-lg mb-2">Third-Party Links</h2>
          <p>
            Occasionally, at our discretion, we may include or offer third-party
            products or services on our website. These third-party sites have
            separate and independent privacy policies. We, therefore, have no
            responsibility or liability for the content and activities of these
            linked sites. Nonetheless, we seek to protect the integrity of our
            site and welcome any feedback about these sites.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="font-semibold text-lg mb-2">Cookies</h2>
          <p>
            Our website uses cookies to enhance your browsing experience and
            gather information about visitors and visits to our website. Cookies
            are small files that a site or its service provider transfers to
            your computer&apos;s hard drive through your web browser (if you
            allow) that enables the site’s or service provider’s systems to
            recognize your browser and capture and remember certain information.
            You can choose to have your computer warn you each time a cookie is
            being sent, or you can choose to turn off all cookies via your
            browser settings. If you turn cookies off, you may not have access
            to many features that make your site experience more efficient and
            some of our services may not function properly.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="font-semibold text-lg mb-2">Your Consent</h2>
          <p>By using our website, you consent to our Privacy Policy.</p>
        </section>

        <section className="mb-6">
          <h2 className="font-semibold text-lg mb-2">
            Changes to Our Privacy Policy
          </h2>
          <p>
            We reserve the right to update or modify this Privacy Policy at any
            time. If we decide to change our privacy policy, we will post those
            changes on this page and update the Privacy Policy modification date
            below.
          </p>
          <p className="mt-2 font-semibold">
            This policy was last modified on January 2, 2024.
          </p>
        </section>

        <p className="font-medium mt-6">
          By using our website, you hereby consent to our privacy policy and
          agree to its terms.
        </p>
      </div>
    </Container>
  );
};

export default GeneralDataProtectionRegulation;
