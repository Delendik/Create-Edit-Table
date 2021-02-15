import styled from 'styled-components';

function SelectButtons({openTable, isOpenTable}) {
  const handleClickSmall = () => {
    openTable('small');
  }
  const handleClickBig = () => {
    openTable('big');
  }

  return(
    <Wrapper isOpenTable={isOpenTable}>
      <Button onClick={handleClickSmall}>Маленькая таблица</Button>
      <Button onClick={handleClickBig}>Большая таблица</Button>
    </Wrapper>
  );
};

export default SelectButtons;

const Wrapper = styled.div`
  height: 100vh;
  display: ${({isOpenTable}) => !isOpenTable ? 'flex' : 'none'};
  flex-direction: column;
  justify-content: center;
  align-items:center;
`;
const Button = styled.button`
  min-height: 100px;
  width:480px;
  font-size: 50px;
  border: none;
  outline: none;
  border-radius: 10px;
  margin-bottom: 30px;
  :hover{
    cursor: pointer;
  }
`;
