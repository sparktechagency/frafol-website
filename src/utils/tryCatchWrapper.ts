/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from "sonner";

interface TryCatchWrapperOptions {
  body?: any;
  params?: any;
}

interface TryCatchConfig {
  showToast?: boolean;
  setLoading?: (loading: boolean) => void;
  toastLoadingMessage?: string;
  toastSuccessMessage?: string;
  toastErrorMessage?: string;
}

const tryCatchWrapper = async (
  asyncFunction: any,
  reqData?: TryCatchWrapperOptions,
  config: TryCatchConfig = {
    showToast: true,
  },
) => {
  const {
    showToast = true,
    setLoading,
    toastLoadingMessage = "Processing...",
    toastSuccessMessage,
    toastErrorMessage = "Something went wrong! Please try again.",
  } = config;

  // Set loading state
  setLoading?.(true);

  // Show loading toast only if showToast is true
  const toastId = showToast
    ? toast.loading(toastLoadingMessage, {
        duration: 2000,
      })
    : undefined;

  try {
    // Build request object
    let req: any = {};

    if (reqData?.body && reqData?.params) {
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
      // Show success toast only if showToast is true
      if (showToast) {
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
    }

    setLoading?.(false);
    return res;
  } catch (error: any) {
    // Show error toast only if showToast is true
    if (showToast) {
      toast.error(
        error?.data?.message ||
          error?.message ||
          error?.error ||
          toastErrorMessage,
        {
          id: toastId,
          duration: 2000,
        },
      );
    }

    setLoading?.(false);
    return { success: false, message: error };
  }
};

export default tryCatchWrapper;
