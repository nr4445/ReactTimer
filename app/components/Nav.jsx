var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {


      return (
        <div className="top-bar">
          <div className="top-bar-left">

              <ul className="menu">
                <li className="menu-text">React Timer App</li>
                <li>
                  <IndexLink to="/" activeClassName="active">Timmer</IndexLink>
                </li>
                <li>
                  <Link to="/counter" activeClassName="active">Counter</Link>
                </li>
              </ul>

          </div>

          <div className="top-bar-right">
            <ul className="menu">
              <li className="menu-text">
                Created by<a href="/" target="_blank">Naresh</a>
              </li>
            </ul>
          </div>
        </div>
      );
}



module.exports = Nav;
