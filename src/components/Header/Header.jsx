import React from 'react';
import Navbar from '../Navbar/Navbar';
import SearchForm from '../SearchForm/SearchForm';
import './Header.css';

const Hearder = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className="header-content flex flex-c text-center text-white">
                <h2 className="header-title text-capitalize">find your book choice</h2><br/>
                <p className="header-text fs-18 fw-3">
                Lorem ipsum dolor sit amet
                    consectetur adipisicing elit.
                    Culpa distinctio sint possimus ea,
                    quibusdam enim repudiandae illo mollitia
                    perferendis, eum, est sit. Aut repudiandae 
                    atque vel eligendi nisi omnis accusantium!
                </p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
};

export default Hearder;
