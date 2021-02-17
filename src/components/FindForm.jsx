import { useState } from 'react';
import styled from 'styled-components';

function FindForm({findInfo, active}){
  const [searchText, setSearchText] = useState('');
  
  function handleChange(e){
    setSearchText(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    findInfo(searchText);
  }

  return(
    <Wrapper onSubmit={handleSubmit} active={active}>
      <Input placeholder="Введите тест для поиска" onChange={handleChange} />
      <Button>Найти</Button>
    </Wrapper>
  )
}

export default FindForm;

const Wrapper = styled.form`
  display: ${({active}) => active ? 'flex' : 'none'};
  margin: 30px 0;
`;

const Input = styled.input`
margin-right: 20px;
`;

const Button = styled.button`
  border: none;
  outline: none;
  border-radius: 10px;
`;
