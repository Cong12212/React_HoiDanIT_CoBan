const initState = {
    user: [
        { id: 1, name: 'Cong' },
        { id: 2, name: 'Thuong' },
        { id: 3, name: 'Thuong 1' }
    ],
    post: []
}



const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DELETE_USER':
            console.log('check action', action)
            let user = state.user
            user = user.filter(item => item.id != action.payload.id)
            return {
                ...state, user
            }

        // case 'ADD_USER':
        //     let id = { id: Math.floor(Math.random() * 1001) }
        //     let usera = { id: id, name: `random + ${id}` }
        //     console.log('check id', id)
        //     return {
        //         ...state, user: [...state.user, usera]
        //     }
        case 'ADD_USER':
            let id = Math.floor(Math.random() * 1001);
            let usera = { id: id, name: `random + ${id}` }; // Using id directly
            console.log('check id', id);
            return {
                ...state, user: [...state.user, usera]
            };

        default:
            return state;
    }
}

export default rootReducer;