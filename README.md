
A less than **10kb** packages is mimics the logic behind the combineReducers of redux. It can be used with React hook useReducer 

**Installation**

    npm i combine-reducers-react

**Basic usage**

    const [state, reducer] = combineReducers({
      first: [firstInitalState, firstReducer],
      second: [secondInitialState, secondReducer]
    })
`

**Working example**

    const combineReducers = require('./src/index')

     const userInitialState = {
     currentUser: {},
     isloggedIn: false,
     basicDetails: {
       name: null,
       email: null
     }
    }

    const cartInitialState = {
      itemsAdded: [],
      paymentSummary: {} 
    }


    const userReducer = (state, action) => {
      const {type, ...data} = action
      switch(type){
        case 'TOGGLE_LOGIN': {
          return {...state, isloggedIn: data.status}
        }
        default: {
          return state
        }
      }
     }

    const cartDetailsReducer = (state, action) => {
      const {type, ...data} = action
        switch(type){
          case 'ADD_ITEMS': {
            return {...state, itemsAdded: [...state.itemsAdded, data.item ]}
          }

          default: {
            return state
          }
       }
    }

    const [state, reducer] = combineReducers({
       user: [userInitialState, userReducer],
       cartDetails: [cartInitialState, cartDetailsReducer]
    })

    console.log(reducer(state, {type: 'ADD_ITEMS', item: {item: 'ball', quantity: 3}}))
    console.log(reducer(state, {type: 'TOGGLE_LOGIN', status: true}))


**Issues**
[Raise a issue ]( https://github.com/srikanth000/combine-reducers-react/issues)

Please do leave a star if it helps you



