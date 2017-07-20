import React, { Component } from 'react'
import axios from 'axios'
import api from '../services/axios-api'

class HomePage extends Component {

  constructor(props){
    super(props)
    this.url = 'https://jsonplaceholder.typicode.com/posts'
  }

  async componentDidMount() {
      const data = await api.getData()
      if( data.status !== 200 ){

        return console.error('Error', data)

      }
       return console.log('Data',data)

  }

  render() {
    return (
      <div>Testing Axios</div>
    );
  }

}

export default HomePage
