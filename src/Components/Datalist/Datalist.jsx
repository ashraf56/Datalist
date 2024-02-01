
import React, { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Datalist = () => {

  let [users, Setuser] = useState([])
  useEffect(() => {
    const fetchuserData = async () => {
      try {
        const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
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
    <div className=''>
      <ListGroup  >


        <ListGroup.Item className='mt-5' >
          <h1 className='text-uppercase  px-2 text-center fs-6 '>All shows</h1>
        </ListGroup.Item>


      </ListGroup>
      <div className=' overflow-y-scroll  ' style={{ height: '500px' }}>

        {
          users.length != 0 ? (users.map(u => (
            <div className="flex-column " key={u?.show?.id}>
              <ListGroup  >

                <Link to={`/${u?.show?.id}`} className='list-style-none  text-decoration-none'>
                  <ListGroup.Item >
                    {/* if api image not working then img will show */}
                    <img src={u?.show?.image?.original} className=" img-fluid " style={{ width: '53px', height: '50px' }} />
                    <span className='fw-bold ps-2'> {u?.show?.name}</span>
                  </ListGroup.Item>
                </Link>

              </ListGroup>


            </div>
          )

          )) :
            <div className="d-flex justify-content-center mt-5">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
        }
      </div>

    </div>
  );
};

export default Datalist;