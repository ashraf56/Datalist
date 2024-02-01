import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Button, Form, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Modals from '../Modal/Modals';

const DataDetail = () => {  
  const [selectedTask, setSelectedTask] = useState(null);
  const [show, setShow] = useState(false);
  let user = useLoaderData()
  const handleClose = () => setShow(false);
  const handleShow = () => {
    
    setShow(true)
  };
const openModal = (movie) => {
    setSelectedTask(movie);
   handleShow()
   
  };
 
  
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

          <div className="card mb-3 h-100 ">
            <div className="row g-0">
              <div className="col-md-4 align-items-center justify-item-center text-center py-5">
                <h1 className='justify-content-center'>{user?.name}</h1>
                <h3 className='display-6'>{user?.type}</h3>
                <h5 >{user?.language}</h5>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className='fs-6'>{user?.ended}</h5>
                  <p className="card-text">{user?.summary}</p>
                  <p className="card-text"><small className="text-body-secondary">{user?.runtime || 0} min</small></p>
                  <Button variant="primary" onClick={()=>openModal(user)} >
                    Book
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

      }
 <Modals show={show} selectedTask={selectedTask} handleClose={handleClose}></Modals>
    </div>
  );
};

export default DataDetail;