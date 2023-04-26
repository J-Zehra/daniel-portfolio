type NavItems = {
  navLinks: string[];
  logo: string;
};

type AppContextValues = {
  scrolled: boolean;
  activeNav: string;
  isSectionInView: boolean;
  setIsSectionInView: Dispatch<SetStateAction<boolean>>;
  setActiveNav: Dispatch<SetStateAction<string>>;
};
