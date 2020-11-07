import React from 'react';
import Navbar from './Navbar';
import axios from 'axios';


class BeersDetails extends React.Component {
  constructor(){
    super();
    this.state = {
      oneBeer: null
    };
}

getoneBeer= () =>{
  const { params } = this.props.match;
  axios.get(`https://ih-beers-api2.herokuapp.com/beers/${params.id}`)
  .then(responseFromApi => {
    console.log("responseFromApi",responseFromApi )
    this.setState({
      oneBeer: responseFromApi.data
    })
  })
}

componentDidMount() {
  this.getoneBeer();
}

render() {
  console.log(this.state.oneBeer)

  if (!this.state.oneBeer) return (<p>'loading..'</p>)

  return (
    <div className="oneBeer">
      <Navbar/>

      <img src={this.state.oneBeer.image_url} style={{width:"100px"}} alt=""></img>
      <h2>{this.state.oneBeer.name}</h2>
    
      <h3>{this.state.oneBeer.tagline}</h3>
      <p>{this.state.oneBeer.first_brewed}</p>
      <p>{this.state.oneBeer.attenuation_level}</p>
      <p>{this.state.oneBeer.description}</p>
      <p>{this.state.oneBeer.contributed_by}</p>

      
         
      
    </div>
  )
}  
}

export default BeersDetails;
