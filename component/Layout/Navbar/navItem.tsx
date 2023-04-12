interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
  }
const navItems: Array<NavItem> = [
    {
      label: 'Home',
      href: "/home"
    },
    {
      label: 'About Us',
      href: "/aboutUs"
    },
    {
      label: 'Contact Us',
      href: "/contactUs"
    },
    
  ];
  

export default navItems;