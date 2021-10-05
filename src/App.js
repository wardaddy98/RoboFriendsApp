import React, {Component} from 'react';
import CardsList  from './CardsList';
import Searchbox from './Searchbox';
import Loadingbar from './Loadingbar';
import Error from './Error';
import Scroll from './Scroll';
import ErrorBoundary from './ErrorBoundary';
import './App.css';


class App extends Component{
    constructor(){
        super();
        this.state= {
            robots:[],
            searchfield:''
        }
    }


onSearchChange=(event)=> {

    this.setState({searchfield:event.target.value});
}
    
componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>{
        this.setState({robots:users})
    
});
}
  
  

render(){

    const filteredRobots = this.state.robots.filter((robot)=>{
        return (robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase()));

        
    })


    

    if(this.state.robots.length === 0){
        return (<Loadingbar/>)}

    else if (filteredRobots.length === 0){
            return(
                <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <Searchbox searchChange={this.onSearchChange}/>
                <Error/>
                </div>);
            }   
    else{
        return(
            <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <Searchbox searchChange={this.onSearchChange}/>

            <Scroll>
                <ErrorBoundary>
                    <CardsList robots ={filteredRobots}/>
                </ErrorBoundary>
            </Scroll>

            </div>
        )
    }
     }
}


export default App ;


