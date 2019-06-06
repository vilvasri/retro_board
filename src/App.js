import React, {Component} from 'react';
import {createStore} from 'redux';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.saveList = this.saveList.bind(this);
    this.deleteList = this.deleteList.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
        list1: [],
        list2: [],
        list3: [],
        currentList1: '',
        currentList2: '',
        currentList3: '',
    }
  }

  saveList = (param,l,cl) => e => {
    if(!param) { return; }
    this.setState({
      [l]: [...this.state[l], param]
    });
    this.setState({
      [cl]: ''
    });
    this.refs[l].style.height = 'auto';
    e.preventDefault();
  }

  deleteList = (param,l) => e => {
    // param is the argument you passed to the function
    // e is the event object that returned
    var filtered = this.state[l].filter(function(value, index, arr){
      return value != param;
    });
    this.setState({
      [l]: filtered
    });
    e.preventDefault();
  }

  handleInputChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
    console.log(this.state);
    e.preventDefault();
  }

  render() {
    const pStyle = {
      whiteSpace: 'pre-wrap',
      border: '1px solid black'
    };
    const closeStyle = {
        position: 'absolute',
        bottom: 0,
        right: 0, 
    };
    const boxStyle = {
      position: 'relative'
    };
    return (
      <div className="container">
        {/* <h1>Retro Board</h1> */}
        <div className="row">
          <div className="input-field col s4">
            <h6>Went Well</h6>
            <textarea className="materialize-textarea validate" id="currentList1" ref="list1" value={this.state.currentList1} onChange={this.handleInputChange} required></textarea>
            <button className="add-button btn" onClick={this.saveList(this.state.currentList1, "list1","currentList1")}>Add</button>
            <div>
              {this.state.list1.map(item => (
                <div style={boxStyle}>
                <p style={pStyle} key={item}>{item}</p>
                <button className="add-button btn red" onClick={this.deleteList(item, "list1")} style={closeStyle}>X</button>
                </div>
              ))}
            </div>
          </div>

          <div className="input-field col s4">
            <h6>To Improve</h6>
            <textarea className="materialize-textarea validate" id="currentList2" ref="list2" value={this.state.currentList2} onChange={this.handleInputChange} required></textarea>
            <button className="add-button btn" onClick={this.saveList(this.state.currentList2, "list2","currentList2")}>Add</button>
            <div>
              {this.state.list2.map(item => (
                <div style={boxStyle}>
                <p style={pStyle} key={item}>{item}</p>
                <button className="add-button btn red" onClick={this.deleteList(item,"list2")} style={closeStyle}>X</button>
                </div>
              ))}
            </div>
          </div>
          
          <div className="input-field col s4">
            <h6>Action Items</h6>
            <textarea className="materialize-textarea validate" id="currentList3" ref="list3" value={this.state.currentList3} onChange={this.handleInputChange} required></textarea>
            <button className="add-button btn" onClick={this.saveList(this.state.currentList3, "list3","currentList3")}>Add</button>
            <div>
              {this.state.list3.map(item => (
                <div style={boxStyle}>
                <p style={pStyle} key={item}>{item}</p>
                <button className="add-button btn red" onClick={this.deleteList(item, "list3")} style={closeStyle}>X</button>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
