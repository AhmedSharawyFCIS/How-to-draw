

const initialState = {

    user:{}
}

const state = (state = initialState, action) => {

    switch (action.type) {
        case 'SET_FLATS':
            return { ...state }
       

        default:
            return state;
    }
}

export default state;