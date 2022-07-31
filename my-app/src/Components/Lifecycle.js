// import React, { Component } from 'react'


// // mounting (constructor -> render ->componentdidmount)
// // updating (state/props -> render)
// // unmounting



// export default class Lifecycle extends Component {


//     constructor(props) {
//         console.log('constructor');
//       super(props)
    
//       this.state = {
//         count: 0,
//       };
      
//     }

//     shouldComponentUpdate(){
//         console.log("shouldComponentUpdate");
//         return true;
//     }

//     handleClick =()=>{
//         this.setState({
//             count: this.state.count+1
//          })
// }

// componentDidUpdate(){
//     console.log("componentDidUpdate");
//     return true;
// }

    
// componentDidMount(){
//     console.log('componentDidMount');
// }


//   render() {
//     return (
//       <div>
//         <h1>Counter: {this.state.count}</h1>
//         <button onClick={this.handleClick}>+</button>
//         {console.log('render')}
//       </div>
//     )
//   }
// }



import React, { Component } from 'react'

export default class Lifecycle extends Component {


    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    handleClick=()=>{
        this.setState({
            count:(this.state.count+2)
        })
    }
    

  render() {
    return (
      <div>
        <h1>Count:{this.state.count}</h1>
        <button onClick={this.handleClick}>+</button>
      </div>
    )
  }
}

