export interface Cat {
  height: number
  id: string
  url: string
  width: number
}

export type Cats = Cat[]

export interface GetFavouriteCatsResponse {
  id: string
  user_id: string
  image_id: string
  sub_id: string
  created_at: string
  image: {
    id: string
    url: string
  }
}
