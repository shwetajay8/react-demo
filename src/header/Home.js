import React from 'react';
import '../App.css';

export default class Home extends React.Component {
render () {
let btnClass = [
'app-home',
]
btnClass = btnClass.join(' ')
return <button className={btnClass}><b>{this.props.title}</b></button>
}
}