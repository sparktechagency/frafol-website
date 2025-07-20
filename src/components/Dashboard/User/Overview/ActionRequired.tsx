/* eslint-disable @typescript-eslint/no-explicit-any */
import ReuseButton from "@/components/ui/Button/ReuseButton";

const ActionRequired = () => {
  const actionData = [
    {
      title: "2 orders awaiting confirmation",
      message:
        "You have 2 orders awaiting confirmation from John Doe and Jane Smith.",
    },
    {
      title: "2 orders awaiting confirmation",
      message:
        "You have 2 orders awaiting confirmation from John Doe and Jane Smith.",
    },
    {
      title: "2 orders awaiting confirmation",
      message:
        "You have 2 orders awaiting confirmation from John Doe and Jane Smith.",
    },
    {
      title: "2 orders awaiting confirmation",
      message:
        "You have 2 orders awaiting confirmation from John Doe and Jane Smith.",
    },
  ];
  return (
    <div
      className="w-full max-h-[300px] xl:max-h-[600px] overflow-y-auto rounded-xl relative  border border-[#E1E1E1] bg-primary-color"
      style={{ boxShadow: "0px 0px 5px 1px #0000000D" }}
    >
      <div className="flex justify-between items-center sticky top-0 px-5 pt-5 bg-white z-10 ">
        <h1 className="text-xl font-semibold">Action Required</h1>
      </div>

      <div className="flex flex-col gap-5  p-5 bg-primary-color !h-full">
        {actionData?.map((activity: any, i: number) => (
          <div
            key={i}
            className="p-3 flex items-center gap-2 bg-warning/10 border-l-6 border-warning "
          >
            <div>
              <p className="text-[#242424] text-base font-medium">
                {activity?.title}
              </p>

              <p className="text-sm text-[#8A8D8E] mt-1">{activity?.message}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="sticky bottom-0 p-5 bg-white z-10 !w-full">
        <ReuseButton
          url="/"
          variant="outline"
          className="!text-xs sm:!text-sm lg:!text-base !py-3.5 !w-full !border !border-[#E2E8F0]"
        >
          Review Orders
        </ReuseButton>
      </div>
    </div>
  );
};

export default ActionRequired;
