import { usePathname, useParams } from "next/navigation";

function useActivePath(): (path: string) => boolean {
  const { locale } = useParams();
  const pathname = usePathname().replace(`/${locale}`, "");

  const checkActivePath = (path: string) => {
    if ((pathname === "" && path === "/") || pathname === path) return true;
    return false;
  };

  return checkActivePath;
}

export default useActivePath;
