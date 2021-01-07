import axios from 'axios'

import { GetFavouriteCatsResponse } from '../types'
import { FetchVoteResponeType } from '../pages/home/actions'

const api = axios.create({
  baseURL: 'https://api.thecatapi.com/v1',
  headers: {
    'X-Requested-With': true,
    'content-type': 'application/json',
    'x-api-key': `${process.env.REACT_APP_API_KEY}`,
  },
})

export const fetchCats = async () => {
  try {
    const { data } = await api.get('/images/?limit=20&order=DESC')
    return data || null
  } catch (error) {
    console.log('error', error)
  }
}

export const postCatAction = async (
  url: string,
  catId: string,
  value?: number
) => {
  try {
    const { data } = await api.post(url, {
      image_id: catId,
      ...(url === '/votes' && { value }),
      ...(url === '/favourites' && { sub_id: 'user_har_123' }),
    })
    return data || null
  } catch (error) {
    console.log('error', error)
  }
}

export const unfavouriteCat = async (url: string) => {
  try {
    const { data } = await api.delete(url)
    return data || null
  } catch (error) {
    console.log('error', error)
  }
}

export const fetchFavouriteCats = async () => {
  try {
    const { data } = await api.get('/favourites/?limit=20&order=DESC')
    const ids: Array<{
      image_id: string
      id: string
    }> = data.map(({ image_id, id }: GetFavouriteCatsResponse) => ({
      image_id,
      id,
    }))
    return ids || null
  } catch (error) {
    console.log('error', error)
  }
}

export const fetchVotes = async () => {
  try {
    const { data } = await api.get('/votes/?limit=20&order=DESC')
    return (
      data?.map(({ image_id, value }: Partial<FetchVoteResponeType>) => ({
        image_id,
        value,
      })) || null
    )
  } catch (error) {
    console.log('error', error)
  }
}
