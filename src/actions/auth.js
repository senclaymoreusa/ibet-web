import axios from 'axios';
import { config } from '../util_config';
import { errors } from '../ibet/components/errors';
import { IP_ACCESS } from '../ip_access';

//const API_URL = process.env.REACT_APP_REST_API;
//const API_URL = 'http://52.9.147.67:8080/';
const API_URL = process.env.REACT_APP_DEVELOP_API_URL;

export const AUTH_RESULT_SUCCESS = 0;
export const AUTH_RESULT_FAIL = 1;

export const authStart = () => {
    return {
        type: 'AUTH_START'
    };
};

export const authSuccess = token => {
    return {
        type: 'AUTH_SUCCESS',
        token: token
    };
};

export const authGetUser = user => {
    return {
        type: 'AUTH_GET_USER',
        user: user
    };
};

export const authFail = error => {
    return {
        type: 'AUTH_FAIL',
        error: error
    };
};

export const checkAccess = (ip, country) => {
    var ipAccess = true;
    var countryAccess = true;
    console.log("HIHI");
    if (country && country !== ('CN' || 'TH' || 'VN')) {
        console.log("country is not allow");
        countryAccess = false;
    }

    if (ip && !IP_ACCESS.includes(ip)) {
        console.log("ip is not allow");
        ipAccess = false;
    }

    return countryAccess && ipAccess;
   
}

export const authLogin = (username, password, iovationData) => {
    return dispatch => {
        dispatch(authStart());
        return axios
            .post(
                API_URL + 'users/api/login/',
                {
                    username: username,
                    password: password,
                    iovationData: iovationData
                },
                config
            )
            .then(res => {
                if (res.data.errorCode) {
                    dispatch(authFail(res.data.errorMsg));
                    return Promise.resolve(res.data);
                }
                const token = res.data.key;
                if (!token || token === undefined) {
                    dispatch(logout());
                }
                const expirationDate = new Date(
                    new Date().getTime() + 3600 * 1000
                );
                localStorage.setItem('token', token);
                localStorage.setItem('expirationDate', expirationDate);

                config.headers['Authorization'] = `Token ${token}`;

                axios.get(API_URL + 'users/api/user/', config).then(res => {
                    dispatch(authGetUser(parseUser(res.data)));
                });

                dispatch(authSuccess(token));
                dispatch(checkAuthTimeout(3600));
                return Promise.resolve(AUTH_RESULT_SUCCESS);
            })
            .catch(err => {
                dispatch(authFail(err.response.data.detail));
                return Promise.reject(err.response.data.detail);
            });
    };
};

export const authUserUpdate = () => {
    return (dispatch, getState) => {
        config.headers['Authorization'] = `Token ${getState().auth.token}`;

        axios.get(API_URL + 'users/api/user/', config).then(res => {
            console.log('UPDATE')

            dispatch(authGetUser(parseUser(res.data)));
        });
    };
};

export const FacebookauthLogin = (username, email) => {
    return dispatch => {
        dispatch(authStart());
        return axios
            .post(
                API_URL + 'users/api/facebooklogin/',
                {
                    username: username,
                    email: email
                },
                config
            )
            .then(res => {
                if (res.data.errorCode) {
                    dispatch(authFail(res.data.errorMsg));
                    return Promise.resolve(res.data);
                }

                const token = res.data.key;
                if (!token || token === undefined) {
                    dispatch(logout());
                }
                const expirationDate = new Date(
                    new Date().getTime() + 3600 * 1000
                );
                localStorage.setItem('token', token);
                localStorage.setItem('expirationDate', expirationDate);
                dispatch(authSuccess(token));
                dispatch(checkAuthTimeout(3600));
                return Promise.resolve(AUTH_RESULT_SUCCESS);
            })
            .catch(err => {
                dispatch(authFail(err.response.data.detail));
                return Promise.reject(err.response.data.detail);
            });
    };
};

export const authSignup = (
    username,
    email,
    password,
    first_name,
    last_name,
    phone,
    date_of_birth,
    street_address_1,
    country,
    city,
    zipcode,
    over_eighteen,
    language,
    referralCode,
    currency,
    iovationData
) => {
    return dispatch => {
        const body = JSON.stringify({
            username,
            email,
            password,
            first_name,
            last_name,
            phone,
            date_of_birth,
            street_address_1,
            country,
            city,
            zipcode,
            over_eighteen,
            language,
            referralCode,
            currency,
            iovationData
        });

        return axios
            .post(API_URL + 'users/api/signup/', body, config)
            .then(() => {
                // const token = res.data.key;
                // const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
                // localStorage.setItem('token', token);
                // localStorage.setItem('expirationDate', expirationDate);
                // dispatch(authSuccess(token));
                // dispatch(checkAuthTimeout(3600));
                // return Promise.resolve()
            })
            .catch(err => {
                dispatch(authFail(err));
                return Promise.reject(err);
            });
    };
};

