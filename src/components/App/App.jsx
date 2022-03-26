import axios from 'axios';
import { useState, useEffect } from 'react';
import React from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList.jsx';

function App() {

  let [galleryList, setGalleryList] = useState([]);

  useEffect(() => {
    getList()
  }, [])

  const getList = () =>{
    console.log( 'In GET');

    axios.get('/gallery').then( response =>{
      setGalleryList(response.data)
      console.log( response.data );
    }).catch (err => {
      console.log( err );
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <div className="photo-gallery">
        <GalleryList
          key={galleryList.id}
          galleryList={galleryList}
        />
      </div>
      {/* <img src="" width="200" height="200"/>
      <img src="images/loralei2.jpg" width="200" height="200"/> */}
    </div>
  );
};

export default App;
