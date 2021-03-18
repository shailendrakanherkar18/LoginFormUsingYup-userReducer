export const initialState = {
    email: "",
    password: "",
    emailErrorText: "",
    passwordErrorText: ""
};

function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "SET_EMAIL": 
        return {
            ...state,
            email: payload
        }
    case "SET_PASSWORD": 
        return {
            ...state,
            password: payload
        }
    case "SET_EMAIL_ERROR_TEXT": 
        return {
            ...state,
            emailErrorText: payload
        }
    case "SET_PASSWORD_ERROR_TEXT": 
        return {
            ...state,
            passwordErrorText: payload
        }
  }
}

export default reducer;