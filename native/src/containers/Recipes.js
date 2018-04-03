import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


class RecipeListing extends Component {


  
    // Fetch Data from API, saving to Redux


  render = () => {
    const { Layout, recipes, match } = this.props;

    return (<Layout/>
    );
  }
}




export default connect()(RecipeListing);
