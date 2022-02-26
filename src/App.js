import './App.scss';
import React from 'react';
import Nav from './components/Nav/Nav';
import VideoHero from './components/VideoHero/VideoHero';
import VideoArticle from './components/VideoArticle/VideoArticle.js';
import VideoList from './components/VideoList/VideoList';


class App extends React.Component {


  render() {
    return (
      <>
        <Nav />
        <VideoHero />
        <VideoArticle />
        <VideoList />
      </>
    );
  }
}

export default App;
