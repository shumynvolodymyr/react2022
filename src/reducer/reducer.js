export const reducer = (state, action) => {
    switch (action.form) {
        case 'one': {
            switch (action.type) {
                case 'inc':
                    return {...state, count_1: state.count_1 = state.count_1 + 1};
                case 'dec':
                    return {...state, count_1: state.count_1 = state.count_1 - 1};
                case 'reset':
                    return {...state, count_1: state.count_1 = 0};
                case 'input':
                    return {...state, count_1: state.count_1 = action.payload};
                default:
                    throw new Error();
            }
        }
        case 'two': {
            switch (action.type) {
                case 'inc':
                    return {...state, count_2: state.count_2 = state.count_2 + 1};
                case 'dec':
                    return {...state, count_2: state.count_2 = state.count_2 - 1};
                case 'reset':
                    return {...state, count_2: state.count_2 = 0};
                case 'input':
                    return {...state, count_2: state.count_2 = action.payload};
                default:
                    throw new Error();
            }
        }
        case 'three': {
            switch (action.type) {
                case 'inc':
                    return {...state, count_3: state.count_3 = state.count_3 + 1};
                case 'dec':
                    return {...state, count_3: state.count_3 = state.count_3 - 1};
                case 'reset':
                    return {...state, count_3: state.count_3 = 0};
                case 'input':
                    return {...state, count_3: state.count_3 = action.payload};
                default:
                    throw new Error();
            }
        }
        default:
            throw new Error();
    }
};
