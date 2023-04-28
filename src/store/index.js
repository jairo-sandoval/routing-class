const storeInit = {
    users: [],
    count: 0,
}

const reducerCounter = (store = storeInit, action) => {
    switch(action.type) {
        case '@increment/count':
            return {...store, count: store.count + 1}

        case '@decrement/count':
            return {...store, count: store.count - 1}

        default: 
            return store
    }
}

export default reducerCounter;