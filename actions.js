import api from './services/api-spotify'

function setResults(results){
  return {
    type: 'SET_RESULTS',
    payload: results
  }
}

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

function setToken(token){
  return {
    type: 'SET_TOKEN',
    payload: token
  }
}

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
