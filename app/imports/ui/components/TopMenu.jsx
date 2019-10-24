import React from 'react';
import { Menu } from 'semantic-ui-react';

export default class TopMenu extends React.Component {
  render(){
    return (
        <Menu borderless className="topmenu">
          <Menu.Item position="center">FREE SHIPPING ON U.S. ORDERS OVER $100</Menu.Item>
        </Menu>
    );
  }
}