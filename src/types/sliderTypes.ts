export interface SliderResponse {
    status: number
    data: Sliders
  }
  
  export interface Sliders {
    slider: Slider[]
    seo_title: SeoTitle
    meta_desc: MetaDesc
  }
  
  export interface Slider {
    id: number
    title: string
    url: string
    thumbnail: string
    src: string
    path: string
    created_at: string
    updated_at: string
  }
  
  export interface SeoTitle {
    link: string
  }
  
  export interface MetaDesc {
    link: string
  }
  