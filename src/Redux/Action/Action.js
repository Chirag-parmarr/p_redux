

const SET_DATA = "SET_DATA"

export const sendData = (data) => {
  
    return {
        type: SET_DATA,
        payload: data
    }
}
