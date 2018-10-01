/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Slide from 'src/components/Slide';
import { handleImage } from 'src/store/reducer';

/**
 * Code
 */
// const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
  handleImage: image => () => {
    dispatch(handleImage(image));
  },
});

const SlideContainer = connect(
  null,
  mapDispatchToProps,
)(Slide);

/**
 * Export
 */
export default SlideContainer;
