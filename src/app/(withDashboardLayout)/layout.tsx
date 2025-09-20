import Navbar from "@/components/shared/Navbar";

import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import SideBar from "@/components/shared/SideBar";
import SidebarCollapsedIcon from "@/components/shared/SidebarCollapsedIcon";

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div>
      <div className="">
        <div className="sticky top-0 w-full z-50 ">
          <Navbar />
        </div>
        <Layout className="flex !bg-[#F9FAFB] relative">
          <SideBar />
          <Layout className="!bg-[#F9FAFB]">
            <Header
              className="!m-0 !py-0 !px-2 !w-full"
              style={{
                background: "#F9FAFB",
                position: "sticky",
                top: 0,
                zIndex: 40,
                marginLeft: 0,
              }}
            >
              <SidebarCollapsedIcon />
            </Header>
            <Content>
              <div className=" px-2 xl:px-5 py-4 xl:py-5 min-h-[200vh]">
                {children}
              </div>
            </Content>
          </Layout>
        </Layout>
      </div>
    </div>
  );
};

export default DashboardLayout;
