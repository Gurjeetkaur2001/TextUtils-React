import React from 'react'

function Alert(props) {
{/* const capatilize=(word)=>{
    const lower= word.toLowerCase()
    return lower.charAt(0).toUpperCase()+ lower.slice(1); ///first success the character capital karn lai 
} */}


  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{props.alert.type}</strong>   {props.alert.message}
    

  </div>
   
  )
}

export default Alert
