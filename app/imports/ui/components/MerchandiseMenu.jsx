import React from 'react';
import { Menu, Grid, Container } from 'semantic-ui-react';

export default class MerchandiseMenu extends React.Component {
  render(){
    return(
        <div className="website-background">
          <Menu borderless className="merchmenu">
            <Grid container centered columns={4}>
              <Grid.Column>NEW ARRIVALS</Grid.Column>
              <Grid.Column>BEST SELLERS</Grid.Column>
              <Grid.Column>BACK IN STOCK</Grid.Column>
            </Grid>
          </Menu>
        </div>
    )
  }
}