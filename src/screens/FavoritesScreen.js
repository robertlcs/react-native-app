import React from 'react';
import { withApollo } from 'react-apollo';

import { getFavoriteNames } from '../modules/asyncStorage';
import ListWithTabs from '../components/ListWithTabs';

class FavoritesScreen extends React.Component {
  getNames = async gender => {
    const names = await getFavoriteNames(gender);
    this.props.fetchNamesSuccess({ gender, names });
  };

  render() {
    return (
      <ListWithTabs
        getNames={this.getNames}
        names={this.props.names}
        page="favorites"
      />
    );
  }
}

export default withApollo(FavoritesScreen);