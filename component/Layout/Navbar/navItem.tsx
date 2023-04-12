interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
  }
const navItems: Array<NavItem> = [
    {
      label: 'Home',
      href: "/"
    },
    {
      label: 'About Us',
      href: "/aboutUs"
    },
    {
      label: 'Contact Us',
      href: "/contactUs"
    },
    {
      label: 'Our Products',
      href: "/ourProducts"
    },
  ];
  

export default navItems;