import { useRouter } from "next/dist/client/router";
import { ReactNode } from "react";
import { useAuth } from "../context/auth";

type Props = {
  children: ((user: User) => ReactNode) | ReactNode;
};

const UserGuard = ({ children }: Props) => {
  const user = useAuth();
  const router = useRouter();
  if (user === null && router.pathname !== "/") {
    router.push("/");
    return null;
  }
  if (!user) return null;
  if (typeof children === "function") return <>{children(user)}</>;
  return <>{children}</>;
};

export default UserGuard;
