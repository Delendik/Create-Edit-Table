import styled from 'styled-components';

function SelectRow({selectRow, active}){
  const {id, firstName, lastName, email, phone, address, description} = selectRow;
  console.log(selectRow);
  return(
    <Wrapper active={active}>
      <P>Выбран пользователь <Span>{`${firstName} ${lastName}`}</Span></P>
      <P>Описание:</P>
      <Textarea value={description} />
      <P>Адрес проживания: <Span>{address.streetAddress}</Span> </P>
      <P>Город: <Span>{address.city}</Span></P>
      <P>Провинция/штат: <Span>{address.state}</Span></P>
      <P>Индекс: <Span>{address.zip}</Span></P>
    </Wrapper>
  )
}

export default SelectRow;

const Wrapper = styled.div`
  display: ${({active}) => active ? 'flex' : 'none'};
  flex-direction: column;
  margin: 30px 0;
`;

const P = styled.p``;

const Span = styled.span`
  font-weight: bold;
`;

const Textarea = styled.textarea``;