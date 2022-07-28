import React from "react";

const Fauvorites = (props) => {
    
    return (
        <>
        <div className="row">
            {
                !props.fauvorites.length && <div className="col-12 text-danger">No fauvorites</div> 
            }
        {
          props.fauvorites.map((favsMovies, index) => {
            return (
              <div className="col-3" key={index}>
                <div className="card my-4">
                  <img src={favsMovies.imgURL} className="card-img-top" alt="alternative"/>
                  <button
                  className='favourite-btn' 
                  onClick={props.addOrRemoveFromFavs}
                  data-movie-id={favsMovies.id}
                  >
                  🖤</button>
                <div className="card-body">
                  <h5 className="card-title">{favsMovies.elementTitle.substring(0,30)}...</h5>
                  <p className="card-text">{favsMovies.elementOverView.substring(0, 110)}...</p>
                  {/* <Link to={`/detail?movieId=${favsMovies.id}`} className="btn btn-primary">Go somewhere</Link> */}
                </div>
              </div>
            </div>
            )
          })
        }
      </div>
        </>
    )
}

export default Fauvorites