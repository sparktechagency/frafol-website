"use client";
import { useRouter } from "next/navigation";

const ChooseSpecialization = () => {
  const router = useRouter();

  return (
    <div className=" flex flex-col justify-center gap-3 h-full w-full sm:w-3/4 mx-auto">
      <div className="mb-3">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-secondary-color mb-5">
          Your Specializations
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-base-color">
          Select the services you specialize in
        </p>
      </div>
    </div>
  );
};
export default ChooseSpecialization;
