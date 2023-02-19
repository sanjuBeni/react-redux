import { connect } from "react-redux";
import Header from "../components/Header";

const mapStateToProps = (state) => ({
  cartStateData: state.cardItem,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
