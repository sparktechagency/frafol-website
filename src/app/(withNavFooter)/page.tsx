import Banner from "@/components/Home/Banner";
import FAQ from "@/components/Home/FAQ";
import AntdFormDemo from "@/components/Home/Test";
import DownloadAppSection from "@/components/shared/DownloadAppSection";

const HomePage = () => {
  return (
    <div className="">
      <Banner />
      <AntdFormDemo />
      <DownloadAppSection />
      <FAQ />
    </div>
  );
};

export default HomePage;
