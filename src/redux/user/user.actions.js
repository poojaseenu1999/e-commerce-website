export const userAction = (user) => {
    return {
        type:'SET_CURRENT_USER',
        payload: user,
    }
};

