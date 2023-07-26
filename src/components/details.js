import React from 'react'

 const Details = ({users}) => {

  const keys = Object.keys(users)
  console.log(keys)
  return (
    <div>
       { 
                keys.length && <div>
                        <div><img src={users.picture.large}/></div>
                        <div>
                            <h5>Name : {users.name.first} {users.name.last}</h5>
                            <h5>Email: {users.email}</h5>
                        </div>
                        <div>
                         <h5>Dob : {users.dob.date.split("T")[0]}</h5>
                         <h5>Address : {users.location.country}</h5>
                        </div>
                      </div>
                }
    </div>
  )
}

export default Details;
