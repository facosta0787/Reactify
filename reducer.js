expor const reducer = ( state  = initialState, action = {} ) => {
  switch (action.type) {
    case 'SET_RESULTS':
        return { ...state, results: action.payload }
      break;
    case 'SET_TOKEN':
        return { ...state, token: action.payload }
      break;
    default:
      return state

  }
}
