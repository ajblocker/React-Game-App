import React from 'react';
// import ReactDOM from 'react-dom';

class Button extends React.Component {
    standardGame() {
        const num = Math.floor(Math.random() * Math.floor(11))+1;
        console.log(num)
        const userGuess = prompt("input a value 1-10");
        if (userGuess === num) {
            // let user know they were correct
            alert("You are correct!");
        } else { 
            // let the user know they're incorrect 
            alert("You are incorrect!");
            // compare userGuess to num 
            if (userGuess > num) {
                } else {
            // let user know if their guess was too high or low 
                    alert("Your guess is too high!");
                if (userGuess < num) {
                } else {
                    alert("Your guess is too low!");
                }
            }
        }
        }
        
        expertGame() {
            const num = Math.floor(Math.random() * Math.floor(101))+1;
            console.log(num)
            const userGuess = prompt("input a value 1-100");
            if (userGuess === num) {
            // let user know they were correct
            alert("You are correct!");
            } else {
            // let the user know they're incorrect
            alert("You are incorrect!");
            // compare userGuess to num
                if (userGuess > num) {
                } else {
            // let user know if their guess was too high or low 
                    alert("Your guess is too high!");
                if (userGuess < num) {
                } else {
                    alert("Your guess is too low!");
                }
            }
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.standardGame}>STANDARD</button>
                <button onClick={this.expertGame}>EXPERT</button>
                 
            </div>
        );
    }
}

// class MainComponent extends React.Component {  <button type="button" onClick={this.onResetClick.bind(this)}>Reset</button>
//     constructor(props) {
//         super(props);
//         this.initialState = {
//             someValueThatTheUserChanges: 3,
//             abc: 'a'
//         };
//         this.state = this.initialState;
//     }
//     onResetClick(e) {
//         e.preventDefault();
//         this.setState(this.initialState);
//     }
// }
          


export default Button;
// MainComponent,