import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Formdata from '../Form/Formdata';
import { Button } from 'react-bootstrap';

const DataDetail = () => {
  const [show, setShow] = useState(false);
let user = useLoaderData()
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
let handleMovie= ()=>{
setShow(user)
}
  


  if (!user) {
    return <div className='fw-bold text-center'> Please select any profile</div>;
  }

  if (user.error) {
    if (user.error.response && user.error.response.status === 429) {

      return <div className='fw-bold text-center'>Too many requests. Please try again later.</div>;
    }
    return <div className='fw-bold text-center'>Error loading data: {user.error.message}</div>;
  }

  return (
    <div className='shadow-lg'>
      {

        <div>

          <div class="card mb-3 h-100 ">
            <div class="row g-0">
              <div class="col-md-4 align-items-center justify-item-center text-center py-5">
                <h1 className='justify-content-center'>{user?.name}</h1>
                <h3 className='display-6'>{user?.type}</h3>
                <h5 >{user?.language}</h5>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 className='fs-6'>{user?.ended}</h5>
                  <p class="card-text">{user?.summary}</p>
                  <p class="card-text"><small class="text-body-secondary">{user?.runtime || 0} min</small></p>
                  <Button variant="primary" onClick={handleShow} >
       Book
      </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

      }
      <Formdata show={show} handleClose={handleClose} user={user}/>
    </div>
  );
};

export default DataDetail;