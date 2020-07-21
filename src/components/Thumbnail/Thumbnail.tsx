import React, { useEffect, useState } from 'react'
// import { map } from 'lodash-es'

import styled from 'styled-components'
import getRelatedList, { ICatResponse } from '../../container/relatedList'

const Thumbnail = () => {
  const [list, setList] = useState<ICatResponse[]>([])
  useEffect(() => {
    const setThumnailList = async () => {
      try {
        const res = await getRelatedList()
        setList(res)
      } catch (error) {
        console.log(error)
      }
    }
    setThumnailList()
  }, [])

  return (
    <>
      <div>Thumbnail</div>
      <StyledGird>
        {list.map((value) => {
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
  width: 100%;
  max-width: 960px;
  display: grid;
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
