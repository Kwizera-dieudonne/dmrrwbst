import { HeroSlide, Product, MissionItem } from '../types';

// Hero Slider Images Data - Only 2 slides
export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920&q=80',
    alt: 'Coffee beans'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=1920&q=80',
    alt: 'Tea leaves'
  }
];

// Products Data - Extended collection
export const productsData: Product[] = [
  {
    id: 1,
    name: 'Coffee',
    category: 'Coffee',
    description: 'Single-origin coffee beans, delivering a complex and refined taste.',
    image: `${process.env.PUBLIC_URL}/assets/images/products/coffee.jpeg`
  },
  {
    id: 2,
    name: 'Coffe Beans',
    category: 'Coffee',
    description: 'Bold and rich espresso roast with caramel undertones, perfect for your morning ritual.',
    image: `${process.env.PUBLIC_URL}/assets/images/products/coffee-beans.jpeg`
  },
  {
    id: 3,
    name: 'Tea bag',
    category: 'Tea',
    description: 'Fresh and delicate green tea leaves with bags, offering a clean and refreshing taste.',
    image: `${process.env.PUBLIC_URL}/assets/images/products/tea-bag.jpeg`
  },
  {
    id: 4,
    name: 'Coffee',
    category: 'Coffee',
    description: 'Calming blend of chamomile, lavender, and mint for a soothing evening experience.',
    image: `${process.env.PUBLIC_URL}/assets/images/products/coffeebeans2.jpeg`
  }
];

// Mission Items Data
export const missionItems: MissionItem[] = [
  {
    id: 1,
    iconName: 'Globe',
    title: 'Premium Sourcing',
    description: 'We travel the world to find the finest coffee beans and tea leaves from sustainable farms.'
  },
  {
    id: 2,
    iconName: 'Users',
    title: 'Ethical Partnerships',
    description: 'Direct trade relationships ensure fair compensation and support for farming communities.'
  },
  {
    id: 3,
    iconName: 'Leaf',
    title: 'Sustainability',
    description: 'Committed to eco-friendly practices from cultivation to your cup, protecting our planet.'
  },
  {
    id: 4,
    iconName: 'Award',
    title: 'Exceptional Experience',
    description: 'Every product is crafted with precision to deliver unforgettable flavor and quality.'
  }
];