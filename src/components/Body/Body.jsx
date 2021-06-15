import React from 'react';
// import { Link } from 'react-router-dom';
// import { Description } from '../description/Description';
import { Item } from '../Item/Item';

export class Body extends React.Component {
  state = {
    item: null,
    items: []
  }

  componentDidMount(prop, state) {
    this.getData()
  }

  getData = async () => {
    try {
      const res = await fetch('http://localhost:3006/item');
      const data = await res.json()
      this.setState({
        items: data.content
      })
    } catch (e) {
      console.log("ERRR", e)
    }
  }

  // onDesc() {
   
  //     return (
  //       <Link to="/description">{Description}</Link>
  //     )
    
  // }

  render() {
    return (
      <main className="catalog">
        <div className="item__box">
           {this.state.items.map((elem, index) => (
            <Item data={this.state.items[index]}  key={this.state.items[index].id} />)
          )} 
        </div>
      </main>
    )
  }
}






