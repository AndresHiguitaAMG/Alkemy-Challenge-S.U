import { React, useHistory } from 'react-router-dom';
import { useEffect } from 'react';

const List = () => {
    const history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem("token");
        console.log(token)
        if (token === null) {
            history.push("/");
        }
    }, [history]);

  return (
    <div className="row">
      <div className="col-3" style={{border: '1px solid red'}}>Pelicula 1</div>
      <div className="col-3" style={{border: '1px solid red'}}>Pelicula 2</div>
      <div className="col-3" style={{border: '1px solid red'}}>Pelicula 3</div>
      <div className="col-3" style={{border: '1px solid red'}}>Pelicula 4</div>
    </div>
  )
}

export default List;