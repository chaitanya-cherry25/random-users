import React from 'react'
import { useState } from 'react'
import { AiOutlineSearch } from "react-icons/ai"
import Details from './details'
import Allusers from './allusers'
import { useEffect } from 'react';

const Fetchusers = () => {




  const [data, setData] = useState([]);

  const [userName, setUserName] = useState("");
 const [userDetails, setUserDetails] = useState({});



  const fetchData = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/?results=30');
      const jsonData = await response.json();
      setData(jsonData.results);
      console.log(jsonData);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if(userName){
      const x = data.find(e => e.login.username == userName)
      console.log(x);
      if(x) setUserDetails(x);
    }     
  },[userName])

  return (
    <div className='mainbody'>

      <div>
        <input onChange={e=> setUserName(e.target.value)} type='text' placeholder='Enter username' />
      </div>
      <div>

      </div>
      <Details users={userDetails} />
      <Allusers users={data} setUserName={setUserName} />
    </div>
  )
}
export default Fetchusers
