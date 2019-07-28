import React from 'react';
import './App.css';
import Login from '../Login';
import Registration from '../Registration/Registration';
import Header from '../Header/Header';
import BottomAppBar from '../SideBar'
function App() {
    return (
        <div className="App">
            <Header/>
            {/*<Login/>*/}
            {/*<Registration/>*/}
            <BottomAppBar/>
        </div>
    );
}

export default App;
