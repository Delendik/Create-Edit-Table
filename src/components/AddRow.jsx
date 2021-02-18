import { useState } from 'react';
import styled from 'styled-components';

function AddRow({active, addRow}){
  const [data, setData] = useState({
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address:{
      streetAddress: '',
      city: '',
      state: '',
      zip: '',
    },
    description: '',
  });
  const [activeButton, setActiveButton] = useState(false);
  const [error, setError] = useState('');
  const [activeField, setActiveField] = useState(false);

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setData({
      ...data, 
      [name]: value,
    });
    setError({
      ...error, 
      [name]: e.target.validationMessage,
    });
    setActiveButton(e.target.closest("form").checkValidity());
    return (setData, setError, setActiveButton);
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    addRow(data);
  }  

  const showForm = () =>{
    setActiveField(true)
  }  

  return(
    <Wrapper active={active} onSubmit={handleSubmit}>
      <ActiveFiealButton activeField={activeField} onClick={showForm}>Добавить строку</ActiveFiealButton>
      <Form activeField={activeField}>
        <InputContainer>
          <Input 
            type='number' 
            name='id'
            placeholder='Введите ID'
            required  
            onChange={handleChange} 
          />
          <Span>{error.id}</Span>
        </InputContainer>
        <InputContainer>
          <Input 
            type='text' 
            name='firstName'
            placeholder="Введите Имя" 
            required
            minLength="2"  
            onChange={handleChange} 
          />
          <Span>{error.firstName}</Span>
        </InputContainer>
        <InputContainer>
          <Input 
            type='text' 
            name='lastName'
            placeholder="Введите Фамилию" 
            required  
            minLength="2"  
            onChange={handleChange} 
          />
          <Span>{error.lastName}</Span>
        </InputContainer>
        <InputContainer>
          <Input 
            type='email' 
            name="email" 
            placeholder="Введите email" 
            required  
            onChange={handleChange} 
          />
          <Span >{error.email}</Span>
        </InputContainer>
        <InputContainer>
          <Input 
            type='text' 
            name="phone" 
            placeholder="Введите телефон" 
            required  
            onChange={handleChange} 
          />
          <Span >{error.phone}</Span>
        </InputContainer>
        <Button activeButton={activeButton}>Добавить</Button>
      </Form>
    </Wrapper>
  )
}

export default AddRow;

const Wrapper = styled.div`
  display: ${({active}) => active ? 'flex' : 'none'};
  margin: 30px 0;
  flex-wrap: wrap;
`;

const ActiveFiealButton = styled.button`
  display: ${({activeField}) => !activeField ? 'block' : 'none'};
`;

const Form = styled.form`
  display: ${({activeField}) => activeField ? 'block' : 'none'};
`;

const Input = styled.input`
  margin-right: 5px;
  min-height: 20px;
  width: 300px;
`;
const Span = styled.span`
  margin-right: 5px;
  height: 20px;
  overflow: hidden;
  max-width: 300px;
  color: #FF0000;
  font-size: 12px;
`;


const Button = styled.button`
  border: none;
  outline: none;
  border-radius: 10px;
  ${({activeButton}) => activeButton ? 'none' : 'disabled'};
  background-color: lightcoral;
  opacity: ${({activeButton}) => activeButton ? '1' : '0.5'};
  :hover{
    cursor: pointer;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;