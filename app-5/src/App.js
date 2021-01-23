import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './Components/Image';

class App extends Component {

  render(){

    return(
      <div className='App'>
        <Image url={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhDa1rq7O4Qx523k1HaWisgIfm_Hw4yswmHA&usqp=CAU"} />
      </div>
    );
  }

}

export default App;
