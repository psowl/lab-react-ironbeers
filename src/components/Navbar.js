import React from 'react';
import {Link} from 'react-router-dom';

class Navbar extends React.Component {

render() {
  return (
    <div>

      <Link to='/'> <strong>Home</strong> </Link>

    </div>
  )
}  
}

export default Navbar;