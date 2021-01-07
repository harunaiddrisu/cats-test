import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Header: FC = () => {
  return (
    <HeaderContainer>
      <LinkWrapper to="/">Home</LinkWrapper>
      <LinkWrapper to="/upload">Upload</LinkWrapper>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.div`
  width: 100%;
  height: 100px;
  background-image: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);
  margin-bottom: 21px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const LinkWrapper = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  color: #fff;
  font-weight: bold;
  font-size: 23px;
  padding: 23px;
`
