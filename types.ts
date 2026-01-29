export interface Project {
  id: string;
  title: string;
  location: string;
  image: string;
  number: string;
}

export interface Service {
  id: string;
  title: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  quote: string;
  rating: number;
}

export interface MenuLink {
  label: string;
  href: string;
}