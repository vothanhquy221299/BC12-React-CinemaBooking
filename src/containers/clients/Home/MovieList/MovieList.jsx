import movieApi from "apis/movieApi";
import Loader from "components/Loader/Loader";
import React, { Component } from "react";
import { actFetchAllMovie } from "../module/action";
import {connect} from 'react-redux';
import MovieItem from "../MovieItem/MovieItem";
import "./MovieList.scss";

class MovieList extends Component {

  render() {
    const {loading, listMovie, currentMovies, comingMoives} = this.props;
    if(loading) return <Loader/>
    return (
      <div className="container movieList">
        <p className="my-5">
          <span className="mx-4">Đang chiếu</span>
          <span className="mx-4">Sắp chiếu</span>
        </p>
        <div className="row">
            {listMovie.map(movie =>{
              return <MovieItem movie={movie} key={movie.maPhim}/>
            })}
        </div>
      </div>
    );
  }
  componentDidMount(){
    movieApi.fetchAllMovieApi()
    .then(res =>{
      this.props.fetchAllMovie(res.data);
      // console.log(res);
    })
    .catch(err =>{
      console.log(err);
    })
  }
}
const mapStateToProps = state =>({
  listMovie: state.movieListReducer.listMovie,
  loading: state.movieListReducer.loading
})
const mapDispatchToProps = dispatch =>({
  fetchAllMovie: listMovie =>{
    dispatch(actFetchAllMovie(listMovie));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieList)