import React from 'react';
import { Menu, Container, Dropdown, Image } from 'semantic-ui-react';

export default class MiddleMenu extends React.Component {
  render(){
    return(
        <Menu borderless className="middlemenu">
          <Container>
            <Menu.Item>NEW ARRIVALS</Menu.Item>
            <Dropdown item text="APPAREL">
              <Dropdown.Menu>
                <Dropdown.Item>SHOP ALL</Dropdown.Item>
                <Dropdown.Item>SWEATERS & HOODIES</Dropdown.Item>
                <Dropdown.Item>T-SHIRTS</Dropdown.Item>
                <Dropdown.Item>TOPS</Dropdown.Item>
                <Dropdown.Item>JACKETS</Dropdown.Item>
                <Dropdown.Item>PANTS</Dropdown.Item>
                <Dropdown.Item>WOMEN</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="ACCESSORIES">
              <Dropdown.Menu>
                <Dropdown.Item>SHOP ALL</Dropdown.Item>
                <Dropdown.Item>HATS</Dropdown.Item>
                <Dropdown.Item>BEANIES</Dropdown.Item>
                <Dropdown.Item>BAGS</Dropdown.Item>
                <Dropdown.Item>SOCKS</Dropdown.Item>
                <Dropdown.Item>NECKLACES</Dropdown.Item>
                <Dropdown.Item>PATCHES & KEYCHAINS</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item>SALE</Menu.Item>
            <Menu.Item position="center"><Image position="center" src="//cdn.shopify.com/s/files/1/2166/8231/files/TeddyFreshlogo_500_color_180x.png?v=1559171259 1x, //cdn.shopify.com/s/files/1/2166/8231/files/TeddyFreshlogo_500_color_360x@2x.png?v=1559171259 2x"/></Menu.Item>
            <Menu.Item position="right">ACCOUNT</Menu.Item>
            <Menu.Item>SEARCH</Menu.Item>
            <Menu.Item>CART (0)</Menu.Item>
          </Container>
        </Menu>
    );
  }
}