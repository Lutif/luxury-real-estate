export interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  featured: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  content: string;
}

export const featuredProperties: Property[] = [
  {
    id: "1",
    title: "Modern Luxury Villa",
    location: "Beverly Hills, CA",
    price: 2500000,
    bedrooms: 5,
    bathrooms: 4,
    area: 4500,
    image: "/properties/villa-1.jpg",
    featured: true,
  },
  {
    id: "2",
    title: "Waterfront Penthouse",
    location: "Miami Beach, FL",
    price: 1800000,
    bedrooms: 3,
    bathrooms: 3,
    area: 2800,
    image: "/properties/penthouse-1.jpg",
    featured: true,
  },
  {
    id: "3",
    title: "Historic Brownstone",
    location: "Brooklyn, NY",
    price: 3200000,
    bedrooms: 4,
    bathrooms: 3,
    area: 3800,
    image: "/properties/brownstone-1.jpg",
    featured: true,
  },
  {
    id: "4",
    title: "Oceanfront Estate",
    location: "Malibu, CA",
    price: 4500000,
    bedrooms: 6,
    bathrooms: 5,
    area: 5200,
    image: "/properties/oceanfront-1.jpg",
    featured: true,
  },
  {
    id: "5",
    title: "Sky Penthouse",
    location: "Manhattan, NY",
    price: 3800000,
    bedrooms: 4,
    bathrooms: 4,
    area: 3500,
    image: "/properties/sky-penthouse-1.jpg",
    featured: true,
  },
  {
    id: "6",
    title: "Mediterranean Villa",
    location: "Newport Beach, CA",
    price: 2900000,
    bedrooms: 5,
    bathrooms: 4,
    area: 4200,
    image: "/properties/med-villa-1.jpg",
    featured: true,
  }
];

export const allProperties: Property[] = [
  ...featuredProperties,
  {
    id: "7",
    title: "Modern Loft",
    location: "San Francisco, CA",
    price: 1500000,
    bedrooms: 2,
    bathrooms: 2,
    area: 1800,
    image: "/properties/loft-1.jpg",
    featured: false,
  },
  {
    id: "8",
    title: "Garden Apartment",
    location: "Boston, MA",
    price: 1200000,
    bedrooms: 3,
    bathrooms: 2,
    area: 2200,
    image: "/properties/garden-apt-1.jpg",
    featured: false,
  },
  {
    id: "9",
    title: "Mountain View Estate",
    location: "Aspen, CO",
    price: 4200000,
    bedrooms: 5,
    bathrooms: 4,
    area: 4800,
    image: "/properties/mountain-1.jpg",
    featured: false,
  },
  {
    id: "10",
    title: "Beach House",
    location: "Hamptons, NY",
    price: 2800000,
    bedrooms: 4,
    bathrooms: 3,
    area: 3200,
    image: "/properties/beach-1.jpg",
    featured: false,
  },
  {
    id: "11",
    title: "City Apartment",
    location: "Chicago, IL",
    price: 950000,
    bedrooms: 2,
    bathrooms: 2,
    area: 1500,
    image: "/properties/city-apt-1.jpg",
    featured: false,
  },
  {
    id: "12",
    title: "Country Estate",
    location: "Greenwich, CT",
    price: 3500000,
    bedrooms: 6,
    bathrooms: 5,
    area: 5500,
    image: "/properties/country-1.jpg",
    featured: false,
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Homeowner",
    image: "/testimonials/sarah.jpg",
    content: "Working with this team was an absolute pleasure. They found us our dream home within our budget and made the entire process smooth and stress-free.",
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Property Investor",
    image: "/testimonials/michael.jpg",
    content: "Their market knowledge and professional approach helped me make informed investment decisions. I've seen great returns on my properties.",
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "First-time Buyer",
    image: "/testimonials/emily.jpg",
    content: "As a first-time homebuyer, I was nervous about the process, but they guided me every step of the way. Couldn't be happier with my new home!",
  },
];

export const stats = {
  propertiesSold: 1500,
  happyClients: 1200,
  yearsOfExperience: 25,
  citiesCovered: 12,
}; 