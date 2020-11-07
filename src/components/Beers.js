import React from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import {Link} from 'react-router-dom'

class Beers extends React.Component {
  constructor(){
    super();
    this.state = { AllBeers: [] };
}

getAllBeers= () =>{
  axios.get(`https://ih-beers-api2.herokuapp.com/beers`)
  .then(responseFromApi => {
    console.log("responseFromApi",responseFromApi )
    this.setState({
      AllBeers: responseFromApi.data
    })
  })
}

componentDidMount() {
  this.getAllBeers();
}

render() {
  
  return (
    <div className="beerslist">
      <Navbar/>

      
        {this.state.AllBeers.map(el=> {
          return (
            <div key= {el._id}>
            <img src={el.image_url} style={{width:"100px"}} alt=""></img>
            <Link to={`/beers/${el._id}`}>
            <h2>{el.name}</h2>
            </Link>
            <h3>{el.tagline}</h3>
            <p>Created by:{el.contributed_by}</p>
            
            </div>

          )})
        }
      
    </div>
  )
}  
}

export default Beers;