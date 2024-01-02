import React, { useState } from 'react'

function Counter() {
 const [count,setCount]=useState(0);

    return (
    <div style={{display:'flex',alignItems:'center',flexDirection:'column',color:'white',fontSize:'30px'}}>
        <h1 style={{paddingBottom:'20px'}}>Counter</h1>
        <p>{count}</p>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:'20px'}}>
        <button style={{borderStyle:'none',borderRadius:'4px',padding:'10px 16px',background:'brown',color:'white',width:'180px',marginTop:'25px',fontSize:'17px'}} onClick={function(){
            setCount(count+1)
            console.log("increment")
            
        }}>Increment</button>
        <button style={{borderStyle:'none',borderRadius:'4px',padding:'10px 16px',background:'brown',color:'white',width:'180px',marginTop:'25px',fontSize:'17px'}} onClick={function(){
            setCount(count-1)
            console.log("decrement")
        }}>Decrement</button>
        </div>
    </div>
  )
}

export default Counter