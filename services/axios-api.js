import axios from 'axios'
import utf8enc from 'crypto-js/enc-utf8'
import base64 from 'crypto-js/enc-base64'

class Api{

  id = '071685b2e4c94a71881fc852abda49a2'
  secret ='8f1195816a444290b1109097161c79b1'
  url = 'https://jsonplaceholder.typicode.com/posts'

  getData = () => {
      return axios.get(this.url)
      .then(function (response) {
        return response
      })
      .catch(function (error) {
        return error
      })
  }


}

export default new Api()
