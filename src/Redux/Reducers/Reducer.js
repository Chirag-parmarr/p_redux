
const init = [{
    id: 0,
    firstname: "chirag",
    lastName: "parmar",
    email: "chirag@gmail.com"
},
{
    id: 1,
    firstname: "p",
    lastName: "p",
    email: "p@gmail.com"
}, {
    id: 2,
    firstname: "q",
    lastName: "q",
    email: "q@gmail.com"
}]

const dataReducer = (state = init, action) => {
    switch (action.type) {
        case "SET_DATA":
            // console.log(action);
            return [...state,
            action.payload
            ]
        case "DELETE_DATA":

            const filterData = state.filter(e => e.id !== action.payload)
            state = filterData;
            return state


        case "UPDATE_DATA":
            
        default:
            return state
    }
}

export default dataReducer