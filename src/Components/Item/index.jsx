import React from 'react'
import styled from "styled-components";


const Item = styled.div`
  display: flex;
  flex-direction: column;
`
const Span = styled.span`
  font-weight: ${(props) => props.strong ? "bold" : "" };
`
export default ({type, from, value}) => {
  return (
    <Item>
      <Span strong>
        {type}
      </Span>
      <Span>
        {from}
      </Span>
      <Span>
        R$ {value}
      </Span>
    </Item>
  )
}