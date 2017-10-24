import {connect} from 'react-redux';

import Survey from './survey';

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Survey);
