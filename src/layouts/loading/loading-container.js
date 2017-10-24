import {connect} from 'react-redux';

import Loading from './loading';

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Loading);
