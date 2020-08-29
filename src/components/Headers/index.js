import React, { useState } from 'react';
import Search from '../../assets/search-solid.svg';

import { fetchMovieAPI } from '../../redux/actions';
import { connect } from "react-redux";

const Header = props => {
  const [show, setShow] = useState(false);
  const [searchMovie, setSearchMovie] = useState('');

  const _onKeyDown = e => {
    if(e.key === 'Enter'){
      searchMovie !== '' && props.search(searchMovie, 1);
    }
  }
  return (
    <div className="container">
        <div className="row text-left pt-3">
          <div className="col-9" style={{ fontSize: 35 }}>Mext App</div>
          <div onClick={() => setShow(!show)} className="align-items-center col-3 d-flex justify-content-end">
            <img width="25" src={Search}/>
          </div>
        </div> 
        {show && (
          <div className="mt-3">
            <input
              onKeyDown={_onKeyDown}
              placeholder="ex. batman"
              onChange={e => setSearchMovie(e.target.value)}
              style={{ width: '100%', borderWidth: '0 0 2px', outline: 0, height: '50px', fontSize: 25}} />
          </div>
        )}
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    search: (s, page) => dispatch(fetchMovieAPI(s, page)),
  };
}

export default connect(null, mapDispatchToProps)(Header);