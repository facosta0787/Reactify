import api from './services/api-spotify'
import api_axios from './services/axios-api'

function setResults(results){
  return {
    type: 'SET_RESULTS',
    payload: results
  }
}

/*
//with isomorphic-fetch
function loadResults(query){
  return async (dispatch,getState) =>{
    const state = getState()
    const results = await api.getData(query,state.token)
    dispatch(
      setResults(results)
    )
    return results
  }
}
*/

function loadResults(query){
  return async (dispatch,getState) =>{
    const state = getState()
    const results = await api_axios.get_data(query,state.token)
    dispatch(
      setResults(results.data)
    )
    return results.data
  }
}

function setToken(token){
  return {
    type: 'SET_TOKEN',
    payload: token
  }
}

/*
//with isomorphic-fetch
function loadToken(isServer = false){
  return async (dispatch) => {
    if(isServer){
    const auth = await api.getToken()
    dispatch(
      setToken(auth.access_token)
    )
    return auth.access_token
  }
 }
}
*/

function loadToken(isServer = false){
  return async (dispatch) => {
    if(isServer){
    const auth = await api_axios.get_token()
    console.log(auth)
    dispatch(
      setToken(auth.data.access_token)
    )
    return auth.data.access_token
  }
 }
}

function setPageMenu(page){
  return {
    type: 'SET_PAGEMENU',
    payload: page
  }
}

export default{
  loadResults,
  loadToken,

  setResults,
  setToken,
  setPageMenu
}
