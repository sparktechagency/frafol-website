"use client";
import Navbar from "@/components/shared/Navbar";
import getActiveKeys from "@/utils/activeKey";
import { useAdminPaths } from "@/utils/dashboardMenuItems";
import { Layout, Menu } from "antd";
import { BarsOutlined } from "@ant-design/icons";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { Toaster } from "sonner";

const userRole = {
  role: "user",
};

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const pathname = usePathname();
  const defaultUrl = userRole?.role === "user" ? "/my-account" : "/";
  const normalizedPath = pathname.replace(defaultUrl, "");

  const [collapsed, setCollapsed] = React.useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const adminPaths = useAdminPaths();

  const activeKeys = getActiveKeys(normalizedPath);
  const menuItems =
    userRole?.role === "user"
      ? //   ? sidebarItemsGenerator(adminPaths, "admin")
        adminPaths
      : [];

  return (
    <div>
      <div className="">
        <div className="sticky top-0 z-[9999] w-full">
          <Navbar />
        </div>
        <Layout className="flex !bg-[#F9FAFB]">
          <Sider
            theme="light"
            width={300}
            trigger={null}
            breakpoint="lg"
            collapsedWidth="0"
            collapsible
            collapsed={collapsed}
            style={{
              position: "sticky",
              top: 0,
              height: "100vh",
              overflowY: "auto",
              backgroundColor: "#ffffff",
            }}
            className="!border-l border-r !border-[#E1E1E1]"
          >
            <div className=" mb-10"></div>
            <Menu
              mode="inline"
              defaultSelectedKeys={activeKeys}
              selectedKeys={activeKeys}
              style={{
                backgroundColor: "transparent",
                border: "none",
                paddingLeft: "6px",
                paddingRight: "6px",
              }}
              items={menuItems}
            />
          </Sider>
          <Layout className="!bg-[#F9FAFB]">
            <Header
              className="!m-0 !py-0 !px-2 !w-full"
              style={{
                background: "#F9FAFB",
                position: "sticky",
                top: 0,
                zIndex: 999,
                marginLeft: 0,
              }}
            >
              <BarsOutlined
                onClick={() => setCollapsed(!collapsed)}
                className="text-3xl !text-secondary-color"
              />
            </Header>
            <Content>
              <div className=" px-2 xl:px-5 py-4 xl:py-5">{children}</div>
            </Content>
          </Layout>
        </Layout>
        <Toaster />
      </div>
    </div>
  );
};

export default DashboardLayout;
