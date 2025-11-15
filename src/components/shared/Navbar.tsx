/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Container from "@/components/ui/Container";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AllImages } from "../../../public/assets/AllImages";
import { usePathname } from "next/navigation";
import { Button, Dropdown, MenuProps } from "antd";
import * as motion from "motion/react-client";
import { useScroll, useMotionValueEvent } from "motion/react";
import { TbLogout2 } from "react-icons/tb";
import { HiOutlineLogin, HiOutlineSwitchHorizontal } from "react-icons/hi";
import { IoMdCart } from "react-icons/io";
import { GoBellFill } from "react-icons/go";
import { AiFillMessage } from "react-icons/ai";
import { MdOutlineDashboard } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import Cookies from "js-cookie";
import { ISignInUser } from "@/types";
import { decodedToken } from "@/utils/jwt";
import { logout } from "@/services/AuthService";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

// import { RiMoneyDollarCircleLine } from "react-icons/ri";

const notificationData = [
  {
    id: "1",
    message: {
      text: "You have a new message",
      time: "Just now",
    },
  },
  {
    id: "2",
    message: {
      text: "You have a new message",
      time: "Just now",
    },
  },
  {
    id: "3",
    message: {
      text: "You have a new message",
      time: "Just now",
    },
  },
];

const NavItems = [
  { id: "1", name: "Photography", route: "/photography" },
  { id: "2", name: "Videography", route: "/videography" },
  { id: "1", name: "Marketplace", route: "/marketplace" },
  { id: "1", name: "Forums", route: "/forums" },
  { id: "1", name: "Workshops", route: "/workshops" },
];

