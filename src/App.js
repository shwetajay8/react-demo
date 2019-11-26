import React from 'react';
import './App.css';
import Title from './header/CompanyName';
import Logo from './header/Logo';
import Home from './header/Home';
function App() {
return (
<div >
<header className="App-header">
<Title title='Demo Project'></Title>
<Logo></Logo>
<Home title="Home" ></Home>
</header>
<body className="App-main" >
<p className="container"> BizX Demo project
</p>
</body>
<footer className="App-footer" >
Copyright 2019 BizX LLC.
</footer>
</div>
);
}

export default App;
