import React from 'react';
import '../App.css';

export default class CompanyName extends React.Component {
render () {
let btnClass = [
'App-title',//can add more class if needed
]
btnClass = btnClass.join(' ')
return <button className={btnClass}><b>Demo project</b></button>
}
}