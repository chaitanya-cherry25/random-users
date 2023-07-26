import React from 'react'

 const Allusers = ({users, setUserName}) => {

  return (
      <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)"}} >
        {
      users.length &&  users.map(e => {
          return(
            <div onClick={()=> setUserName(e.login.username)}>
            <img src={e.picture.large} />
            <h5>{e.login.username}</h5>
          </div>
          )
        })
        }
        
     
      </div>
  )
}
export default Allusers