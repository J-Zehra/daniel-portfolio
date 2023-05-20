type NavItems = {
  navLinks: string[];
  logo: string;
  logo_dark: string;
};

type AppContextValues = {
  scrolled: boolean;
  activeNav: string;
  isSectionInView: boolean;
  category: string;
  setCategory: Dispatch<SetStateAction<string>>;
  setIsSectionInView: Dispatch<SetStateAction<boolean>>;
  setActiveNav: Dispatch<SetStateAction<string>>;
};

type Artworks = {
  _id: string;
  artwork_name: string;
  description: string;
  category: string;
  artwork_image: { asset: { url: string } };
};

type Categories = {
  _id: string;
  category_name: string;
};
