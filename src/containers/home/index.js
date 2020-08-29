import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import Cards from '../../components/Cards';
import Headers from '../../components/Headers';

import { connect } from "react-redux";
import { fetchMovieAPI } from '../../redux/actions';


const Home = props => {
    const containersRef = useRef(null);
    const total = props.movie.length;
    const [limit, setLimit] = useState(5);
    const [current, setCurrent] = useState(0);
    const [fetch, setFetch] = useState(false);
    const movie = props.movie;

    // useEffect will run on containersRef value assignment
    useEffect( () => {

        // The 'current' property contains info of the reference:
        // align, title, ... , width, height, etc.
        if(containersRef.current){

            const height =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight
            console.log('height: ', props.movie.length);
            setCurrent(height);
            window.addEventListener('scroll', (e) => handleScroll(e, total, limit));
        }

        return () => window.addEventListener('scroll', (e) => handleScroll(e, total, limit));
        
    }, [containersRef, total, limit]);

    const handleScroll = (e, t, l) => {

       const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop
   
        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

       if (height <= winScroll) {
           console.log('total : ', t);
           console.log('limit : ', l);
            if (t < l){
                setFetch(true);
                setTimeout(() => {
                    setLimit(limit+5)
                    setFetch(false);
                }, 3000);
            }
            else setFetch(false);
       }
    };

    return (
        <>
            <div className="container" ref={containersRef}>
                <div className="d-flex justify-content-center row pt-5">
                    {props.movie.length != 0 && props.movie.slice(0,limit).map((v, k) => (
                        <Cards title={v.Title} img={v.Poster} idx={v.imdbID} type={v.Type} />
                    ))}
                </div>
                {fetch && <span>loading..</span>}
            </div>
        </>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
      search: (s, page) => dispatch(fetchMovieAPI(s, page)),
    };
}

export default connect(null, mapDispatchToProps)(Home);