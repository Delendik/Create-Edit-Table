import styled from 'styled-components';

function PageSlider({numberOfPages, active}) {
  let n = 1;
  if(n===1){
    return(
      <Wrapper active={active}>
        {`${n} ${n+1}... ${numberOfPages}`}
      </Wrapper>
    );
  } else{
    return(
      <Wrapper active={active}>
        {`${n-1} ${n} ${n+1}... ${numberOfPages}`}
      </Wrapper>
    );
  };
  
}

export default PageSlider;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  font-size: 30px;
  font-weight: bold;
  margin: 10px 0; 
  display: ${({active}) => active ? 'table-cell' : 'none'};
`;