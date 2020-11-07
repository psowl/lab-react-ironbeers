import React from 'react';
import Navbar from './Navbar';
import axios from 'axios';

class RandomBeer extends React.Component {

state = {
 
}

getRandomBeer =() => {
  axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
  .then(responseFromApi => {
    console.log("responseFromApi",responseFromApi.data )
    this.setState(responseFromApi.data)
  })
}

componentDidMount () {
 this.getRandomBeer();
}

render() {

  return (
    <div className="randomBeer">

    
      <Navbar/>

      

      <img src={this.state.image_url} style={{width:"100px"}} alt=""></img>
      <h2>{this.state.name}</h2>
    
      <h3>{this.state.tagline}</h3>
      <p>{this.state.first_brewed}</p>
      <p>{this.state.attenuation_level}</p>
      <p>{this.state.description}</p>
      <p>{this.state.contributed_by}</p>

      
    </div>
  )
}  
}

export default RandomBeer;
