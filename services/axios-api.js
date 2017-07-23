import axios from 'axios'
import utf8enc from 'crypto-js/enc-utf8'
import base64 from 'crypto-js/enc-base64'

class Api{

  id = '071685b2e4c94a71881fc852abda49a2'
  secret ='8f1195816a444290b1109097161c79b1'
  url = 'https://api.spotify.com'

  get_token(){

    const utf8Array = utf8enc.parse(this.id+':'+this.secret)
    const strBase64 = base64.stringify(utf8Array)
    const res = axios({
      method: 'post',
      headers:{
        'Content-Type':'application/x-www-form-urlencoded',
        'Authorization':`Basic ${strBase64}`
      },
      url: 'https://accounts.spotify.com/api/token',
      data: 'grant_type=client_credentials'
    })
    return res

  }

  get_data( query,token ){
    const res = axios({
      method: 'get',
      headers:{
        'Authorization':'Bearer ' + token
      },
      url: `${this.url}/v1/search/?q=${query}&type=artist,album,track`
    })
    return res
  }


}

export default new Api()