export const FacebookSignup = (username, email) => {
    return dispatch => {
        dispatch(authStart());
        const body = JSON.stringify({ username, email });

        return axios
            .post(API_URL + 'users/api/facebooksignup/', body, config)
            .then(res => {
                const token = res.data.key;
                const expirationDate = new Date(
                    new Date().getTime() + 3600 * 1000
                );
                localStorage.setItem('token', token);
                localStorage.setItem('expirationDate', expirationDate);
                dispatch(authSuccess(token));
                dispatch(checkAuthTimeout(3600));
                return Promise.resolve();
            })
            .catch(err => {
                dispatch(authFail(err));
                return Promise.reject(err);
            });
    };
};

export const checkAuthTimeout = expirationTime => {
    const token = localStorage.getItem('token');
    return dispatch => {
        setTimeout(() => {
            if (token) {
                axios
                    .post(API_URL + 'users/api/logout/?token=' + token, config)
                    .then(() => {
                        dispatch(logout());
                        window.location.reload();
                    })
                    .catch(() => {
                        dispatch(logout());
                        window.location.reload();
                    });
            } else {
                dispatch(logout());
                window.location.reload();
            }
        }, expirationTime * 1000);
    };
};

export const postLogout = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        const body = JSON.stringify({});
        if (token) {
            axios
                .post(
                    API_URL + 'users/api/logout/?token=' + token,
                    body,
                    config
                )
                .then(() => {
                    dispatch(logout());
                    window.location.reload();
                })
                .catch(() => {
                    dispatch(logout());
                    window.location.reload();
                });
        } else {
            dispatch(logout());
            window.location.reload();
        }
    };
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('facebook');
    localStorage.removeItem('facebookObj');

    localStorage.removeItem('activityCheckReminder');

    return {
        type: 'AUTH_LOGOUT'
    };
};

export const sendingLog = err => {
    return axios
        .post(
            API_URL + 'system/api/logstreamtos3/',
            { line: err, source: 'Ibetweb' },
            config
        )
        .then(() => { });
};

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');

        if (!token || token === undefined) {
            dispatch(logout());
            return Promise.resolve(AUTH_RESULT_FAIL);
        } else {
            const expirationDate = new Date(
                localStorage.getItem('expirationDate')
            );
            if (expirationDate <= new Date()) {
                dispatch(postLogout());
                return Promise.resolve(AUTH_RESULT_FAIL);
            } else {
                config.headers['Authorization'] = `Token ${token}`;

                return axios
                    .get(API_URL + 'users/api/user/', config)
                    .then(res => {
                        console.log(res);
                        if (res.data.errorCode === errors.USER_IS_BLOCKED) {
                            dispatch(authFail(res.data.errorMsg.detail[0]));
                            dispatch(postLogout());
                            return Promise.resolve(AUTH_RESULT_FAIL);
                        } else if (res.data.block || !res.data.active) {
                            dispatch(postLogout());
                            return Promise.resolve(AUTH_RESULT_FAIL);
                        } else {
                            dispatch(authGetUser(parseUser(res.data)));
                            dispatch(authSuccess(token));
                            dispatch(checkAuthTimeout(3600));
                            return Promise.resolve(AUTH_RESULT_SUCCESS);
                        }
                    })
                    .catch(() => {
                        dispatch(postLogout());
                        delete config.headers['Authorization'];
                        return Promise.resolve(AUTH_RESULT_FAIL);
                    });
            }
        }
    };
};

function parseUser(data) {
    return {
        userId: data.pk,
        username: data.username,
        firstName: data.first_name,
        lastName: data.last_name,
        currency_code: data.currency,
        currency: data.currency_value,
        favoriteDepositMethod: data.favorite_payment_method,
        country: data.country,
        balance: data.main_wallet,
        phone: data.phone,
        email: data.email,
        mainWallet: data.main_wallet,
        nameVerified: data.id_verified,
        emailVerified: data.email_verified,
        phoneVerified: data.phone_verified,
        lastLoginTime: data.last_login,
        registrationTime: data.time_of_registration,
        hasSecurityQuestion:
            data.security_question != null &&
            data.security_question !== undefined &&
            data.security_question !== '',
        hasWithdrawPassword:
            data.withdraw_password != null &&
            data.withdraw_password !== undefined &&
            data.withdraw_password !== ''
    };
}
