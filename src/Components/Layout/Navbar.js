import React, { Component, Fragment } from 'react';

class Navbar extends Component {
render(){
return(
<Fragment>
<nav className="navbar navbar-light bg-secondary fixed-top" >
<a className="navbar-brand"> Laces an Buttons</a>
<a clasName="nav-link" href="/about"> About</a>
</nav>


</Fragment>
);
}
}
export default Navbar;