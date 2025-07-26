/* eslint-disable @typescript-eslint/no-explicit-any */
import { Modal, Rate } from "antd";
import { AllImages } from "../../../../../public/assets/AllImages";
import Image from "next/image";

const ReportViewModal = ({
  isViewModalVisible,
  handleCancel,
  currentRecord,
}: any) => {
  console.log(currentRecord);
  return (
    <Modal
      open={isViewModalVisible}
      onCancel={handleCancel}
      footer={null}
      centered
      className="lg:!w-[600px]"
    >
      <div className="p-5">
        <div className="">
          <h3 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-secondary-color text-center">
            User Feedback
          </h3>
          <p className="text-sm sm:text-base lg:text-lg text-center mt-2">
            See full details feedback from {"User"}
          </p>
          <div className="flex justify-center items-center gap-2 mt-5">
            {/* Avatar */}
            <Image
              src={AllImages.dummyProfile}
              alt={"User"}
              className="w-12 h-12 object-cover rounded-full"
            />
            <div className="text-base sm:text-lg lg:text-xl font-semibold ">
              {"User"}
            </div>
          </div>

          <div className="mt-8">
            <div className="text-lg  ">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-medium">Name: </span>
                <span className="text-secondary-color">{"User"}</span>
              </div>

              {/* <div className="flex items-center  gap-2 mb-2">
                <span className="font-medium">Email:</span>
                <span>user@gmail.com</span>
              </div> */}

              <div className="flex items-center  gap-2 mb-2">
                <span className="font-medium">Rating :</span>
                <span className="text-justify pt-0 ">
                  <Rate
                    disabled
                    value={5}
                    allowHalf
                    className="text-secondary-color"
                  />
                </span>
              </div>

              <div className="flex items-start  gap-2 mb-2">
                <span className="font-medium text-nowrap">Feedback :</span>
                <span className="text-justify pt-0 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                  possimus, tempore earum ab consequuntur impedit autem a nulla
                  harum rem vero repellat accusamus, labore numquam in. Sequi
                  possimus quibusdam assumenda.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ReportViewModal;
