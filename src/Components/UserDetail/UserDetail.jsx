import React from 'react';
import { useLoaderData } from 'react-router-dom';
import img from '../../assets/download 2.png'
const UserDetail = () => {
    let user=useLoaderData()
    console.log(user);
    
  if (!user) {
    return <div>Loading...</div>;
  }

  if (user.error) {
    if (user.error.response && user.error.response.status === 429) {
     
      return <div className='fw-bold text-center'>Too many requests. Please try again later.</div>;
    }

    
    return <div className='fw-bold text-center'>Error loading data: {user.error.message}</div>;
  }

    return (
        <div>
            <h1 className='text-uppercase card px-2 text-center'>User details</h1>
           {
          !user  ? 'loading..' :
                <div>

                   <div className="card shadow-lg " style={{height:'400px'}} >
  
  <div className="card-body align-items-center justify-content-evenly">
     <img src={img || user?.avatar} className=" img-fluid " style={{width:'153px', height:'138px'}}/>

<div>

   <h5 className="card-title pt-3 ps-3 fw-bold">{user?.profile?.firstName} {user?.profile?.lastName } </h5>
   <ul className="list-group list-group-flush ">
    
   <li className="list-group-item"> <span className='fw-bold pe-1'>Bio:</span> {user?.Bio  }</li>
   <li className="list-group-item"><span className='fw-bold pe-1'>JobTitle:</span>{user?.jobTitle}</li>
   <li className="list-group-item"><span className='fw-bold pe-1'>Email:</span>{user?.profile?.email}</li>
   <li className="list-group-item"><span className='fw-bold pe-1'>username:</span>{user?.profile?.username}</li>  
 </ul>
    </div>   
  </div>
</div>
                </div>
         
           }
        </div>
    );
};

export default UserDetail;