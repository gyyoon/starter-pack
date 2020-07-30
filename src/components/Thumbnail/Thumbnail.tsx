import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import styled from 'styled-components'
import { ICatResponse } from '~/service/relatedList'
import getCatList from '~/useCase/getCatList'

interface Props {
  limit?: number
}

const Thumbnail: React.FC<Props> = ({ limit = 4 }) => {
  const { items } = useSelector((state: { list: { items: ICatResponse[] | null } }) => ({
    items: state.list.items,
  }))

  useEffect(() => {
    getCatList(limit)
  }, [limit])

  return (
    <>
      <h1>Thumbnail</h1>
      <h2>use redux</h2>
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
      <p>bulma 12 columns flex layout</p>
      <div className="columns is-multiline is-mobile">
        <div className="column is-6-mobile is-3-tablet is-2-desktop">
          is-6-mobile is-3-tablet is-2-desktop
        </div>
        <div className="column is-6-mobile is-3-tablet is-2-desktop">
          is-6-mobile is-3-tablet is-2-desktop
        </div>
        <div className="column is-6-mobile is-3-tablet is-2-desktop">
          is-6-mobile is-3-tablet is-2-desktop
        </div>
        <div className="column is-6-mobile is-3-tablet is-2-desktop">
          is-6-mobile is-3-tablet is-2-desktop
        </div>
        <div className="column is-6-mobile is-3-tablet is-2-desktop">
          is-6-mobile is-3-tablet is-2-desktop
        </div>
        <div className="column is-6-mobile is-3-tablet is-2-desktop">
          is-6-mobile is-3-tablet is-2-desktop
        </div>
        <div className="column is-6-mobile is-3-tablet is-2-desktop">
          is-6-mobile is-3-tablet is-2-desktop
        </div>
        <div className="column is-6-mobile is-3-tablet is-2-desktop">
          is-6-mobile is-3-tablet is-2-desktop
        </div>
        <div className="column is-6-mobile is-3-tablet is-2-desktop">
          is-6-mobile is-3-tablet is-2-desktop
        </div>
      </div>
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
