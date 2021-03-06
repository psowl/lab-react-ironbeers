import axios from 'axios';
import React from 'react';
import Navbar from './Navbar';

class NewBeer extends React.Component {

state = {
  name: "",
  tagline: "",
  description:"",
  first_brewed:"",
  brewers_tips:"",
  attenuation_level:"",
  contributed_by:""
}

handleChange=(event)=>{
  const {name, value} = event.target;
  this.setState({
    [name]:value
  })
}

handleFormSubmit=(event)=> {
  event.preventDefault();
  const {name, tagline, description, first_brewed, brewers_tips,attenuation_level, contributed_by} = this.state
  axios.post('https://ih-beers-api2.herokuapp.com/beers/new',{name, tagline, description, first_brewed, brewers_tips,attenuation_level, contributed_by})
  .then(responseFromApi=>{
    this.setState({
      name: "",
      tagline: "",
      description:"",
      first_brewed:"",
      brewers_tips:"",
      attenuation_level:"",
      contributed_by:""
    })
    this.props.history.push('/beers')
  })
}



render() {
  return (
    <div>
    <Navbar/>
      <form onSubmit={this.handleFormSubmit}>
      <label>Name</label>
        <input type="text" name="name" value={this.state.name} onChange={ e => this.handleChange(e)}/>
      <label>Tagline:</label>
        <input type="text" name="tagline" value={this.state.tagline} onChange={ e => this.handleChange(e)}/>
      <label>Description:</label>
      <input type="text" name="description" value={this.state.description} onChange={ e => this.handleChange(e)}/>
    
      <label>First Brewed:</label>
      <input type="text" name="first_brewed" value={this.state.first_brewed} onChange={ e => this.handleChange(e)}/>
    
      <label>Brewers tips:</label>
      <input type="text" name="brewers_tips" value={this.state.brewers_tips} onChange={ e => this.handleChange(e)}/>
    
      <label>Attenuation level:</label>
      <input type="number" name="attenuation_level" value={this.state.attenuation_level} onChange={ e => this.handleChange(e)}/>
    
      <label>Contributed by:</label>
      <input type="text" name="contributed_by" value={this.state.contributed_by} onChange={ e => this.handleChange(e)}/>
    
      <button>Submit</button>

      </form>
    </div>
  )
}  
}

export default NewBeer;