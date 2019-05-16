import React, {Component} from 'react'
import {Form, FormControl, Button} from 'react-bootstrap'
import './App.css'
import './AgeStats'
import AgeStats from './AgeStats';

class App extends Component{
    constructor(){
        super();
        this.state = {
            newDate : '',
            birthDate : '1991-12-20',
            showstats : false
        }
    }

    showBirthDay(){
        console.log(this.state);
        this.setState({
            birthDate : this.state.newDate,
            showstats : true
        });
    }

    render(){
        return(
            <div className="AppContainer">
            <Form inline>
                <h2>Input Your Birthday!</h2>
                <FormControl 
                    type="date" 
                    onChange={event => this.setState({newDate : event.target.value})}>
                </FormControl>
                {' '}
                <Button
                    onClick={() => this.showBirthDay()}>
                    Submit
                </Button>
                {
                    this.state.showstats ?
                    <div className="fade age-stats">
                        <AgeStats date={this.state.birthDate}/>
                    </div>
                    :
                    <div></div>
                }
            </Form>     
            </div>
        )
    }
}

export default App;



// import React, {Component} from 'react';

// class App extends Component{
//     render(){
//         return(
//             <div>Ageteller Component</div>
//         )
//     }
// }

// export default App;