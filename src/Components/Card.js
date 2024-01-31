import React from 'react';
import { Link } from 'react-router-dom';

function Card(props) {
  return (
    <>
      <div className="card" style={{ width: '18rem', textAlign: 'center' }}>
        <img
          src={props.img_url}
          className="card-img-top rounded-circle mx-auto mt-3"
          alt="Not Found"
          style={{ width: '100px', height: '100px' }}
        />
        <div className="card-body">
          <p className="card-text">{props.desc}</p>
          <Link to="/product" className="btn btn-danger">
            {props.btn}
          </Link>
        </div>
      </div>
    </>
  );
}

export default Card;
