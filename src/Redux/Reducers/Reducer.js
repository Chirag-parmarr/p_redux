
const init = [{
    id: 0,
    firstname: "chirag",
    lastName: "parmar",
    email: "chirag@gmail.com"
}]

const dataReducer = (state = init, action) => {
    switch (action.type) {
        case "SET_DATA":
            return [...state,
            action.payload
            ]

        default:
            return state
    }
}

export default dataReducer