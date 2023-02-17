export interface Picture {
  id: number
  title: string
  src: string
  price?: number
  oldPrice?: number
  available: boolean
  cart: number[] 
}