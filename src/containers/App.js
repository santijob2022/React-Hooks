import React, { useState, useEffect} from "react";
import CardList from "../components/CardList";
//import {robots} from './robots'; //you can import multiple objects from './robots' because it has export instead of export default
import SearchBox from "../components/SearchBox";
import './App.css';
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";

function App() {

    const [robots, setRobots] = useState([]);
    const [searchfield,setSearchfield] = useState("");
    const [count, setCount] = useState(0);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => setRobots(data));               
        console.log(count);
    }, [count]);

    const onSearchChange = (event) => {
        // here we used the arrow notation to make this local instead of belonging to "input" in SearchBox
        setSearchfield( event.target.value );
    };  
        
    const filteredRobots = robots.filter((robot) =>
        robot.name.toLowerCase().includes(searchfield.toLowerCase())
      );    

    if (robots.length === 0) {
      return <h1>Loading</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f2">Robofriends</h1>
            <button onClick={()=>setCount(count+1)}>Click Me!</button>
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>
      );
    }
  
}

export default App;




// class App extends Component{
//     constructor(){
//         super()
//         this.state = {
//             robots: [],
//             searchfield: ''
//         }
//     }

//     componentDidMount(){
//         fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response => response.json())
//         .then(users => this.setState({robots:users}));
//     }

//     onSearchChange = (event)=>{ // here we used the arrow notation to make this local instead of belonging to "input" in SearchBox
//         this.setState({searchfield: event.target.value})        
//     }

//     render (){
//         const filteredRobots = this.state.robots.filter((robot) => {
//             return robot.name
//             .toLowerCase()
//             .includes(this.state.searchfield.toLowerCase());
//         });
//         if(this.state.robots.length === 0){
//             return <h1>Loading</h1>
//         }
//         else{        
//             return (
//               <div className="tc">
//                 <h1 className="f2">Robofriends</h1>

//                 <SearchBox searchChange={this.onSearchChange} />
//                 <Scroll>
//                   <ErrorBoundry>
//                     <CardList robots={filteredRobots} />
//                   </ErrorBoundry>
//                 </Scroll>
//               </div>
//             );
//         }
//     }
// }

// export default App;