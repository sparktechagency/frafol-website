export const disableConsole = () => {
  if (process.env.NODE_ENV === "production" && typeof window !== "undefined") {
    console.log = () => {};
    console.warn = () => {};
    console.error = () => {};
    console.info = () => {};
    console.debug = () => {};
  }
};
