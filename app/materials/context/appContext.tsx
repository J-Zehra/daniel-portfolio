import React, { useEffect, useMemo, useState, createContext } from "react";

export const ApplicationContext = createContext<AppContextValues | null>(null);

function AppContext({ children }: { children: React.ReactNode }) {
  const [activeNav, setActiveNav] = useState<string>("Home");

  // INITIALIZE A STATE TO TRACK IF THE PAGE IS SCROLLED
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isSectionInView, setIsSectionInView] = useState<boolean>(false);
  const [category, setCategory] = useState<string>("All");

  // HANDLE THE SCROLL EVENT. CHANGE VARIABLES WHEN SCROLLED
  const handleScroll = () => {
    if (window.scrollY >= 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  // ATTACH THE FUNCTION TO THE SCROLL EVENT LISTENER ON MOUNT
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  // SET THE VALUES
  const values = useMemo(() => {
    const items: AppContextValues = {
      scrolled,
      activeNav,
      setActiveNav,
      isSectionInView,
      setIsSectionInView,
      category,
      setCategory,
    };
    return items;
  }, [activeNav, category, isSectionInView, scrolled]);

  return (
    <ApplicationContext.Provider value={values}>
      {children}
    </ApplicationContext.Provider>
  );
}

export default AppContext;
