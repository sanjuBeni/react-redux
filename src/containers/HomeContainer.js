import { connect } from "react-redux";
import Home from "../components/Home";
import { addToCart, removeToCart } from "../services/actions/action";

const mapDispatchToProps = (dispatch) => ({
  addToCartHandle: (data) => dispatch(addToCart(data)),
  removeToCartHandle: () => dispatch(removeToCart()),
});

const mapStateToProps = (state) => ({
  cartStateData: state.cardItem,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
