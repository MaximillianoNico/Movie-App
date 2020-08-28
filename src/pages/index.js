import React, { useEffect } from 'react';
import Cards from '../components/Cards';
import Headers from '../components/Headers';
import { connect } from "react-redux";
import { fetchMovieAPI } from '../redux/actions';

const Homepage = props => {
    useEffect(() => {
        // init movies
        props.search('Batman', 1);
    }, [])
    return (
        <>
            <Headers />
            <div className="container">
                <div className="d-flex justify-content-center row pt-5">
                    {props.movie.length != 0 && props.movie.map((v, k) => (
                        <Cards title={v.Title} img={v.Poster} idx={v.imdbID} type={v.Type} />
                    ))}
                </div>
            </div>
        </>
    )
};

const mapStateToProps = state => {
    return { movie: state.movie };
};

const mapDispatchToProps = (dispatch) => {
    return {
      search: (s, page) => dispatch(fetchMovieAPI(s, page)),
    };
  }
export default connect(mapStateToProps, mapDispatchToProps)(Homepage);