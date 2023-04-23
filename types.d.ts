type NavItems = {
  navLinks: string[];
  logo: string;
};

type AppContextValues = {
  scrolled: boolean;
  activeNav: string;
  setActiveNav: Dispatch<SetStateAction<string>>;
};
