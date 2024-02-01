import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';

const Modals = ({show, handleClose, selectedTask}) => {


    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
      } = useForm()

    

      const onSubmits = (data) => {
      
      
        let tickets = JSON.parse(localStorage.getItem('tickets')) || [];

        // Create new ticket object
        let newTicket = {
          name: selectedTask?.name,
          language: selectedTask?.language,
          location: selectedTask?.network?.name, 
          email: data.email
        }
        // Add ticket to array
        tickets.push(newTicket);
      
        // Save updated tickets array
        localStorage.setItem('tickets', JSON.stringify(tickets));
        toast.success('success')
        reset()
      };
    
    
    return (
         <Modal show={show} onHide={handleClose}>
    <Modal.Header >
           <Modal.Title>Book your show now</Modal.Title>
           <Button onClick={handleClose} variant='dark'>
             X
           </Button>
         </Modal.Header>
         <Modal.Body>
 
         <form onSubmit={handleSubmit(onSubmits)}>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" placeholder='enter email' id="exampleInputEmail1" aria-describedby="emailHelp" {...register('email')}/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Movie name</label>
    <input type="text" className="form-control" id="exampleInputPassword1" defaultValue={selectedTask?.name} readOnly />
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">language</label>
    <input type="text" className="form-control" id="exampleInputPassword1" defaultValue={selectedTask?.language}  />
  </div>
  <div className="mb-3">
    <p className='fw-bold'><span>{selectedTask?.network?.name}</span> <br />  {selectedTask?.network?.country?.name} </p>
   
  </div>
 
  <button type="submit" className="btn btn-primary">Book now</button>
</form> 
 <Toaster/>
         </Modal.Body>
       </Modal>
    );
};

export default Modals;