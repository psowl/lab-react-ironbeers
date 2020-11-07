import React from 'react';
import {Link} from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (

      <div>
        <div>
          <img src="https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?cs=srgb&dl=pexels-chris-f-1283219.jpg&fm=jpg" style={{width:"300px"}} alt=""></img>
          <h2>
            <Link to='/beers'> All beers </Link>
          </h2>
          <p>Lorem ipsum</p>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1555658636-6e4a36218be7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" style={{width:"300px"}} alt=""></img>
          <h2>
            <Link to='/random-beer'> Random beer </Link>
          </h2>
          <p>Lorem ipsum</p>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1566633806327-68e152aaf26d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" style={{width:"300px"}} alt=""></img>
          <h2>
            <Link to='/new-beer'> New beer </Link>
          </h2>
          <p>Lorem ipsum</p>
        </div>

        </div>

    )
  }
}

export default Home;