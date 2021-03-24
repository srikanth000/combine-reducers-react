const combineReducers = (reducers) => {
  
    let globalState = {}
    const globalReducers = {}
    for(const [key, value] of Object.entries(reducers)) {
      value.map((item) => {
        if(typeof item == 'object'){
          globalState[key] = item
        }else {
          globalReducers[key] = item
        }
      })
    }
  
  
    const reducerFunction = (state, action) => {
          let hasStateChanged = false;
          let updatedState = {};
          for (const reducer in globalReducers) {
              if (globalReducers.hasOwnProperty(reducer)) {
                  const currentState = state[reducer]; 
                  const currentReducer = globalReducers[reducer];
                  const returnedStateByReducer = currentReducer(currentState, action);
                  hasStateChanged = hasStateChanged || JSON.stringify(returnedStateByReducer) !== JSON.stringify(currentState);
                  updatedState[reducer] = returnedStateByReducer;
              }
          }
          return hasStateChanged ? updatedState : state;
      };
  
      return [globalState, reducerFunction];
  }
  
 module.exports = combineReducers
  