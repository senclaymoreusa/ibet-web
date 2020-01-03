const INITIAL_STATE = {
    token: null,
    user: null,
    error: null,
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'AUTH_START':
            return { ...state, error: null, loading: true, user: null };
        case 'AUTH_SUCCESS':
            return {
                ...state,
                token: action.token,
                error: null,
                loading: false
            };
        case 'AUTH_GET_USER':
            return {
                ...state,
                user: action.user
            };
        case 'AUTH_FAIL':
            return {
                ...state,
                error: action.error,
                token: null,
                loading: false,
                user: null
            };
        case 'AUTH_LOGOUT':
            return {
                ...state,
                token: null,
                error: null,
                loading: false,
                user: null
            };
        default:
            return state;
    }
};
