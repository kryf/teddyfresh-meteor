import React from 'react';
import { Grid, Divider, List, Form, Button, Image, Menu, Icon } from 'semantic-ui-react';

export default class TopMenu extends React.Component {
  render(){
    return(
        <div className="footer-background">
          <Grid columns='equal'>
            <Grid.Column width={7}>
              <div className="left-footer">
                JOIN OUR NEWSLETTER
                <Divider hidden />
                <List>
                  <List.Item><div className="footer-item">
                    GET NOTIFICATIONS ABOUT NEW ARRIVALS AND RESTOCKED ITEMS!
                  </div></List.Item>
                  <Divider fitted hidden />
                  <Divider fitted hidden />
                  <Form.Input placeholder='Enter your email address' />
                  <Divider fitted hidden />
                  <Divider fitted hidden />
                  <Divider fitted hidden />
                  <Button color='black'>
                    Subscribe
                  </Button>
                  <Divider hidden />
                  <Divider hidden />
                  <Divider hidden />
                  <Divider hidden />
                  <Divider hidden />
                  <Divider hidden />
                  <div className='footer-item'>TEDDY  FRESH © 2019</div>
                </List>
              </div>
            </Grid.Column>
            <Grid.Column width={3}>
              MAIN MENU
              <Divider hidden />
              <List>
                <div className="footer-item">SHOP</div>
                <Divider fitted hidden />
                <Divider fitted hidden />
                <Divider fitted hidden />
                <div className="footer-item">NEW ARRIVALS</div>
                <Divider fitted hidden />
                <Divider fitted hidden />
                <Divider fitted hidden />
                <div className="footer-item">ACCESSORIES</div>
                <Divider fitted hidden />
                <Divider fitted hidden />
                <Divider fitted hidden />
                <div className="footer-item">LOOKBOOK</div>
                <Divider fitted hidden />
                <Divider fitted hidden />
                <Divider fitted hidden />
                <div className="footer-item">SALE</div>
                <Divider fitted hidden />
                <Divider fitted hidden />
                <Divider fitted hidden />
                <div className="footer-item">ARCHIVE</div>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              HELP
              <Divider hidden />
              <List>
                <div className="footer-item">FAQ & SHIPPING/RETURNS</div>
                <Divider fitted hidden />
                <Divider fitted hidden />
                <Divider fitted hidden />
                <div className="footer-item">SIZE CHART</div>
                <Divider fitted hidden />
                <Divider fitted hidden />
                <Divider fitted hidden />
                <div className="footer-item">PRIVACY POLICY</div>
                <Divider fitted hidden />
                <Divider fitted hidden />
                <Divider fitted hidden />
                <div className="footer-item">WHOLESALE INQUIRIES</div>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <div className="footer-image"><Image src="//cdn.shopify.com/s/files/1/2166/8231/files/TeddyFreshlogo_500_white_500x.png?v=1559164516" size='small'/></div>
              <Divider fitted hidden />
              <Divider fitted hidden />
              <Divider fitted hidden />
              <div className="footer-item">SUPPORT@TEDDYFRESH.COM</div>
              <Divider hidden />
              <Menu borderless className="iconmenu">
                <Menu.Item><Icon inverted name="facebook f" /></Menu.Item>
                <Menu.Item><Icon inverted name="twitter" /></Menu.Item>
                <Menu.Item><Icon inverted name="instagram" /></Menu.Item>
              </Menu>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}