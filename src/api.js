import AddIcon from "./components/assets/svg/add-icon";
import BabySuitIcon from "./components/assets/svg/baby-suit-icon";
import DressIcon from "./components/assets/svg/dress-icon";
import HomeIcon from "./components/assets/svg/home-icon";
import LikeIcon from "./components/assets/svg/like-icon";
import MessageIcon from "./components/assets/svg/message-icon";
import ProfileIcon from "./components/assets/svg/profile-icon";
import SuitIcon from "./components/assets/svg/suit-icon";

export const mockedCategories = [
  {
    title: "women",
    image: <DressIcon />,
    path: "/categories/women",
    subCetegories: [
      { title: "Dresses", path: "/categories/women/dresses" },
      { title: "Tops & Blouses", path: "/categories/women/tops&blouses" },
      { title: "Jeans", path: "/categories/women/jeans" },
      { title: "Sweaters", path: "/categories/women/sweaters" },
      { title: "Jackets", path: "/categories/women/jackets" },
      { title: "Vests", path: "/categories/women/vests" },
      { title: "Coats", path: "/categories/women/coats" },
      { title: "Socks", path: "/categories/women/socks" },
    ],
  },
  {
    title: "men",
    image: <SuitIcon />,
    path: "/categories/men",
    subCetegories: [
      { title: "Shirt", path: "/categories/men/shirt" },
      { title: "Sweatshirt", path: "/categories/men/sweatshirt" },
      { title: "Pants", path: "/categories/men/pants" },
      { title: "Shoes", path: "/categories/men/shoes" },
      { title: "Coats", path: "/categories/men/coats" },
      { title: "Shorts", path: "/categories/men/shorts" },
      { title: "Socks", path: "/categories/men/socks" },
    ],
  },
  {
    title: "children", 
    image: <BabySuitIcon />, 
    path: "/categories/children", 
    subCetegories: [
      { title: "Clothing", path: "/categories/children/clothing" },
      { title: "Shoes", path: "/categories/children/shoes" },
      { title: "Watches", path: "/categories/children/watches" },
      { title: "Accessories", path: "/categories/children/accessories" },
      { title: "Jewelery", path: "/categories/children/jewelery" },
    ],
  },
  { title: "health and care", image: <BabySuitIcon />, path: "/categories/healthcare" },
  { title: "furniture", image: <BabySuitIcon />, path: "/categories/furniture" },
];

export const mockFooterData = [
  { image: <HomeIcon />, title: "home", path: "/" },
  { image: <MessageIcon />, title: "direct", path: "/direct" },
  { image: <AddIcon />, title: "add", path: "/add" },
  { image: <LikeIcon />, title: "favorite", path: "/favorite" },
  { image: <ProfileIcon />, title: "profile", path: "/profile" },
];

export const mockedProducts = [
  {
    title: "Nike",
    price: "4800 UAH",
    size: "42",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e25add2e-77d1-4554-b3ce-283d7c48f5a1/blazer-mid-pro-club-mens-shoes-Vgslvc.png",
  },
  {
    title: "Nike",
    price: "4800 UAH",
    size: "42",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e25add2e-77d1-4554-b3ce-283d7c48f5a1/blazer-mid-pro-club-mens-shoes-Vgslvc.png",
  },
  {
    title: "Nike",
    price: "4800 UAH",
    size: "42",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e25add2e-77d1-4554-b3ce-283d7c48f5a1/blazer-mid-pro-club-mens-shoes-Vgslvc.png",
  },
  {
    title: "Nike",
    price: "4800 UAH",
    size: "42",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e25add2e-77d1-4554-b3ce-283d7c48f5a1/blazer-mid-pro-club-mens-shoes-Vgslvc.png",
  },
  {
    title: "Nike",
    price: "4800 UAH",
    size: "42",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e25add2e-77d1-4554-b3ce-283d7c48f5a1/blazer-mid-pro-club-mens-shoes-Vgslvc.png",
  },
  {
    title: "Nike",
    price: "4800 UAH",
    size: "42",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e25add2e-77d1-4554-b3ce-283d7c48f5a1/blazer-mid-pro-club-mens-shoes-Vgslvc.png",
  },
  {
    title: "Nike",
    price: "4800 UAH",
    size: "42",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e25add2e-77d1-4554-b3ce-283d7c48f5a1/blazer-mid-pro-club-mens-shoes-Vgslvc.png",
  },
  {
    title: "Nike",
    price: "4800 UAH",
    size: "42",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e25add2e-77d1-4554-b3ce-283d7c48f5a1/blazer-mid-pro-club-mens-shoes-Vgslvc.png",
  },
  {
    title: "Nike",
    price: "4800 UAH",
    size: "42",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e25add2e-77d1-4554-b3ce-283d7c48f5a1/blazer-mid-pro-club-mens-shoes-Vgslvc.png",
  },
];
