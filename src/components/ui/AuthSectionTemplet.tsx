import Image, { StaticImageData } from "next/image";
import React from "react";
import Container from "./Container";
import AuthSectionLogo from "./AuthSectionLogo";

const AuthSectionTemplate = ({
  children,
  imageScr,
  skip = false,
  showLogo = false,
}: {
  children: React.ReactNode;
  imageScr: StaticImageData | string;
  skip?: boolean;
  showLogo?: boolean;
}) => {
  return (
    <div className="w-full h-screen grid grid-cols-1 lg:grid-cols-3 overflow-hidden">
      <div className="lg:col-span-2 py-5 overflow-y-auto">
        <Container className="h-full">
          <div className="flex flex-col gap-5 h-full">
            <AuthSectionLogo skip={skip} showLogo={showLogo} />
            {children}
          </div>
        </Container>
      </div>
      <Image
        src={imageScr}
        alt="Auth Background"
        width={2000}
        height={2000}
        className="hidden lg:block w-full h-screen object-cover "
      />
    </div>
  );
};

export default AuthSectionTemplate;
