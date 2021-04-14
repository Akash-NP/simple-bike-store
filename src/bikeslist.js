import React from 'react';

import axios from 'axios';


export default class BikesList extends React.Component {

  state = {
    bikes: []
  }

 

  componentDidMount() {
    
    axios.get(`http://localhost:3030/bikes`)
    
      .then(res => {
       
        const bikes = res.data;
       
        this.setState({ bikes });
      })
  }

  

  render() {
    return (
      <ul>
        
        { this.state.bikes.map(bike => <li>{bike.name}</li>)}
      </ul>
    )
  }
}