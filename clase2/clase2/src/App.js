import React from 'react';
import Tarjeta from './Tarjeta';
class App extends React.Component{
    render(){
        return (
            <div>
        <Tarjeta name="Batman"></Tarjeta>
        <Tarjeta name="Superman"></Tarjeta>
        <Tarjeta name="Hulk"></Tarjeta>
        </div>
        )
}
}

export default App;