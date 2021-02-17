import styled from 'styled-components';

function NewRow({id, firstName, lastName, email, phone, address, description, openRow}) {
  const handleClick = () =>{
    openRow({id, firstName, lastName, email, phone, address, description})
  }
  
  return(
    <Wrapper onClick={handleClick}>
      <TH>{id}</TH>
      <TH>{firstName}</TH>
      <TH>{lastName}</TH>
      <TH>{email}</TH>
      <TH>{phone}</TH>
      <TH>{`${address.streetAddress}, ${address.city}, ${address.state}, ${address.zip}`}</TH>
      <TH>{description}</TH>
    </Wrapper>
  )
  
}

export default NewRow;

const Wrapper = styled.tr``;

const TH = styled.th`
  min-height:50px;
  background-color:lightblue;
`;