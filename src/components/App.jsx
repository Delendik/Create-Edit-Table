import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getSmallData, getBigData} from '../utils/Api';
import ClipLoader from "react-spinners/ClipLoader";
import Table from './Table';
import SelectButtons from './SelectButtons';

function App() {
  const [smallData, setSmallData] = useState([]);
  const [bigData, setBigData] = useState([]);
  const [isOpenTable, setIsOpenTable] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadindData = () => {
    Promise.all([
      getSmallData(),
      getBigData()
    ])
    .then(res=>{
      const [smallData, bigData] = res;
      if(res){
        setSmallData(smallData);
        setBigData(bigData)
      }
    })
    .catch(err =>{
      console.log('Ошибка:', err);
    })
    .finally(() =>
      {setLoading(false)}
    );
  }

  useEffect(() =>{
    loadindData();
  }, []);

  const openTable = (sizeOfTable) => {
    setIsOpenTable(true);
    if(sizeOfTable==='small'){
      setData(smallData);
    } else{
      setData(bigData);
    }
  }
  return (
    <Wrapper>
      <Loader isLoading={loading}> 
        <ClipLoader loading={loading} size={150} />
      </Loader>
      <SelectButtons openTable={openTable} isOpenTable={isOpenTable} />
      <Table data={data} active={isOpenTable} />
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`

`;

const Loader = styled.div`
  display: ${({isLoading}) => isLoading ?  'flex' : 'none'};
  justify-content: center;
  align-items:center;
  height: 100vh;
`;
