import styled from 'styled-components';
import sort from '../images/sort.png';

function SortButton({onClick, value, setToggleSort, toggleSort}) {
  const handleClick = () => {
    onClick(value);
    setToggleSort(!toggleSort)
  };

  return(
    <Wrapper onClick={handleClick} >
      <Img src={sort} />
    </Wrapper>
  );
};

export default SortButton;

const Wrapper = styled.button`

  background-color: transparent;
  border: none;
  outline: none;
  :hover{
    cursor: pointer;
  }
`;

const Img = styled.img`
width:40px;
  height:40px;
  object-fit: contain
  /* :hover {
  transform: scaleY(-1);
} */
`;