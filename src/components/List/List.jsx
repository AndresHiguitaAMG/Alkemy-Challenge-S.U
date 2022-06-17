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
    }, []);

  return (
    <h1>Soy el componente List</h1>
  )
}

export default List;