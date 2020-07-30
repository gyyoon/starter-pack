import React from 'react'

import styled from 'styled-components'

interface IItems {
  categories?: Array<{ id: number; name: string }>
  id: string
  url: string
}

const Thumbnail: React.FC<{ items: IItems[] | null }> = ({ items = null }) => {
  return (
    <>
      <StyledGird>
        {items !== null &&
          items.map((value) => {
            return (
              <div>
                <StyledThumbnailWrap key={value.url} background={value.url} />
                <StyledThumbnailName>
                  {value.categories ? value.categories[0].name : value.id}
                </StyledThumbnailName>
              </div>
            )
          })}
      </StyledGird>
    </>
  )
}

const StyledGird = styled.div`
  width: calc(100% - 30px);
  margin-left: auto;
  margin-right: auto;
  max-width: 960px;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 1fr 5px 1fr 5px 1fr 5px 1fr;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 5px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
const StyledThumbnailWrap = styled.div<{ background: string }>`
  height: 200px;
  background-size: cover;
  background-image: url(${(props) => props.background});
`

const StyledThumbnailName = styled.div`
  display: flex;
  height: 40px;
  font-size: 15px;
  justify-content: center;
  align-items: center;
`

export default Thumbnail
