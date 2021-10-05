import React from 'react';
import Card from './Card';


const CardsList = ({robots}) =>{
    return(
        <div>
            {
                robots.map((users,i) =>{
                return (
                    <Card 
                    key={i} 
                    name={robots[i].name} 
                    email= {robots[i].email} 
                    id={robots[i].id}/>   
                    )
                })
            }    
        </div>
    );
    
}


export default CardsList ;



