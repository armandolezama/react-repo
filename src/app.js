import React from 'react';
import ReactDOM from 'react-dom';

//Mi primer componente
    // function App(){
    //     return <h1>Hola! todo bien uwu</h1>
    // }

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            count: 0
        }
    }

    render(){
        return <div>
            <h1>{this.state.count}</h1>
            <button onClick={()=>{
                this.setState({
                    count: this.state.count + 1
                })
            }}>sumar</button>
            <button onClick={()=>{
                this.setState({
                    count: this.state.count - 1
                })
            }}>restar</button>
        </div>
    }
}
ReactDOM.render(<App></App>, document.getElementById('app'))