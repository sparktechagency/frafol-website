import "@ant-design/v5-patch-for-react-19";
import { Toaster } from "sonner";

const AuthLayout = ({ children }) => {
  return (
    <div>
      <div>{children}</div>

      <Toaster />
    </div>
  );
};

export default AuthLayout;
