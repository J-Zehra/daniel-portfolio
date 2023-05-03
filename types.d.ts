type NavItems = {
  navLinks: string[];
  logo: string;
  logo_dark: string;
};

type AppContextValues = {
  scrolled: boolean;
  activeNav: string;
  isSectionInView: boolean;
  setIsSectionInView: Dispatch<SetStateAction<boolean>>;
  setActiveNav: Dispatch<SetStateAction<string>>;
};

type Artworks = {
  _id: string;
  name: string;
  artwork_image: { asset: { url: string } };
};
