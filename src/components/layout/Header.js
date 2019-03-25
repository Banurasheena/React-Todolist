import React from 'react';

function Header(){
    return (
        <header style={headerStyle}>
            <h1>Todolist</h1>
        </header>
    )
}

const headerStyle = {
    background: 'crimson',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

export default Header;