export const tareasReducer = (state = [] , action ) => {
    switch (action.type) {
        case 'setTareas':
             state = action.payload;
             return state;
    
        default:
            return state;
    }
}