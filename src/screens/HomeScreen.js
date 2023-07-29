import React from 'react';
import './HomeScreen.css';
import Nav from '../component/Nav.js';
import Banner from '../component/Banner';
import requests from '../function/Request';
import Row from '../component/Row.js';

function HomeScreen() {
  return (
    <div className="homeScreen">
      {/*Navbar */}
      <Nav />
      {/*Banner */}
      <Banner />
      {/*Collection Row */}
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries Movies" fetchUrl={requests.fetchDocumentariesMovies} />
    </div>
  );
}

export default HomeScreen;
