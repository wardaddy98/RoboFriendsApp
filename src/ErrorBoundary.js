import React, {Component} from 'react';

class ErrorBoundary extends Component{
    constructor(){
        super();
        this.state= {
            hasError:false 
        }
    }

    componentDidCatch(error,info){
        this.setState({hasError:true});
    }

    render(){
        if (this.hasError){
            return(<h1>Technical Glitch  Try Again Later</h1>);
        }
        else{
            return(this.props.children)
        }
    }
}

export default ErrorBoundary ;