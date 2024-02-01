
import React, { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from '../../assets/download 2.png'
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
    <div className='mx-5 my-5'>
      <ListGroup  >


        <ListGroup.Item className='' >
          <h1 className='text-uppercase  px-2 text-center '>Users</h1>
        </ListGroup.Item>


      </ListGroup>
      <div className=' overflow-y-scroll  ' style={{ height: '400px' }}>

        {
          users.length != 0 ? (users.map(u => (
            <div className="flex-column " key={u?.show?.id}>
              <ListGroup  >

                <Link to={`/${u?.show?.id}`} className='list-style-none  text-decoration-none'>
                  <ListGroup.Item >
                    {/* if api image not working then img will show */}
                    <img src={u?.show?.image?.medium} className=" img-fluid " style={{ width: '53px', height: '50px' }} />
                    <span className='fw-bold ps-2'> {u?.show?.averageRuntime}</span>
                  </ListGroup.Item>
                </Link>

              </ListGroup>


            </div>
          )

          )) :
            <div class="d-flex justify-content-center mt-5">
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
        }
      </div>

    </div>
  );
};

export default Datalist;