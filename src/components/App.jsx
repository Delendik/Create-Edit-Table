import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getSmallData, getBigData} from '../utils/Api';
import Table from './Table';

function App() {
  const [smallData, setSmallData] = useState([]);
  const [bigData, setBigData] = useState([]);

  useEffect(() =>{
    getSmallData()
    .then(res=>{
      if(res){
        setSmallData(res)
      }
    })
    .catch(err =>{
      console.log('Ошибка:', err);
    });

    getBigData()
    .then(res=>{
      if(res){
        setBigData(res)
      }
    })
    .catch(err =>{
      console.log('Ошибка:', err);
    });
  }, []);

  return (
    <Wrapper>
      {/* <SelectButtons /> */}
      <Table smallData={smallData} bigData={bigData} active={true} />
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`

`;