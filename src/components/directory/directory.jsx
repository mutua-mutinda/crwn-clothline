import React, { Component } from "react";
import MenuItem from "../menu-item/menu-item";

import "./directory.scss";

class Directory extends Component {
  render() {
    return (
      <div className="directory-menu">
        <MenuItem title="HATS" />
        <MenuItem title="JACKETS" />
        <MenuItem title="SNEAKERS" />
        <MenuItem title="MENS" />
        <MenuItem title="HATS" />
      </div>
    );
  }
}

export default Directory;
