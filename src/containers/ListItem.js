import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ListItem from '../components/ListItem/ListItem';
import { favorite } from '../actions/actions';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch, props) => {
  return bindActionCreators(
    {
      favorite: favorite.bind(null, props.screen)
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListItem);
