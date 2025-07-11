"use client"
import { usePathname ,useRouter} from "next/navigation";
import { createContext, useContext, useState, ReactNode, useEffect } from "react";


const validCities = ["bengaluru", "hyderabad", "chennai", "kochi", "mumbai"];

type CityContextType = {
  city: string;
  setCity: (city: string) => void;
};

const CityContext = createContext<CityContextType | undefined>(undefined);

export const CityProvider = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [city, setCity] = useState<string>("");

  useEffect(() => {
    const pathCity = pathname.split("/")[1]?.toLowerCase();

    if (validCities.includes(pathCity)) {
      setCity(pathCity);
    } else if (pathCity) {
       router.replace("/not-found");
    }
  }, [pathname]);

  if (!city) return null;

  return (
    <CityContext.Provider value={{ city, setCity }}>
      {children}
    </CityContext.Provider>
  );
};


export const useCity = () => {
  const context = useContext(CityContext);
  if (!context) {
    throw new Error("useCity must be used within a CityProvider");
  }
  return context;
};
