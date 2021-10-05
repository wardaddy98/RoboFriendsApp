import React from 'react';


const Card= (props)=> {
    return(

        <div className="bg-light-green dib br3 pa3 ma2 grow shadow-5 bw2 tc">
             <div >
                 <img alt="robot" src={`https://robohash.org/test${props.id}?size=220x220`}></img>
             </div>
             <div>
                 <h2>{props.name}</h2>
                 <p>{props.email}</p>
             </div>
        </div> 
     );

};

export default Card ;

    