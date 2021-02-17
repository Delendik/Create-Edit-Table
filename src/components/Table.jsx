import styled from 'styled-components';
import SortButton from './SortButton';
import NewRow from './NewRow';
import { useState } from 'react';

function Table({data, active, currentPage, openRow}) {
  const [field, setField] = useState('')
  const [toggleSort, setToggleSort] = useState(true);

  function sortByField(field) {
    if(toggleSort){
      return (a, b) => a[field] > b[field] ? 1 : -1;
    }
    return (a, b) => a[field] > b[field] ? -1 : 1;
  };

  let dataForDisplay = data.slice((currentPage-1)*50, currentPage*50)
  dataForDisplay.sort(sortByField(field));
  
  return(
    <Wrapper active={active}>
      <THEAD>
        <TR>
          <TH>ID <SortButton value={'id'} onClick={setField} setToggleSort={setToggleSort} toggleSort={toggleSort} /> </TH>
          <TH>First Name <SortButton value={'firstName'} onClick={setField} setToggleSort={setToggleSort} toggleSort={toggleSort} /> </TH>
          <TH>Last Name <SortButton value={'lastName'} onClick={setField} setToggleSort={setToggleSort} toggleSort={toggleSort} /> </TH>
          <TH>Email <SortButton value={'email'} onClick={setField} setToggleSort={setToggleSort} toggleSort={toggleSort} /> </TH>
          <TH>Phone <SortButton value={'phone'} onClick={setField} setToggleSort={setToggleSort} toggleSort={toggleSort} /> </TH>
          <TH>Address <SortButton value={'address'} onClick={setField} setToggleSort={setToggleSort} toggleSort={toggleSort} /> </TH>
          <TH>Description <SortButton value={'description'} onClick={setField} setToggleSort={setToggleSort} toggleSort={toggleSort} /> </TH>
        </TR>
      </THEAD>
      <TBODY>
        {
          dataForDisplay.map(data=><NewRow key={`${data.id}-${data.firstName}-${data.lastName}`} {...data} openRow={openRow}/>)
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

const TR = styled.tr`

`;

const TH = styled.th`
  width:150px;
  height:50px;
  background-color:lightblue;
`;