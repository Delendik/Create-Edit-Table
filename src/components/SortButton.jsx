import styled from 'styled-components';
import sort from '../images/sort.png';

function SortButton({handleClick}) {
  return(
    <Wrapper>

    </Wrapper>
  );
};

export default SortButton;

const Wrapper = styled.button`
  width:40px;
  height:40px;
  background-image: {url('{sort')};
  background-color: transparent;
  border: none;
  outline: none;
  :hover{
    cursor: pointer;
  }
`;