/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from "sonner";

const tryCatchWrapper = async (
  asyncFunction: any,
  reqData?: any,
  toastLoadingMessage: string = "Processing...",
  toastSuccessMessage?: string,
  toastErrorMessage: string = "Something went wrong! Please try again."
) => {
  const toastId = toast.loading(toastLoadingMessage, {
    duration: 2000,
  });
  try {
    // Call the async function
    let req;
    if (reqData.body && reqData?.params) {
      req = { body: reqData.body, params: reqData.params };
    } else if (reqData?.body) {
      req = { body: reqData.body };
    } else if (reqData?.params) {
      req = { params: reqData.params };
    }

    const res = await asyncFunction(req);

    if (!res.success) {
      throw new Error(res.message);
    } else {
      if (toastSuccessMessage) {
        toast.success(toastSuccessMessage, {
          id: toastId,
          duration: 2000,
        });
      } else {
        toast.success(res.message, {
          id: toastId,
          duration: 2000,
        });
      }
    }
    return res;

    // Return the actual data
  } catch (error: any) {
    toast.error(
      error?.data?.message ||
        error?.message ||
        error?.error ||
        toastErrorMessage,
      {
        id: toastId,
        duration: 2000,
      }
    );
    return { success: false, message: error };
  }
};

export default tryCatchWrapper;
