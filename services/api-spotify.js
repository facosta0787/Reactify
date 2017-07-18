import client from './client-data'
import fetch from 'isomorphic-fetch'
import utf8enc from 'crypto-js/enc-utf8'
import base64 from 'crypto-js/enc-base64'

class ApiSpotify{

  baseURL = 'https://api.spotify.com'

  async getToken(){

    const utf8Array = await utf8enc.parse(client.id+':'+client.secret)
    const strBase64 = await base64.stringify(utf8Array)
    const options = {
        method:'POST',
        headers:{
          'Content-Type':'application/x-www-form-urlencoded',
          'Authorization':`Basic ${strBase64}`
        },
        body:'grant_type=client_credentials'
    }
    const response = await fetch(`https://accounts.spotify.com/api/token`,options)
    const data = await response.json();
    return data
  }

  async getData(query,token){
    const options = {
        method:'GET',
        headers:{
          'Authorization':'Bearer ' + token
        }
    }
    const response = await fetch(`${this.baseURL}/v1/search/?q=${query}&type=artist,album,track`,options)
    const data = await response.json()
    return data
  }

}

export default new ApiSpotify()
