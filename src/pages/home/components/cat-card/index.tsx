import React, { FC, useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { Cat } from '../../../../types'
import LoadingSpinner from '../../../../components/loading-spinner'

interface CatCardProps {
  cat: Cat
  isFavourite?: boolean
  score: number
  favouriteId: string | undefined
  favourite: (catId: string) => void
  unFavourite: (catId: string) => void
  vote: (catId: string, value: number) => void
}

const CatCard: FC<CatCardProps> = ({
  cat,
  isFavourite = false,
  favouriteId = '',
  score,
  favourite,
  vote,
  unFavourite,
}) => {
  const [actionIsPending, setActionIsPending] = useState(false)
  const smallRightMargin = {
    marginRight: '3px',
  }

  useEffect(() => {
    setActionIsPending(false)
  }, [isFavourite])

  return (
    <CardContainer>
      <CardContentWrapper>
        <CardImageContainer>
          <CardImage alt="Beautiful Cat Image" src={cat.url} />
        </CardImageContainer>
        <CardActionsContainer>
          <FavIcon
            onClick={() => {
              setActionIsPending(true)
              isFavourite && favouriteId
                ? unFavourite(favouriteId)
                : favourite(cat.id)
            }}
          >
            {actionIsPending ? (
              <LoadingSpinner />
            ) : (
              <>
                <i
                  style={{
                    ...smallRightMargin,
                    color: isFavourite ? '#F02D3A' : '#000',
                  }}
                  className="mi material-icons"
                >
                  favorite
                </i>
                {isFavourite ? 'unfavourite' : 'favourite'}
              </>
            )}
          </FavIcon>
          <LikeDislikeContainer>
            <LikeButton
              onClick={() => {
                vote(cat.id, 1)
              }}
            >
              <i style={smallRightMargin} className="mi material-icons">
                thumb_up_alt
              </i>
              upvote
            </LikeButton>
            <DisLikeButton onClick={() => vote(cat.id, 0)}>
              <i style={smallRightMargin} className="mi material-icons">
                thumb_down_alt
              </i>
              downvote
            </DisLikeButton>
          </LikeDislikeContainer>
        </CardActionsContainer>
      </CardContentWrapper>
      <LikesCountIndicator>
        <span>{score}</span>
      </LikesCountIndicator>
    </CardContainer>
  )
}

export default CatCard

const iconBg = css`
  padding: 7px;
`

const centered = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

const button = css`
  cursor: pointer;
`

const CardContainer = styled.div`
  position: relative;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  border-radius: 9px;
  overflow: hidden;
`

const CardContentWrapper = styled.article``

const CardImageContainer = styled.div`
  display: block;
  overflow: hidden;
  width: 100%;
  max-height: 280px;
`

const CardImage = styled.img`
  max-width: 100%;
  width: 100%;
  height: auto;
  max-height: 280px;
  object-fit: cover;
`

const CardActionsContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
`

const FavIcon = styled.span`
  ${centered};
  ${iconBg}
  ${button}
`

const LikeDislikeContainer = styled.div`
  background-color: #fff;
  display: flex;
`

const LikeButton = styled.span`
  ${button};
  ${centered};
  padding: 7px 9px 7px 7px;
  border-right: 2px solid #c0c0c0;
`

const DisLikeButton = styled.span`
  ${button};
  ${centered};
  padding: 7px 9px 7px 7px;
`

const LikesCountIndicator = styled.div`
  position: absolute;
  background-image: linear-gradient(to right, #f83600 0%, #f9d423 100%);
  top: 17px;
  right: 13px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  ${centered};
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`
