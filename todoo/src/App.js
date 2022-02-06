import React, {Component} from 'react'; 

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      newItem:"",
      list:[]
 
    }
    
  }


  updateInput(key, value){
    this.setState({
      [key]: value
    });
    console.log(key);
    console.log(value);
    console.log(this.state.list);
  }

  addItem(){
    const newItem={
      id: 1 + Math.random(),
      value: this.state.newItem.slice()

    };  

    const list = [...this.state.list];

    if (newItem.value.length !== 0){
      list.push(newItem)
    };

    this.setState({
      list,
      newItem:""
    });
  }  

  deleteItem(id){
    const list = [...this.state.list];

    const updatedList = list.filter(item => item.id !== id);

    this.setState({list: updatedList});
  }

  clearList = () => {
    this.setState({
      list: []
    });
  }

  ascOrder = () => {
    const list = [...this.state.list];
    const updatedList = list.sort((a,b) => (a.value>b.value) ?1: ((b.value>a.value)? -1:0));
    this.setState({list: updatedList});
  }
    



  render() {
    return (
      <div className="App">
        <div>
          Add an Item...
          <br/>
          <input
            type ="text"
            placeholder = "Type item here..."
            value={this.state.newItem}
            onChange={e => this.updateInput("newItem", e.target.value)}
          />
          <button onClick={() => this.addItem()}> Add </button>


          <br/>
          <ul>
            {this.state.list.map(item => {
              return(
                <li key={item.id}>
                  {item.value}
                  <button onClick={() => this.deleteItem(item.id)} >
                  X  
                  </button>
                  <input type="checkbox"/>
                  

                </li>
              )
            } 
              
              )}
          </ul>
        </div>

        <button onClick={() => this.clearList()}> Tyhjennä </button>
        <button onClick={() => this.ascOrder()}> Lajittele A-Ö </button>

      </div>
    );
  }
}

export default App;
