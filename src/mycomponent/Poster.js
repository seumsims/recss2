import React, {Component} from 'react';
import axios from 'axios';

class Poster extends Component {
    constructor() {
        super();
        this.state={
            postData:" ",
            postResult:" "
        }
    }

    onChangeHandler=(event)=>{
        var mydata = event.target.value;
        this.setState({postData:mydata})

    }

    onClickHandler=()=>{

        axios.post('http://localhost:7000/posttest.php',this.state.postData)
        .then(response=>{
            this.setState({postResult:response.data})
            alert(this.state.postResult)
        })
        .catch(error=>{
            alert('Something Went Wrong');
        })

    }

    // http://show.42web.io/posttest.php infree not allowing api in free account 

    render() {
        return (
            <div>
                <h1>{this.state.postResult}</h1>
                <input onChange={this.onChangeHandler} type="text"/>
                <button onClick={this.onClickHandler}>send post coms</button>
            </div>
        );
    }
}

export default Poster;