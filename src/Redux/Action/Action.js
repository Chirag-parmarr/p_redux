

const SET_DATA = "SET_DATA"
const DELETE_DATA = "DELETE_DATA"
const UPDATE_DATA = "UPDATE_DATA"
export const sendData = (data) => {

    return {
        type: SET_DATA,
        payload: data
    }
}
export const deleteData = (id) => {

    return {
        type: DELETE_DATA,
        payload: id
    }
}
export const updateData = (id) => {

    return {
        type: UPDATE_DATA,
        payload: id
    }
}
