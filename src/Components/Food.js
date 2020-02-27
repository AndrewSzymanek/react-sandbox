import React, {Component} from 'react';
//Use Component above when you need to use "extends Component"

class Food extends Component{
    state = {
        foods: ["pizza", "pasta", "ice cream"]
    }
    switchFoodHandler = () => {
        //console.log("was clicked!");
        this.setState({foods: ["gumbo", "jambalaya", "beignets"]})
    }
    render(){
        //to use props in class component, here we use "this.props" instead of "props" like in function component
        //return <p>The best food in the world is {this.props.foodName}</p>

        //learning to use state
        return (
            <div>
                <button onClick={this.switchFoodHandler}>Switch Name</button>
                <p>The best foods in the world are {this.state.foods[0]}, {this.state.foods[1]} and {this.state.foods[2]} .</p>
            </div>
        );
    }
}

export default Food;