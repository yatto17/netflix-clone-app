import React from 'react';

import './App.css';
import { Banner } from './components/Banner';
import { Nav } from './components/Nav';
import { Row } from './components/Row';
import { requests } from './request';


function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGUINALS"
        fetchUrl={requests.feachNetflixOriginals}
        isLargeRow
      />
      <Row title="Top Rated" fetchUrl={requests.feactTopRated} />
      <Row title="Action &amp; Adventure" fetchUrl={requests.feactActionMovies} />
      <Row title="Comedy" fetchUrl={requests.feactComedyMovies} />
      <Row title="Mystery" fetchUrl={requests.feactMysteryMovies} />
      <Row title="Animation" fetchUrl={requests.feactAnimationMovies} />
      <Row title="Documentaries" fetchUrl={requests.feactDocumentMovies} />
      <Row title="Family" fetchUrl={requests.feactFamilyMovies} />
    </div>
  );
}

export default App;
