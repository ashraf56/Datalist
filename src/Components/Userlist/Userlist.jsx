
import React, { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from '../../assets/download 2.png'
const Userlist = () => {

  let [users, Setuser] = useState([])
  useEffect(() => {
    const fetchuserData = async () => {
      try {
        const response = await fetch('https://602e7c2c4410730017c50b9d.mockapi.io/users');
        if (!response.ok) {
          throw new Error(' response is not ok');

        }
        const data = await response.json();

        Setuser(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchuserData();
  }, []);

  return (
    <div className='mx-5'>

      <div className='my-5 overflow-y-scroll position-relative ' style={{ height: '500px' }}>
        <ListGroup  >


          <ListGroup.Item >
            <h1>Users</h1>
          </ListGroup.Item>


        </ListGroup>
        {
          users.length != 0 ? (users.map(u => (
            <div className="flex-column " key={u.id}>
              <ListGroup  >

                <Link to={`/${u.id}`} className='list-style-none  text-decoration-none'>
                  <ListGroup.Item >
                    <img src={img || users?.avatar} className=" img-fluid " style={{ width: '53px', height: '50px' }} />
                    <span className='fw-bold ps-2'> {u?.profile?.firstName}</span>
                  </ListGroup.Item>
                </Link>

              </ListGroup>


            </div>
          )

          )) :
            <div class="d-flex justify-content-center">
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
        }
      </div>

    </div>
  );
};

export default Userlist;