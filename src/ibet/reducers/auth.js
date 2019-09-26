const INITIAL_STATE ={
    token: null,
    error: null, 
    loading: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'AUTH_START':
        return {...state, error: null, loading: true};
      case 'AUTH_SUCCESS':
        return {...state, token: action.token, error: null, loading: false};
      case 'AUTH_FAIL':
        return {...state, error: action.error, loading: false};
      case 'AUTH_LOGOUT':
        return {...state, token: null};
      default:
        return state;
    }
  };
