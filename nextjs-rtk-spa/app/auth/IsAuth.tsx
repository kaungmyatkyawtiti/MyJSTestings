import { selectAuthToken } from "@/lib/features/auth/authSlice";
import { useAppSelector } from "@/lib/hooks";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function IsAuth<T>(
  Component: React.ComponentType<T>
) {
  return (props: T) => {
    const router = useRouter();
    const auth = useAppSelector(selectAuthToken);
    const pathname = usePathname();

    console.log('Path name ', pathname);

    useEffect(() => {
      if (!auth) {
        router.push('/login?redirectUrl=' + pathname);
      }
    }, []);

    return (
      <>
        <Component {...props!} />
      </>
    );
  };
}
