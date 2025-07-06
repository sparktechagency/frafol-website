"use client";
import Image from "next/image";
import { AllImages } from "../../../public/assets/AllImages";
import Container from "../ui/Container";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import ReusableForm from "../ui/Form/ReuseForm";
import ReuseInput from "../ui/Form/ReuseInput";
import ReuseButton from "../ui/Button/ReuseButton";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div
      className="relative  lg:h-[500px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="lg:fixed lg:bottom-0 h-auto w-full">
        <footer className="bg-[#A82B0F] text-white px-6 md:px-16 py-10 text-sm">
          <Container>
            <div className="flex flex-col  gap-10 pb-8">
              {/* Logo + Subscription */}
              <div className="flex flex-col md:flex-row justify-between gap-5 items-center">
                <div className="flex items-center gap-2">
                  <Image
                    src={AllImages?.logo}
                    alt="FRAFOL Logo"
                    className="h-16 w-auto"
                  />
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-base sm:text-lg lg:text-xl xl:text-2xl">
                    Join our
                  </h4>
                  <ReusableForm
                    handleFinish={() => {}}
                    className="flex gap-2 items-center"
                  >
                    <ReuseInput
                      formItemClassName="!m-0 !p-0 !min-w-[200px] lg:!min-w-[350px]"
                      inputClassName=""
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                    />
                    <ReuseButton
                      htmlType="submit"
                      className="!text-sm sm:!text-base lg:!text-lg !bg-third-color !text-secondary-color !w-fit !border-none !px-3 !py-5 !-mt-1 !font-bold"
                    >
                      Subscribe
                    </ReuseButton>
                  </ReusableForm>
                  <div className="flex items-center gap-2 mt-2 text-primary-color ">
                    <input
                      type="checkbox"
                      name="newsletter"
                      id="newsletter"
                      className="w-4 h-4 accent-yellow-400 rounded-full"
                    />
                    <label htmlFor="newsletter" className="cursor-pointer">
                      I hereby consent to receiving a free newsletter to the
                      email address provided
                    </label>
                  </div>
                </div>
              </div>
              <div className="my-2  border-b border-primary-color"></div>
              {/* Links */}

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 text-white">
                {/* Privacy & Terms */}
                <div>
                  <h4 className="font-bold mb-2 text-base sm:text-lg lg:text-xl">
                    Privacy & Terms
                  </h4>
                  <ul className="space-y-1">
                    <li>
                      <Link href="/privacy-policy">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link href="/data-protection">GDPR</Link>
                    </li>
                    <li>
                      <Link href="/terms-of-service">Terms & Condition</Link>
                    </li>
                  </ul>
                </div>

                {/* For Clients */}
                <div>
                  <h4 className="font-bold mb-2 text-base sm:text-lg lg:text-xl">
                    For Clients
                  </h4>
                  <ul className="space-y-1">
                    <li>
                      <Link href="/how-ordering-works">How Ordering Works</Link>
                    </li>
                  </ul>
                </div>

                {/* Company */}
                <div>
                  <h4 className="font-bold mb-2 text-base sm:text-lg lg:text-xl">
                    Company
                  </h4>
                  <ul className="space-y-1">
                    <li>
                      <Link href="/about-us">About Us</Link>
                    </li>
                    <li>
                      <Link href="/helpful-documents">Helpful Documents</Link>
                    </li>
                    <li>
                      <Link href="#">Explore Categories</Link>
                    </li>
                  </ul>
                </div>

                {/* For Creators */}
                <div>
                  <h4 className="font-bold mb-2 text-base sm:text-lg lg:text-xl">
                    For Creators
                  </h4>
                  <ul className="space-y-1">
                    <li>
                      <Link href="/how-it-works">How It Works</Link>
                    </li>
                  </ul>
                </div>

                {/* Support & Info */}
                <div>
                  <h4 className="font-bold mb-2 text-base sm:text-lg lg:text-xl">
                    Support & Info
                  </h4>
                  <ul className="space-y-1">
                    <li>
                      <Link href="/contact">Contact Us</Link>
                    </li>
                    <li>
                      <Link href="/report-problem">Report a Problem</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom Footer */}
            <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-xs gap-4">
              <p className="text-base sm:text-lg lg:text-xl text-primary-color ">
                © {currentYear} FRAFOL. All rights reserved.
              </p>
              <div className="flex gap-4 text-lg">
                <FaFacebookF />
                <FaInstagram />
                <FaTiktok />
              </div>
            </div>
          </Container>
        </footer>
      </div>
    </div>
  );
}
