import React, {Component} from 'react'; 

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      newItem:"",
      list:[]
 
    }
    
  }


  paivitaInput(key, value){
    this.setState({
      [key]: value
    });
  
  }

  lisaaListaan(){
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

  poistaListasta(id){
    const list = [...this.state.list];

    const updatedList = list.filter(item => item.id !== id);

    this.setState({list: updatedList});
  }

  tyhjennaLista = () => {
    this.setState({
      list: []
    });
  }

  aakkosJarjestys = () => {
    const list = [...this.state.list];
    const updatedList = list.sort((a,b) => (a.value>b.value) ?1: ((b.value>a.value)? -1:0));
    this.setState({list: updatedList});
  }
    



  render() {
    return (
      <div className="App">
        <div>
          TODO-lista
          <br/>
          <input
            type ="text"
            placeholder = "Lisää uusi tehtävä..."
            value={this.state.newItem}
            onChange={e => this.paivitaInput("newItem", e.target.value)}
          />
          <button onClick={() => this.lisaaListaan()}> + </button>


          <br/>
          <ul>
            {this.state.list.map(item => {
              return(
                <li key={item.id}>
                  {item.value}
                  <button onClick={() => this.poistaListasta.Listasta(item.id)} >
                  X  
                  </button>
                  <input type="checkbox"/>
                  

                </li>
              )
            } 
              
              )}
          </ul>
        </div>

        <button onClick={() => this.tyhjennaLista()}> Poista kaikki </button>
        <button onClick={() => this.aakkosJarjestys()}> Lajittele A-Ö </button>

      </div>
    );
  }
}

export default App;
