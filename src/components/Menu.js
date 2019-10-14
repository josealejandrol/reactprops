import React from 'react';
import '../App.css';

const Menu = (props) =>{
    return (
        <div className="App-menu">
            <a className='App-link' href='/'>{props.item1}</a>
            <a className='App-link' href='/'>{props.item2}</a>
            <a className='App-link' href='/'>{props.item3}</a>
        </div>
    )
}
export default Menu;