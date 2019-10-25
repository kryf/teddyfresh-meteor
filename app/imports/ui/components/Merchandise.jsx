import React from 'react';
import { Grid, Segment, Image, Container } from 'semantic-ui-react';

export default class Merchandise extends React.Component {
  render(){
    return(
        <div className="website-background">
          <Grid columns={4}>
            <Grid.Column>
              <Segment><Image src="//cdn.shopify.com/s/files/1/2166/8231/products/tf-coaches-jacket-primary-01-SQUARE_400x.jpg?v=1569601768 400w" size='medium' /></Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment><Image src="//cdn.shopify.com/s/files/1/2166/8231/products/anorak-jacket-primary-01-SQUARE_400x.jpg?v=1569602233 400w" size='medium' /></Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment><Image src="//cdn.shopify.com/s/files/1/2166/8231/products/dolman-mock-fleece-blue-01-SQUARE_400x.jpg?v=1569602291 400w" size='medium' /></Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment><Image src="//cdn.shopify.com/s/files/1/2166/8231/products/long-sleeve-color-block-polo-primary-01-SQUARE_400x.jpg?v=1569602376 400w" size='medium' /></Segment>
            </Grid.Column>
          </Grid>
          <Grid columns={4}>
            <Grid.Column>
              <Container textAlign='center'>
                COACHES JACKET
              </Container>
            </Grid.Column>
            <Grid.Column>
              <Container textAlign='center'>
                SILICONE PATCH WINDBREAKER
              </Container>
            </Grid.Column>
            <Grid.Column>
              <Container textAlign='center'>
                NEED A HUG CREWNECK
              </Container>
            </Grid.Column>
            <Grid.Column>
              <Container textAlign='center'>
                BEAR PATCH LONG SLEEVE
              </Container>
            </Grid.Column>
          </Grid>
          <div className="price-set">
            <Grid columns={4}>
              <Grid.Column>
                <Container textAlign='center'>
                  <div className="price-color">$110</div>
                </Container>
              </Grid.Column>
              <Grid.Column>
                <Container textAlign='center'>
                  <div className="price-color">$89</div>
                </Container>
              </Grid.Column>
              <Grid.Column>
                <Container textAlign='center'>
                  <div className="price-color">$64</div>
                </Container>
              </Grid.Column>
              <Grid.Column>
                <Container textAlign='center'>
                  <div className="price-color">$50</div>
                </Container>
              </Grid.Column>
            </Grid>
          </div>
        </div>
    );
  }
}