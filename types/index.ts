export interface Category {
  id: string
  slug: string
  name: string
  description: string
  image: string
  bannerImage?: string
}

export interface Product {
  id: string
  slug: string
  title: string
  description: string
  categoryId: string
  featured: boolean
  images: string[]
  price: number
  color?: string
  sizes: string[]
  fabric?: string
  technique?: string
  fit?: string
  care?: string
}

export interface NavItem {
  label: string
  href: string
}