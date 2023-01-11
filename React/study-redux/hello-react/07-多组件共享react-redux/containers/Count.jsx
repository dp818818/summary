/**
 * 将container与UI组件合在一起
 * 并简写部分
 */

import React, { Component } from 'react'

// 引入connect用于连接UI组件与redux
import { connect } from 'react-redux';
// 引入actions
import { INCREMENTCOUNT, DECREMENTCOUNT } from '../redux/actions/count';

class CountUI extends Component {
  addCount = () => {
    const { selectVal } = this;
    // console.log(this.props);
    this.props.jia(selectVal.value * 1);
  }
  delCount = () => {
    const { selectVal } = this;
    this.props.jian(selectVal.value * 1);
  }

  render() {
    return (
      <div>
        <div>
          <h1>当前count:{this.props.count}</h1>
          <h1>
            当前的人数是：
            {
              this.props.rs
            }
          </h1>
        </div>
        <select name="conunt" ref={c => { this.selectVal = c }} style={{ width: '100px' }}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select> &nbsp;
        <button onClick={this.addCount}>添加</button> &nbsp;
        <button onClick={this.delCount}>减少</button> &nbsp;
      </div>
    )
  }

}


//使用connect()()创建并暴露一个Count的容器组件  mapDispatchToProps简写
export default connect(
  state => ({
    count: state.count,
    rs: state.person.length
  }),
  {
    jia: INCREMENTCOUNT,
    jian: DECREMENTCOUNT,
  }
)(CountUI);