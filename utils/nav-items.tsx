export type NavItem = {
    id: string;
    label: string;
    href: string;
  };
  
  const navItems: NavItem[] = [
    { id: 'our-company', label: 'Our Company', href: '/company' },
    { id: 'our-people', label: 'Our People', href: '/people' },
    { id: 'investors', label: 'Investors', href: '/investors' }
    // Add more items as needed
  ];
  
  export default navItems;