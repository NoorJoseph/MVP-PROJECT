import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [],
      todo : "",
      isDone:false,
      description:'',
      deadLine:0
    }
    this.setTodo = this.setTodo.bind(this);
    this.setDescription = this.setDescription.bind(this);
    this.setdeadLine = this.setdeadLine.bind(this);

  }


  submitTodo(todo,isDone,description,deadLine) {
    var that = this;
    $.ajax({
      type:'POST',
      url: '/items',
      data:{
        todo: todo,
        isDone:isDone,
        description:description,
        deadLine:deadLine
      },
      success: (data) => {
        console.log("success",data);
      }
    });


    $.ajax({
      type:"GET",
      url: '/items', 
      success: (data) => {
        that.setState({
          items: data
        })
        console.log(data)
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  };

  setTodo(event){
    this.setState({
      todo: event.target.value
    })
  };


  setDescription(event){
    this.setState({
      discription: event.target.value
    })
  };
   setdeadLine(event){
    this.setState({
      deadLine: event.target.value
    })
  };

  render () {
    return (<div>
  <div className="form-group">
    <h1>Todo List</h1>
      Enter Your Todo:<input className="btn btn-default" name="todo" onChange={this.setTodo} />
  </div>
  <div>
     Enter A Description:<input className="btn btn-default" name="discription" onChange={this.setDescription} />
  </div>
    Enter A deadLine<input className="btn btn-default" name="deadLine" onChange={this.setdeadLine} />
      <button onClick={() => this.submitTodo(this.state.todo,this.state.isDone,this.state.discription,this.state.deadLine)}>Add todo</button>
    
      <List  items={this.state.items}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));