const notificationMenu = (
  <div
    className="flex flex-col gap-4 w-full text-center bg-white p-4 rounded-lg"
    style={{ boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.25)" }}
  >
    {notificationData?.map((notification: any) => (
      <div className="test-start" key={notification.id}>
        <div className="flex items-center gap-2">
          <div className="p-1 bg-secondary-color rounded-full w-fit h-fit">
            <GoBellFill className="text-white cursor-pointer" />
          </div>
          <div className="flex flex-col items-start">
            <p>{notification?.message?.text}</p>
            <p className="text-gray-400">{notification?.message?.time}</p>
          </div>
        </div>
      </div>
    ))}
    <Link
      href={`/notifications`}
      className="w-2/3 mx-auto !bg-secondary-color !text-primary-color rounded-xl h-8 py-1"
    >
      See More
    </Link>
  </div>
);

const Navbar: React.FC = () => {
  const token = Cookies.get("frafolMainAccessToken");
  const userData: ISignInUser | null = decodedToken(token || "");

  const path = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [height, setHeight] = useState(0);
  const navbarRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  const isDashboard = path.includes("dashboard");

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (
      previous !== undefined &&
      latest > previous &&
      latest > 150 &&
      !isDashboard &&
      !mobileMenuOpen
    ) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    if (latest > 10) {
      setScrolled(true);
    } else setScrolled(false);
  });

  useEffect(() => {
    // Calculate the height of the content when it opens or closes
    if (mobileMenuOpen) {
      setHeight(navbarRef.current!.scrollHeight); // Set to the content's height when open
    } else {
      setHeight(0); // Set to 0 when closed
    }
  }, [mobileMenuOpen]);

  const items: MenuProps["items"] = [
    {
      key: "1",
      label:
        userData?.role === "user" || userData?.role === "company" ? (
          <Link href="/dashboard/my-account/overview">Dashboard</Link>
        ) : userData?.role === "photographer" ||
          userData?.role === "videographer" ||
          userData?.role === "both" ? (
          <Link href="/dashboard/professional/overview">Dashboard</Link>
        ) : (
          <Link href="/">Dashboard</Link>
        ),
      icon: <MdOutlineDashboard className="text-secondary-color !text-base" />,
    },
    {
      key: "2",
      label: <div onClick={() => {}}>Switch Profile</div>,
      icon: (
        <HiOutlineSwitchHorizontal className="text-secondary-color !text-base" />
      ),
    },
    {
      key: "3",
      label: <Link href="#">Documents</Link>,
      icon: (
        <IoDocumentTextOutline className="text-secondary-color !text-base" />
      ),
    },
    {
      key: "4",
      label: <Link href="/insurance">Insurance</Link>,
      icon: (
        <RiMoneyDollarCircleLine className="text-secondary-color !text-base" />
      ),
    },
  ];

  const handleLogOut = () => {
    logout();
    // setIsLoading(true);
    // if (protectedRoutes.some((route) => pathname.match(route))) {
    //   router.push("/");
    // }
  };
  return (
    <motion.div
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`z-[99999999]  ${
        scrolled ? "  duration-300  py-1.5" : " duration-300  py-1.5"
      } ${
        mobileMenuOpen || scrolled
          ? "bg-secondary-color !text-primary-color"
          : "bg-secondary-color !text-primary-color"
      }`}
    >
      <Container>
        <header className="text-base mx-auto  flex justify-between items-center z-[99999] ">
          {/* //*Company name */}
          <div>
            <Link
              href="/"
              className=" cursor-pointer flex justify-center items-end gap-1"
            >
              <Image
                src={AllImages.logo}
                alt="logo"
                width={1000}
                height={1000}
                sizes="100vw"
                className="h-10 w-auto"
              />
            </Link>
          </div>
          {/* //*Nav links */}
          <nav>
            {/* //* For Laptop or Desktop */}
            <div className="hidden lg:block">
              <ul className="flex justify-center items-center gap-8 lg:flex-row flex-col lg:py-0 py-10">
                {NavItems.map((navItem, i) => (
                  <li
                    key={i}
                    className={`lg:mb-0 mb-5 cursor-pointer group relative hover:text-third-color transition-all font-semibold duration-300 
                      ${path === navItem.route ? "!text-third-color " : " "}
                      `}
                  >
                    <Link
                      href={navItem.route}
                      className="after-underline-after"
                    >
                      {navItem.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* //*For Tab or Mobile */}
            <div
              style={{
                height: `${height}px`, // Dynamic height
                overflow: "hidden",
                transition: "height 0.3s ease", // Smooth transition effect for height
              }}
              ref={navbarRef}
              className="block lg:hidden bg-secondary-color w-full lg:static absolute top-[52px] left-0 lg:bg-none transition-all duration-500 lg:z-0 -z-[9999] lg:border-none shadow-md"
            >
              <ul className="flex justify-end items-center gap-5 lg:flex-row flex-col lg:py-0 py-5">
                {NavItems.map((navItem, i) => (
                  <li
                    key={i}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className={`lg:mb-0 mb-0 cursor-pointer hover:text-third-color group relative  transition-all duration-300 ${
                      path === navItem.route ? "!text-third-color " : " "
                    }`}
                  >
                    <Link
                      href={navItem.route}
                      className="after-underline-after"
                    >
                      {navItem.name}
                    </Link>
                  </li>
                ))}
                {userData ? (
                  <Button className="group flex items-center !py-4 !px-1 gap-1 border-2 !border-secondary-color !bg-secondary-color !text-primary-color rounded-full">
                    <p className="font-semibold">Logout</p>
                    <div className="bg-primary-color p-1 rounded-full">
                      <TbLogout2 className=" text-lg text-secondary-color" />
                    </div>
                  </Button>
                ) : (
                  <div className="flex flex-col items-center space-y-3">
                    <Link
                      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                      href="/sign-in"
                      className=" px-2 py-1 text-primary-color rounded-full border-2 border-secondary-color mb-1"
                    >
                      Sign In
                    </Link>
                    <Link
                      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                      href="/sign-up"
                      className=" px-2 py-1 rounded-full border-2 border-secondary-color bg-secondary-color text-primary-color"
                    >
                      Sign Up
                    </Link>
                  </div>
                )}
              </ul>
            </div>
          </nav>
          <div className="lg:flex items-center gap-2 hidden">
            {userData?.email ? (
              <div className="flex items-center gap-5">
                <Link href="/message">
                  <AiFillMessage className="text-2xl cursor-pointer" />
                </Link>

                <Dropdown
                  overlay={notificationMenu}
                  trigger={["hover"]}
                  // onOpenChange={(open: boolean) => {
                  //   setOpen(open);
                  // }}
                  placement="bottomRight"
                  className="cursor-pointer"
                >
                  <GoBellFill className="text-2xl cursor-pointer" />
                </Dropdown>
                <Link href="/cart">
                  <IoMdCart className="text-2xl cursor-pointer" />
                </Link>
                <Dropdown
                  menu={{ items }}
                  trigger={["hover"]}
                  // onOpenChange={(open: boolean) => {
                  //   setOpen(open);
                  // }}
                  placement="bottomRight"
                  className="cursor-pointer"
                >
                  <Image
                    src={AllImages.dummyProfile}
                    alt="profile_img"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="xl:h-[35px] h-[30px] w-[30px] xl:w-[35px] rounded-full cursor-pointer border-2 border-[#2B4257]"
                  />
                </Dropdown>

                <Button
                  onClick={handleLogOut}
                  className="group flex items-center !py-4 !px-1 gap-1 border-2 !border-secondary-color !bg-secondary-color !text-primary-color rounded-full"
                >
                  <p className="font-semibold">Logout</p>
                  <div className="bg-primary-color p-1 rounded-full">
                    <TbLogout2 className=" text-lg text-secondary-color" />
                  </div>
                </Button>
              </div>
            ) : (
              <div className="w-full flex items-center gap-5">
                <Link
                  href="/sign-in"
                  className={` "!text-lg px-2 py-1 font-semibold  mt-0.5 " ${
                    scrolled ? "text-primary-color" : "text-primary-color"
                  } `}
                >
                  Sign In
                </Link>
                <Link href="/join">
                  <Button
                    className={`group flex items-center !py-4 !px-1 gap-1 border-2 rounded-full ${
                      scrolled
                        ? "!border-primary-color !bg-primary-color !text-secondary-color "
                        : "!border-primary-color !bg-primary-color !text-secondary-color "
                    }`}
                  >
                    <p className="font-semibold text-base">Join</p>
                    <div
                      className={`${
                        scrolled ? "bg-secondary-color" : "bg-secondary-color"
                      } p-0.5 rounded-full`}
                    >
                      <HiOutlineLogin
                        className={`text-lg ${
                          scrolled ? "text-primary-color" : "text-primary-color"
                        }`}
                      />
                    </div>
                  </Button>
                </Link>
              </div>
            )}
          </div>
          {/* //*Icons */}
          <div className="lg:hidden select-none flex items-center gap-5">
            {userData?.email && (
              <Link href="/profile">
                <Image
                  src={AllImages.dummyProfile}
                  alt="profile_img"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="xl:h-[35px] h-[30px] w-[30px] xl:w-[35px] rounded-full cursor-pointer border-2 border-[#2B4257]"
                />
              </Link>
            )}
            {mobileMenuOpen ? (
              <div onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#ffffff"
                  className="w-8 h-8 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
            ) : (
              <div onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke={mobileMenuOpen || scrolled ? "#ffffff" : "#ffffff"}
                  className="w-8 h-8 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </div>
            )}
          </div>
        </header>
      </Container>
    </motion.div>
  );
};

export default Navbar;
