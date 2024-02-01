import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const Formdata = ({show,handleClose,user}) => {

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
try {
  if (data) {
    localStorage.setItem('userInfo',JSON.stringify(data))
    alert('data stord')
    reset()
  }
} catch (error) {
  console.log(error);
}

  }

  return (
    <div>
<Modal show={show} >
        <Modal.Header >
          <Modal.Title>Modal heading</Modal.Title>
          <Button  onClick={handleClose} variant='dark'>
            X
          </Button>
        </Modal.Header>
        <Modal.Body>

        <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter your email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" {...register("email")} required/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Show Name</Form.Label>
        <Form.Control type="name" defaultValue={user?.name} placeholder="Password" {...register("name")} readOnly/>
      </Form.Group>
     
      <Button variant="dark" type="submit">
        Book now
      </Button>
    </Form>

        </Modal.Body>
      
      </Modal>
    </div>
  );
};

export default Formdata;