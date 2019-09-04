import React from "react";

const Header = props => {
  return (<header >
    <nav className="navbar navbar-default navbar-static-top" role="navigation" style={{ marginBottom: 0 }}>
      <div className="navbar-header">
        <a className="navbar-brand" href="index.html">Body Stats Calculator</a>
      </div>
    </nav>

  </header>);
}

export default Header;