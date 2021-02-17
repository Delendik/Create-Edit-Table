import { useState } from 'react';
import styled, { keyframes } from 'styled-components';

function PageSlider({numberOfPages, active, currentPage, nextPage, previousPage, lastPage, firstPage}) {

  if(currentPage===1){
    return(
      <Wrapper active={active} numberOfPages={numberOfPages}>
        <ButtonActive>{currentPage}</ButtonActive>
        <Button onClick={nextPage}>{currentPage+1}</Button>
        <Button onClick={lastPage}>{numberOfPages}</Button>
      </Wrapper>
    );
  } else if(currentPage===numberOfPages){
    return(
      <Wrapper active={active} numberOfPages={numberOfPages}>
        <Button onClick={previousPage}>{currentPage-1}</Button>
        <ButtonActive >{numberOfPages}</ButtonActive>
      </Wrapper>
    );
  } else if(currentPage===(numberOfPages-1)){
    return(
      <Wrapper active={active} numberOfPages={numberOfPages}>
        <Button onClick={previousPage}>{currentPage-1}</Button>
        <ButtonActive>{currentPage}</ButtonActive>
        <Button onClick={nextPage}>{currentPage+1}</Button>
      </Wrapper>
    );
  } else if(currentPage>3){
    return(
      <Wrapper active={active} numberOfPages={numberOfPages}>
        <Button onClick={firstPage}>{1}</Button>
        <Button onClick={previousPage}>{currentPage-1}</Button>
        <ButtonActive>{currentPage}</ButtonActive>
        <Button onClick={nextPage}>{currentPage+1}</Button>
        <Button onClick={lastPage}>{numberOfPages}</Button>
      </Wrapper>
    );
  } else{
    return(
      <Wrapper active={active} numberOfPages={numberOfPages}>
        <Button onClick={previousPage}>{currentPage-1}</Button>
        <ButtonActive>{currentPage}</ButtonActive>
        <Button onClick={nextPage}>{currentPage+1}</Button>
        <Button onClick={lastPage}>{numberOfPages}</Button>
      </Wrapper>
    );
  }
  
}

export default PageSlider;

const Wrapper = styled.div`
  justify-content: center;
  margin: 10px 0; 
  display: ${({active, numberOfPages}) => active ? (numberOfPages>1) ? 'flex' : 'none' : 'none'};
`;

const hoverButton = keyframes`
to{
  transform: scale(1.5);
}
`;
const Button = styled.button`
  margin-right: 5px;
  background-color: transparent;
  border: none;
  outline: none;
  :hover{
    cursor: pointer;
    animation: ${hoverButton} forwards 0.5s linear;
  }
`;

const ButtonActive = styled.button`
  margin-right: 5px;
  font-size: 30px;
  background-color: transparent;
  border: none;
  outline: none;
  :hover{
    cursor: pointer;
  }
`;
