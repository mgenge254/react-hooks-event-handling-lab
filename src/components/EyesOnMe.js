// Code EyesOnMe Component Here
// Code EyesOnMe Component Here
import React from 'react'

function EyesOnMe() {
    //function to handle onFocus when clicked
    function handleFocus(){
        console.log('Good!')
    }
    //function to handle OnBlur when clicked
    function handleBlur(){
        console.log('Hey! Eyes on me!')
    }
  return (
    <div>
   <button onFocus={handleFocus} onBlur={handleBlur}>Eyes on me</button>
    </div>
  )
}

export default EyesOnMe