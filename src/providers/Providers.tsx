"use client";
import { SocketProvider } from "@/context/SocketProvider";
import UserProvider from "@/context/UserContext";
import { persistor, store } from "@/redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <UserProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SocketProvider>
            {/* <GoogleOAuthProvider clientId="1026790988080-5t355vtcj5n5imm0i0dp4k8c7da67486.apps.googleusercontent.com"> */}
            {children}
            {/* <GoogleLogin onSuccess={responseMessage} onError={errorMessage} /> */}
            {/* </GoogleOAuthProvider> */}
          </SocketProvider>
        </PersistGate>
      </Provider>
    </UserProvider>
  );
};

export default Providers;
