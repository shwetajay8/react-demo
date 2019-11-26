import React from 'react';
import '../App.css';
import logo from './bizx.png';
export default class Logo extends React.Component {
render () {
let btnClass = [
'App-logo',
]
btnClass = btnClass.join('')
return<img className={btnClass} src={logo} alt="Logo" ></img>
}
}