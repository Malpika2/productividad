export const tareasCompletasReducer = (state = [] , action ) => {
    switch (action.type) {
        case 'setTareasCompletas':
             state = action.payload;
             return state;
    
        default:
            return state;
    }
}