import { Project, Service, Testimonial, MenuLink } from './types';

export const MENU_LINKS: MenuLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Installations', href: '#installations' },
];

export const SERVICES: Service[] = [
  { id: '1', title: 'Custom System Calibration', icon: 'tune' },
  { id: '2', title: 'Room Geometry Analysis', icon: 'architecture' },
  { id: '3', title: 'Speaker Placement Optimization', icon: 'speaker_group' },
  { id: '4', title: 'Reverberation Control', icon: 'waves' },
];

export const IMAGE_PATH = "imgs"

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Analog Warmth',
    location: 'Berlin, Germany',
    image: `${IMAGE_PATH}/analog-warmth.jpg`,
    number: '01'
  },
  {
    id: '2',
    title: 'The Glass House',
    location: 'Copenhagen, DK',
    image: `${IMAGE_PATH}/glass-house.jpg`,
    number: '02'
  },
  {
    id: '3',
    title: 'Vinyl Sanctuary',
    location: 'London, UK',
    image: `${IMAGE_PATH}/vinyl-sancturary.jpg`,
    number: '03'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Julian Racing',
    location: 'Los Angeles, CA',
    rating: 5,
    quote: '"The result is nothing short of incredible. Every instrument sits perfectly in the mix. I\'m hearing details in my favorite records I never experienced before."'
  },
  {
    id: '2',
    name: 'Elena Voss',
    location: 'Aarhus, Denmark',
    rating: 5,
    quote: '"Elegance meeting science. The consultation completely transformed our living room soundstage. The team was professional and knowledgeable beyond compare."'
  },
  {
    id: '3',
    name: 'Naoki Ono',
    location: 'Osaka, Japan',
    rating: 5,
    quote: '"The vacuum tube amplifier they sourced is a masterpiece of engineering and art. My vinyl collection has found a new purpose."'
  },
  {
    id: '4',
    name: 'Marcus Chen',
    location: 'San Francisco, CA',
    rating: 5,
    quote: '"The room treatment they designed eliminated all standing waves. My mixing decisions are now accurate and translate perfectly to other systems."'
  },
  {
    id: '5',
    name: 'Sophie Laurent',
    location: 'Paris, France',
    rating: 5,
    quote: '"Their attention to detail is extraordinary. From cable management to speaker positioning, every element was considered with precision."'
  },
  {
    id: '6',
    name: 'David Kumar',
    location: 'Mumbai, India',
    rating: 5,
    quote: '"The custom-built speakers exceed all expectations. The clarity and depth they achieve in my room is simply breathtaking. Worth every investment."'
  }
];

export const MARQUEE_ITEMS = [
  "Analog Sound",
  "Vacuum Tube Amps",
  "Hi-Fi Installations",
  "Acoustic Design",
  "Precision Audio",
  "Analog Sound",
  "Vacuum Tube Amps",
  "Hi-Fi Installations",
];
