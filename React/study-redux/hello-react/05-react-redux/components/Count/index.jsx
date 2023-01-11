import React, { Component } from 'react'


export default class home extends Component {
    addCount = () => {
        const { selectVal } = this;
        // console.log(this.props);
        this.props.jia(selectVal.value *1);
    }
    delCount = () => {
        const { selectVal } = this;
        this.props.jian(selectVal.value *1);
    }
    oddAdd = () => {
        const { selectVal } = this;
        if(selectVal.value %2 != 0){
            this.props.jia(selectVal.value *1);
        }
    }
    delayAdd = () =>{
        const { selectVal } = this;
        this.props.jiaAsync(selectVal.value *1,2000);
    }
    render() {
        return (
            <div>
                <div>
                    <h1>当前count:{this.props.count}</h1>
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
                <button onClick={this.oddAdd}>奇数添加</button> &nbsp;
                <button onClick={this.delayAdd}>2秒后添加</button>
            </div>
        )
    }
  
}
