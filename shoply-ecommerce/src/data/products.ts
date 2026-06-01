export type Product = {
  id: number;
  title: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
};

export const products: Product[] = [
  {
    id: 1,
    title: "Wireless Bluetooth Headphones - Noise Cancelling",
    price: 6499,
    rating: 4.5,
    reviews: 1284,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    category: "Electronics",
  },
  {
    id: 2,
    title: "Smart Watch Fitness Tracker with Heart Rate Monitor",
    price: 10499,
    rating: 4.3,
    reviews: 856,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
    category: "Electronics",
  },
  {
    id: 3,
    title: "Stainless Steel Insulated Water Bottle 32oz",
    price: 1999,
    rating: 4.7,
    reviews: 3421,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400",
    category: "Home",
  },
  {
    id: 4,
    title: "Mechanical Gaming Keyboard RGB Backlit",
    price: 7499,
    rating: 4.6,
    reviews: 2103,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400",
    category: "Electronics",
  },
  {
    id: 5,
    title: "Running Shoes Lightweight Breathable",
    price: 4999,
    rating: 4.2,
    reviews: 945,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
    category: "Fashion",
  },
  {
    id: 6,
    title: "Coffee Maker Programmable 12-Cup",
    price: 4199,
    rating: 4.4,
    reviews: 1678,
    image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400",
    category: "Home",
  },
  {
    id: 7,
    title: "Backpack Travel Laptop Bag Water Resistant",
    price: 3299,
    rating: 4.5,
    reviews: 2890,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
    category: "Fashion",
  },
  {
    id: 8,
    title: "LED Desk Lamp with Wireless Charging",
    price: 2899,
    rating: 4.3,
    reviews: 512,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400",
    category: "Home",
  },
];
