import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button className={`${props.backgroundColor}
       text-black 
      rounded-full px-8 
      font-medium
        
      hover:bg-secondary hover:text-darkBackground 
      py-2
      transition-all`}>
        {props.title}
      </button>
    </div>
  )
}

export default Button