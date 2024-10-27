import searchIcon from "../assets/commonResource/images/icons/search-icon-sm.png";
import cartIcon from "../assets/commonResource/images/icons/cart-sm.png";

let NavData = [
  { LinkName: "Mac", LinkUrl: "/mac" },
  { LinkName: "iPhone", LinkUrl: "/iphone" },
  { LinkName: "iPad", LinkUrl: "/ipad" },
  { LinkName: "Watch", LinkUrl: "/watch" },
  { LinkName: "TV", LinkUrl: "/tv" },
  { LinkName: "Music", LinkUrl: "/music" },
  { LinkName: "Support", LinkUrl: "/support" },
  {
    search: searchIcon,
    LinkUrl: "/search",
  },
  {
    cart: cartIcon,
    LinkUrl: "/cart",
  },
];
export default NavData;

