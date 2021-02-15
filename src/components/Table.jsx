import styled from 'styled-components';
import SortButton from './SortButton';
import NewRow from './NewRow';

function Table({smallData, bigData, active}) {
  
  return(
    <Wrapper>
      <THEAD>
        <TR>
          <TH>ID <SortButton/> </TH>
          <TH>First Name</TH>
          <TH>Last Name</TH>
          <TH>Email</TH>
          <TH>Phone</TH>
          <TH>Address</TH>
          <TH>Description</TH>
        </TR>
      </THEAD>
      <TBODY>
        {
          smallData.map(data=><NewRow key={data.id} {...data} />)
        }
      </TBODY>
    </Wrapper>
  );
};

export default Table;

const Wrapper = styled.table`

`;

const THEAD = styled.thead``;

const TBODY = styled.tbody``;

const TR = styled.tr``;

const TH = styled.th`
  width:100px;
  height:50px;
  background-color:lightblue;
`;