import React from 'react';
import swal from '@sweetalert/with-react';
import { useHistory } from 'react-router-dom';

const SearchBar = () => {
    const history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
        const keyword = e.currentTarget.keyword.value.trim();
        if (keyword.length === 0) {
            swal(<h5>Tienes que escribir una palabra clave</h5>);
        }
        else if (keyword.length < 4) {
            swal(<h5>Tienes que mas de 4 de caracteres</h5>);
        } else {
            e.currentTarget.keyword.value = "";
            history.push(`/results?keyword=${keyword}`);
        }
    }

  return (
    <form className='d-flex align-items-center' onSubmit={handleSubmit}>
        <label className='form-label mb-0 mx-2'>
            <input className='form-control' type={'text'} name={'keyword'} placeholder='Search...'/>
        </label>
            <button className='btn btn-success' type='submit'>Search</button>
    </form>
  )
}

export default SearchBar;