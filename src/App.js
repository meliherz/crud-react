import React, { useState, Component } from 'react';
import axios from 'axios';

export default class App extends Component {
  constructor(){
    super()
    this.state={
      kullanıcılar:[],
      kullanıcı_ekranı:true,
      kullanıcı_ekleme_ekranı:false
    }
  }
  componentDidMount(){
    axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then(res=>{this.setState({
      kullanıcılar:res.data
    })})
  }
  render() {
    const {kullanıcılar,kullanıcı_ekranı,kullanıcı_ekleme_ekranı} =this.state;
    return (
      <div className='container'>
        {kullanıcı_ekleme_ekranı&&
        <form>
          <input placeholder='Email'/>
          <input placeholder='Kullanıcı Adı'/>
        </form>
        }
      {kullanıcı_ekranı&&
        <div className='row'>
        <div className='col-12-l bg-info d-flex flex-column align-items-center pb-2'><h1>Users</h1>
        <button className='btn btn-success'>Kullanıcı Ekle</button></div>
      <div className='row'>
        {
          kullanıcılar.map(kullanıcı=>{
            return(
              <div className='col-12-l bg-ligth'>{kullanıcı.name}</div>
            )
          })
        }
      </div>
      </div>}
         </div>
    )
  }
}
