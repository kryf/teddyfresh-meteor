import React from 'react';
import TopMenu from '../components/TopMenu';
import MiddleMenu from '../components/MiddleMenu';
import Picture from '../components/Picture';
import MerchandiseMenu from '../components/MerchandiseMenu';
import Merchandise from '../components/Merchandise';
import FooterMenu from '../components/FooterMenu';

export default class IslandSnow extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <MiddleMenu/>
          <Picture/>
          <MerchandiseMenu/>
          <Merchandise/>
          <FooterMenu/>
        </div>
    );
  }
}