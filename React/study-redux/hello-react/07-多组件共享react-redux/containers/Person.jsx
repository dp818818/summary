import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ADDPERSONACTION } from '../redux/actions/person';


class Person extends Component {
  addPerson = () => {
      this.props.jiaRen({name:'八月十八'})
  }
  render() {
    return (
      <div>
        <button onClick={this.addPerson}>点击添加人员</button>
        {
          this.props.rens.map(item=>{
            return <div><h3>{item.name}</h3></div>
          })
        }
      </div>
    )
  }
}


export default connect(
    state => ({rens:state.person}),
    {
      jiaRen:ADDPERSONACTION
    }
)(Person)