import React, { FC, useEffect } from 'react'
import styled from 'styled-components'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import CatCard from '../cat-card'
import { Cats, GetFavouriteCatsResponse } from '../../../../types'
import { FetchVoteResponeType } from '../../actions'

export interface HomePageProps {
  cats: Cats
  votes: Partial<FetchVoteResponeType>[]
  favouriteCatIds: Partial<GetFavouriteCatsResponse>[]
  fetchCats: () => void
  favouriteCat: (catId: string) => void
  unFavouriteCat: (catId: string) => void
  fetchFavouriteCats: () => void
  voteCat: (catId: string, value: number) => void
  fetchVotes: () => void
}

const HomePage: FC<HomePageProps> = ({
  cats,
  votes,
  favouriteCatIds,
  fetchCats,
  fetchFavouriteCats,
  favouriteCat,
  unFavouriteCat,
  voteCat,
  fetchVotes,
}) => {
  useEffect(() => {
    fetchCats()
    fetchFavouriteCats()
    fetchVotes()
  }, [])

  const favourite = (catId: string) => {
    favouriteCat(catId)
  }
  const unFavourite = (catId: string) => {
    unFavouriteCat(catId)
  }

  const vote = (catId: string, value: number) => {
    voteCat(catId, value)
  }

  return (
    <HomePageContainer>
      <ToastContainer containerId="status-indicator" draggable={false} />
      <CatsContainer>
        {cats?.map((cat) => {
          const favId = favouriteCatIds?.find(
            (item) => item.image_id === cat.id
          )
          let scoreCounter = 0
          votes
            ?.filter(({ image_id }) => image_id === cat.id)
            ?.forEach(({ value }) =>
              value === 1 ? scoreCounter++ : scoreCounter--
            )
          return (
            <CatCard
              key={cat.id}
              cat={cat}
              isFavourite={!!favId}
              favouriteId={favId?.id}
              favourite={favourite}
              unFavourite={unFavourite}
              vote={vote}
              score={scoreCounter}
            />
          )
        })}
      </CatsContainer>
    </HomePageContainer>
  )
}

export default HomePage

const HomePageContainer = styled.div`
  width: 100%;
  padding: 23px 0;
`

const CatsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
`
