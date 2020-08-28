import React from 'react';
import Search from '../../assets/search-solid.svg';

export default ({}) => (
    <div className="container">
        <div className="row text-left pt-3">
          <div className="col-9" style={{ fontSize: 35 }}>Mext App</div>
          <div className="align-items-center col-3 d-flex justify-content-end">
            <img width="25" src={Search}/>
          </div>
        </div>
    </div>
)