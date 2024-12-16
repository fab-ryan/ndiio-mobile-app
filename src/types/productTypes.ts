export interface ProductResponse {
  status: number;
  data: ProductInterface[];
  count: number;
}

export interface ProductInterface {
  id: number;
  name: string;
  slug: string;
  banner_section: any[];
  products: Product[];
}

export interface Product {
  id: number;
  product_orignal_price: number;
  selling_price: string;
  title: string;
  slug: string;
  is_feature: number;
  avg_rating: any;
  total_review: number;
  product_single_img: ProductSingleImg;
}

export interface ProductSingleImg {
  id: number;
  product_image: string;
  small: any;
  medium: any;
  product_id: number;
  created_at: string;
  updated_at: string;
}

export interface ResponseProductDetails {
  status: number;
  data: ProductDetail[];
  inventory: any[];
  remainingStock: number;
  isProduct: boolean;
  related_products: RelatedProduct[];
  product_categories: ProductCategory[];
}

export interface ProductDetail {
  id: number;
  title: string;
  shipping_checkbox_id: string;
  flash_sale: any;
  products_weight: any;
  products_weight_unit: string;
  special: any;
  min_order: number;
  max_order: number;
  user_id: number;
  product_tax_attribute_id: any;
  product_type: string;
  is_feature: number;
  slug: string;
  product_category: any;
  description: string;
  brand_id: number;
  product_model: string;
  video_file_link: any;
  selling_price: string;
  product_orignal_price: number;
  status: number;
  created_at: string;
  updated_at: string;
  product_img: ProductImg[];
  seo: Seo[];
  brandd: Brandd;
  catd: any;
  product_single_img: ProductSingleImg;
  attribute: any[];
  inventory: Inventory;
  user: User;
  prodreview: any[];
}

export interface ProductImg {
  id: number;
  product_image: string;
  small: any;
  medium: any;
  product_id: number;
  created_at: string;
  updated_at: string;
}

export interface Seo {
  id: number;
  blog_id: any;
  brand_id: number;
  user_id: any;
  product_id: number;
  theme_page_id: any;
  title: string;
  description: string;
  twitter_title: string;
  twitter_image: any;
  twitter_description: string;
  open_graph_title: string;
  open_graph_description: string;
  open_graph_image: any;
  created_at: string;
  updated_at: string;
}

export interface Brandd {
  id: number;
  name: string;
  slug: string;
  icon: any;
  description: string;
  youtube_video: any;
  facebook_link: any;
  pinterest_link: any;
  created_at: string;
  updated_at: string;
  youtube_link: any;
  twitter_link: any;
  instagram_link: any;
  like_count: any;
}

export interface Inventory {
  id: number;
  admin_id: number;
  reference_code: any;
  stock: number;
  products_id: number;
  purchase_price: any;
  stock_type: string;
  barcode: any;
  sku: any;
  created_at: string;
  updated_at: string;
}

export interface User {
  id: number;
  name: string;
  first_name: string;
  last_name: string;
  middle_name: string;
  email: string;
  icon: string;
  role_id: string;
  otp: any;
  login_ip: any;
  status: number;
  otpduration: any;
  theme_mode: number;
  created_at: string;
  updated_at: string;
  hashid: string;
}

export interface RelatedProduct {
  id: number;
  product_orignal_price: number;
  selling_price: string;
  title: string;
  slug: string;
  is_feature: number;
  product_single_img: ProductSingleImg2;
}

export interface ProductSingleImg2 {
  id: number;
  product_image: string;
  small: any;
  medium: any;
  product_id: number;
  created_at: string;
  updated_at: string;
}

export interface ProductCategory {
  name: string;
  slug: string;
}

export interface ProductByCategoryResponse {
  status: number;
  data: ProductByCategory[] | ProductDetails[];
  category: Category[];
  brands: Brand[];
  subCategories: SubCategory[];
  type: string;
  count: number;
  maximun_price: number;
}

export interface ProductDetails {
  id: number;
  name: string;
  slug: string;
  banner_section: any[];
  products: Product[];
  count: number;
}
export interface ProductByCategory {
  id: number;
  title: string;
  brand_id: number;
  is_feature: number;
  product_category: any;
  selling_price: string;
  product_orignal_price: number;
  slug: string;
  product_single_img: ProductSingleImg;
  seo: Seo[];
}

export interface Category {
  id: number;
  name: string;
  description: string;
  category_slider: any[];
}

export interface Brand {
  id: number;
  brand_id: number;
  brandd: Brandd;
}

export interface SubCategory {
  id: number;
  name: string;
  children_recursive: any[];
}
