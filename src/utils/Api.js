
const SMALL_DATA_URL = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
const BIG_DATA_URL = 'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';

export const getSmallData = () =>{
  return fetch(`${SMALL_DATA_URL}`, {
    method: 'GET',
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  })
  .then((res => {
    if(!res.ok){
      return Promise.reject({
        status:res.status,
      })
    }
    return res.json();
  }));
};

export const getBigData = () =>{
  return fetch(`${BIG_DATA_URL}`, {
    method: 'GET',
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  })
  .then((res => {
    if(!res.ok){
      return Promise.reject({
        status:res.status,
      })
    }
    return res.json();
  }));
};