/**
 * NPM import
 */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/**
 * Local import
 */
// Composant
import App from 'src/components/App';


/**
 * Code
 */
const mapStateToProps = state => ({
  loaded: state.loaded,
  data: state.data,
});

/**
 * Container
 */
const AppContainer = connect(mapStateToProps, null)(App);


/**
 * Export
 */
export default withRouter(AppContainer);
