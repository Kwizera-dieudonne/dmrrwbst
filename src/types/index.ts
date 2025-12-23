// Hero Slide Type
export interface HeroSlide {
    id: number;
    image: string;
    alt: string;
  }
  
  // Product Type
  export interface Product {
    id: number;
    name: string;
    category: 'Coffee' | 'Tea';
    description: string;
    image: string;
  }
  
  // Mission Item Type
  export interface MissionItem {
    id: number;
    iconName: 'Globe' | 'Users' | 'Leaf' | 'Award';
    title: string;
    description: string;
  }
  
  // Contact Form Data Type
  export interface ContactFormData {
    name: string;
    email: string;
    message: string;
  }
  
  // Product Filter Type
  export type ProductFilter = 'All' | 'Coffee' | 'Tea';