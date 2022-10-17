import axios from 'axios'
import React, { Component } from 'react'
import FlatList from 'flatlist-react'

export default class App extends Component {
  constructor(){
    super()
    this.state={
      users:""
    }
  }
  async componentDidMount(){
await axios.get("https://jsonplaceholder.typicode.com/users").
then(res=>{this.setState({
  users:res.data
})
console.log(this.state.users)})
  }
  render() {
    return (
      <div className='container'>
        <div className='row'>
<div className='col-12-l bg-success d-flex justify-content-center'><h1>USERS</h1></div>
        <div className='col-12-l bg-light'>
        <ul className='list-group'>
        <FlatList
          list={this.state.users}
          renderItem={this.renderUser}
          renderWhenEmpty={() => <div>List is empty!</div>}
        />
        </ul>
        </div>
        </div>
      </div>
    )
  }
  renderUser=(user,id)=>{
return(
<li key={id} className="list-group-item d-flex">
  <p className='mx-2'>{user.id}</p>
  <p className='mx-5'>{user.name}</p>
  <p>{user.email}</p>
</li>
)
  }
}
