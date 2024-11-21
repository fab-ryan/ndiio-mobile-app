export interface CategoryResponse {
    status: number
    data: Categories[]
  }
  
  export interface Categories {
    id: number
    category_id: number
    created_at: string
    updated_at: string
    slug: string
    category: Category
  }
  
  export interface Category {
    id: number
    name: string
    slug: string
    description: string
    parent_id: number
    category_icon: string
    seo_title?: string
    meta_desc?: string
    keywords?: string
    og_title?: string
    og_desc?: string
    twitter_title?: string
    twitter_desc?: string
    created_at: string
    updated_at: string
  }
  