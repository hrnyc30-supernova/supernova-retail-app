import ProductDetail from '../../components/product-detail/product-detail';
import { connect } from 'react-redux';
// import addNumber from '../../actions/testaction';

const mapStateToProps = (state, ownProps) => ({
  productDetail: 2,
});

// const mapDispatchToProps = (dispatch, ownProps) => ({
//   onClick: () => dispatch(addNumber()),
// });

export default connect(mapStateToProps)(ProductDetail);
