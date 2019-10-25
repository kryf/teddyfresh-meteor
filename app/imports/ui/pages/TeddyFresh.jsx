import React from 'react';
import MiddleMenu from '../components/MiddleMenu';
import Picture from '../components/Picture';
import MerchandiseMenu from '../components/MerchandiseMenu';
import Merchandise from '../components/Merchandise';

export default class IslandSnow extends React.Component {

  render() {
    return (
        <div>
          <MiddleMenu/>
          <Picture/>
          <MerchandiseMenu/>
          <Merchandise/>
        </div>
    );
  }
}