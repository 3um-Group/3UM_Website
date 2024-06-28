export type NavItem = {
    id: string;
    label: string;
    href: string;
  };
  
  const navItems: NavItem[] = [
    { id: 'our-company', label: 'Our Company', href: '/' },
    { id: 'our-people', label: 'Our People', href: '/' },
    { id: 'investors', label: 'Investors', href: '/' }
    // Add more items as needed
  ];
  
  export default navItems;