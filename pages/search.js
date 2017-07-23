import React, { Component } from 'react'
import axios from 'axios'
import api from '../services/axios-api'

class SearchPage extends Component {

  static async getInitialProps(){

      const token = await api.get_token()
      console.log(token)


  }

  render() {
    return (
      <div>Testing Axios</div>
    )
  }

}

export default SearchPage
