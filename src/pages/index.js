import React, { useEffect } from 'react';
import Cards from '../components/Cards';
import Headers from '../components/Headers';
import Home from '../containers/home';
import { connect } from "react-redux";
import { fetchMovieAPI } from '../redux/actions';

const Homepage = props => {
    useEffect(() => {
        // init movies
        props.search(props.s, 1);
    }, []);
    
    return (
        <>
            <Headers />
            <Home {...props} />
        </>
    )
};

const mapStateToProps = state => {
    return { movie: state.movie, s: state.s, page: state.page };
};

const mapDispatchToProps = (dispatch) => {
    return {
      search: (s, page) => dispatch(fetchMovieAPI(s, page)),
    };
  }
export default connect(mapStateToProps, mapDispatchToProps)(Homepage);