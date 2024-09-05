import { IconsEnum } from './lib';

export interface OnboardDataInterface {
  key: number;
  title: string;
  description: string;
  image: string;
}

export const OnboardData: OnboardDataInterface[] = [
  {
    key: 1,
    title: 'Welcome to the App',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel libero.',
    image:
      'https://res.cloudinary.com/ryan-fab/image/upload/v1724865767/mobile/isometric-self-service-cashier-concept_vp3hg4.png',
  },
  {
    key: 2,
    title: 'Welcome to the App',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel libero.',
    image:
      'https://res.cloudinary.com/ryan-fab/image/upload/v1724865767/mobile/isometric-self-service-cashier-concept_vp3hg4.png',
  },
  {
    key: 3,
    title: 'Welcome to the App',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel libero.',
    image:
      'https://res.cloudinary.com/ryan-fab/image/upload/v1724865767/mobile/isometric-self-service-cashier-concept_vp3hg4.png',
  },
];

interface AdvertiseInterface {
  title: string;
  subtitle: string;
  image: string;
}

export const advertiseData: AdvertiseInterface[] = [
  {
    title: 'Gatis Ongkir Selama PPKM!',
    subtitle: 'Periode Mei - Agustus 2021',
    image:
      'https://res.cloudinary.com/ryan-fab/image/upload/v1725403599/mobile/young-authentic-charismatic-real-people-woman-against-wall-pointing-with-forefingers-copy-space-expressing-excitement-desire_1_1_kamscf.png',
  },
  {
    title: 'Gatis Ongkir Selama PPKM!',
    subtitle: 'Periode Mei - Agustus 2021',
    image:
      'https://res.cloudinary.com/ryan-fab/image/upload/v1725403534/mobile/young-authentic-charismatic-real-people-woman-against-wall-pointing-with-forefingers-copy-space-expressing-excitement-desire_1_epwgo2.png',
  },
];

export interface CategoriesInterface {
  title: string;
  bg_color: string;
  icon: {
    name: any;
    icon_type: IconsEnum;
    color: string;
  };
}

export const categoriesData: CategoriesInterface[] = [
  // electronics category only
  {
    title: 'Electronics',
    bg_color: '#FFC542',
    icon: {
      name: 'laptop',
      icon_type: IconsEnum.material,
      color: '#fff',
    },
  },
  {
    title: 'Fashion',
    bg_color: '#FF575F',
    icon: {
      name: 'tshirt-crew',
      icon_type: IconsEnum.material,
      color: '#fff',
    },
  },
  {
    title: 'Home',
    bg_color: '#3DA5F4',
    icon: {
      name: 'home',
      icon_type: IconsEnum.material,
      color: '#fff',
    },
  },
  {
    title: 'Beauty',
    bg_color: '#1ABC9C',
    icon: {
      name: 'spa',
      icon_type: IconsEnum.material,
      color: '#fff',
    },
  },
  {
    title: 'Sports',
    bg_color: '#F53B57',
    icon: {
      name: 'dumbbell',
      icon_type: IconsEnum.material,
      color: '#fff',
    },
  },
  {
    title: 'Books',
    bg_color: '#252525',
    icon: {
      name: 'book',
      icon_type: IconsEnum.material,
      color: '#fff',
    },
  },
  {
    title: 'Furniture',
    bg_color: '#FFC542',
    icon: {
      name: 'sofa',
      icon_type: IconsEnum.material,
      color: '#fff',
    },
  },
  {
    title: 'Toys',
    bg_color: '#FF575F',
    icon: {
      name: 'gamepad-variant',
      icon_type: IconsEnum.material,
      color: '#fff',
    },
  },
  {
    title: 'Health',
    bg_color: '#3DA5F4',
    icon: {
      name: 'doctor',
      icon_type: IconsEnum.material,
      color: '#fff',
    },
  },
  {
    title: 'Automotive',
    bg_color: '#1ABC9C',
    icon: {
      name: 'car',
      icon_type: IconsEnum.material,
      color: '#fff',
    },
  },
  {
    title: 'Groceries',
    bg_color: '#F53B57',
    icon: {
      name: 'shopping',
      icon_type: IconsEnum.material,
      color: '#fff',
    },
  },
];

export interface ProductInterface {
  title: string;
  image: string;
  price: string;
  rating: number;
  reviews: number;
}

// generate electronics products only
export const productsData: ProductInterface[] = [
  {
    title: 'Apple MacBook Pro 13"',
    image:
      'https://res.cloudinary.com/ryan-fab/image/upload/v1725521329/mobile/pngwing.com_3_xuwegk.png',
    price: '$1,299.00',
    rating: 5,
    reviews: 90,
  },
  {
    title: 'HP Pavilion 15"',
    image:
      'https://res.cloudinary.com/ryan-fab/image/upload/v1725521327/mobile/pngwing.com_4_y1zp5g.png',
    price: '$899.00',
    rating: 5,
    reviews: 60,
  },
  {
    title: 'Dell XPS 13"',
    image:
      'https://res.cloudinary.com/ryan-fab/image/upload/v1725521330/mobile/pngwing.com_jn0bp5.png',
    price: '$1,299.00',
    rating: 4.5,
    reviews: 100,
  },
  {
    title: 'Headphones ',
    image:
      'https://res.cloudinary.com/ryan-fab/image/upload/v1725521120/mobile/image_5_4_nuc7gj.png',
    price: '$299.00',
    rating: 3.4,
    reviews: 100,
  },
  {
    title: 'Smart Watch',
    image:
      'https://res.cloudinary.com/ryan-fab/image/upload/v1725521330/mobile/pngwing.com_2_srcwhy.png',
    price: '$199.00',
    rating: 4.5,
    reviews: 100,
  },
];
