import React from 'react';

const Scroll= (props)=>{
    return(
        <div style={{overflowY:'scroll', border:'2px solid black', padding: '10px' , margin:'2px', height:'800px'}}>
            {props.children}
        </div>
    )
}

export default Scroll ;