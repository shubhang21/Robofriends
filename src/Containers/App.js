
import './App.css';
import React,{Component} from 'react'
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';

class App extends Component
 {
  constructor()
  {
    super();
    this.state={
      robots:[],
      searchfield:'',
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users=> {this.setState({robots:users})})
  }

 
  render()
  {
    const filterrobots=this.state.robots.filter(robots=>
    {
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    }
    )
  return (
    <div className="tc">
    <h1 className='f1'>RoboFriends</h1>
    <SearchBox searchChange={(event)=>{
    this.setState({searchfield:event.target.value})
  }}/>
    <Scroll>
      <CardList robots={filterrobots} ></CardList>
      </Scroll>
    </div>
  );
}
}

export default App;
