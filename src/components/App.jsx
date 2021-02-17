import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getSmallData, getBigData} from '../utils/Api';
import ClipLoader from "react-spinners/ClipLoader";
import Table from './Table';
import SelectButtons from './SelectButtons';
import PageSlider from './PageSlider';
import FindForm from './FindForm';
import SelectRow from './SekectRow';

function App() {
  const [smallData, setSmallData] = useState([]);
  const [bigData, setBigData] = useState([]);
  const [isOpenTable, setIsOpenTable] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectRow, setSelectRow] = useState({});

  const calculatePages = (data) => {
    if(data.length<50){
      return
    } 
    setNumberOfPages(Math.ceil(data.length/50));    
  };
// console.log(numberOfPages)
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
      calculatePages(smallData);
    } else{
      setData(bigData);
      calculatePages(bigData);
    }
  }

  const nextPage = () => {
    setCurrentPage(currentPage+1);
  };

  const previousPage = () => {
    setCurrentPage(currentPage-1);
  };

  const lastPage = () => {
    setCurrentPage(numberOfPages);
  };

  const firstPage = () => {
    setCurrentPage(1);
  };

  const findInfo = (searchText) => {
    var sortArray = []
    data.forEach((item) => { 
      if(Object.values(item).includes(searchText)){
        sortArray.push(item)
      }
    })
    setData(sortArray)
  }

  const openRow = (data) => {
    setSelectRow(data);
  };

  return (
    <Wrapper>
      <Loader isLoading={loading}> 
        <ClipLoader loading={loading} size={150} />
      </Loader>
      <FindForm findInfo={findInfo} active={isOpenTable}/>
      <SelectButtons openTable={openTable} isOpenTable={isOpenTable} isLoading={loading} />
      <PageSlider numberOfPages={numberOfPages} active={isOpenTable} currentPage={currentPage} nextPage={nextPage} previousPage={previousPage} lastPage={lastPage} firstPage={firstPage} />
      <Table data={data} active={isOpenTable} currentPage={currentPage} openRow={openRow} />
      <PageSlider numberOfPages={numberOfPages} active={isOpenTable} currentPage={currentPage} nextPage={nextPage} previousPage={previousPage} lastPage={lastPage} firstPage={firstPage} />
      <SelectRow selectRow={selectRow} active={isOpenTable} />
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Loader = styled.div`
  display: ${({isLoading}) => isLoading ?  'flex' : 'none'};
  justify-content: center;
  align-items:center;
  height: 100vh;
  overflow: hidden;
  position: absolute;
  top: 0;
	left: 0;
	right: 0;
	bottom: 0;
`;

