import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
const DataDetail = () => {
  let user = useLoaderData()
  console.log(user);

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

<div class="card mb-3 ">
  <div class="row g-0">
    <div class="col-md-4 align-items-center justify-item-center text-center">
      <h1 className='justify-content-center'>{user?.name}</h1>
      <h3 className='display-6'>{user?.type}</h3>
      <h5 >{user?.language}</h5>
    </div>
    <div class="col-md-8">
      <div class="card-body">
       
        <p class="card-text">{user?.summary}</p>
        <p class="card-text"><small class="text-body-secondary">{user?.runtime || 0} min</small></p>
        <Link >
        <button className='btn btn-dark'>
          Book
        </button>
        </Link>
      </div>
    </div>
  </div>
</div>
        </div>

      }
    </div>
  );
};

export default DataDetail;