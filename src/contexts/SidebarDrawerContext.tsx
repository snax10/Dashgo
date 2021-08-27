import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface SidebarDrawerContextProps {
  children: ReactNode;
}

type sidebarDrawerContextData = UseDisclosureReturn

const SidebarDrawerContext = createContext({} as sidebarDrawerContextData);

export function SidebarDrawerProvider({children}: SidebarDrawerContextProps) {
  const disclosure = useDisclosure()
  const router = useRouter()

  useEffect(() => {
    if (router.pathname === '/') {
      disclosure.onClose()
    }
  }, [router.asPath])

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  );
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext);