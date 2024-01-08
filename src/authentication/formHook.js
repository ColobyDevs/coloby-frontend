import React, { useReducer, useCallback } from "react";



const reducer = (state, action) => {
    switch (action.type) {
      case 'INPUT_CHANGE':
        let formIsValid = true;
        for (const inputId in state.inputs) {
            if (inputId === action.inputId) {
              formIsValid = formIsValid && action.isValid;
              
          } else {
            formIsValid = formIsValid && state.inputs[inputId].isValid;
          }
        }
        return {
          ...state,
          inputs: {
            ...state.inputs,
            [action.inputId]: { value: action.value, isValid: action.isValid }
          },
          isValid: formIsValid
        };
      default:
        return state;
    }
  };
   
export const useForm = (initialInputs, initialFormValidity) =>{
 
  
const [state, dispatch] = useReducer(reducer, {
    inputs: initialInputs,
    validity: initialFormValidity
})

const inputHandler = useCallback((value, id, isValid)=>{

    dispatch({type: 'INPUT_CHANGE', value:value, inputId: id, isValid:isValid})
}, [dispatch])

    return [state, inputHandler]
}