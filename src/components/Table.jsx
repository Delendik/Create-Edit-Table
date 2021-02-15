import styled from 'styled-components';
import SortButton from './SortButton';
import NewRow from './NewRow';

function Table({data, active}) {

  return(
    <Wrapper active={active}>
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
          data.map(data=><NewRow key={`${data.id}-${data.firstName}-${data.lastName}`} {...data} />)
        }
      </TBODY>
    </Wrapper>
  );
};

export default Table;

const Wrapper = styled.table`
  display: ${({active}) => active ? 'table-cell' : 'none'};
`;

const THEAD = styled.thead``;

const TBODY = styled.tbody``;

const TR = styled.tr``;

const TH = styled.th`
  width:100px;
  height:50px;
  background-color:lightblue;
`;