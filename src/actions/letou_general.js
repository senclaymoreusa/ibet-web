export const show_letou_announcements = () => {
    return {
        type: 'SHOW_LETOU_ANNOUNCEMENTS'
    };
};

export const hide_letou_announcements = () => {
    return {
        type: 'HIDE_LETOU_ANNOUNCEMENTS'
    };
};

export const show_letou_login = () => {
    return {
        type: 'SHOW_LETOU_LOGIN'
    };
};

export const hide_letou_login = () => {
    return {
        type: 'HIDE_LETOU_LOGIN'
    };
};

export const show_letou_forgot_password = () => {
    return {
        type: 'SHOW_LETOU_FORGOT_PASSWORD'
    };
};

export const hide_letou_forgot_password = () => {
    return {
        type: 'HIDE_LETOU_FORGOT_PASSWORD'
    };
};

export const show_letou_mobile_menu = () => {
    return {
        type: 'SHOW_LETOU_MOBILE_MENU'
    };
};

export const hide_letou_mobile_menu = () => {
    return {
        type: 'HIDE_LETOU_MOBILE_MENU'
    };
};

export const show_letou_mobile_login = () => {
    return {
        type: 'SHOW_LETOU_MOBILE_LOGIN'
    };
};

export const hide_letou_mobile_login = () => {
    return {
        type: 'HIDE_LETOU_MOBILE_LOGIN'
    };
};

export const show_letou_mobile_signup = () => {
    return {
        type: 'SHOW_LETOU_MOBILE_SIGNUP'
    };
};

export const hide_letou_mobile_signup = () => {
    return {
        type: 'HIDE_LETOU_MOBILE_SIGNUP'
    };
};

export const show_letou_transfer = () => {
    return {
        type: 'SHOW_LETOU_TRANSFER'
    };
};

export const hide_letou_transfer = () => {
    return {
        type: 'HIDE_LETOU_TRANSFER'
    };
};

export const saveWalletColors = colors => {
    return {
        type: 'SET_WALLET_COLORS',
        walletColors: colors
    };
};

export const setWalletColors = wallets => {
    return dispatch => {
        var randomColor = require('randomcolor');
        let colors = [];

        wallets.map(function(wallet) {
            parseFloat(wallet.amount) !== 0.0
                ? colors.push({
                      code: wallet.code,
                      color: randomColor({
                          luminosity: 'bright',
                          hue: 'random'
                      })
                  })
                : colors.push({
                      code: wallet.code,
                      color: '#d9d9d9'
                  });
        });

        dispatch(saveWalletColors(colors));
    };
};
