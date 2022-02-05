import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import ShopPage from "./pages/shop/shop.component";
import CheckOut from "./pages/checkout/checkout.component";
import HomePage from "./pages/homepage/homepage.component";
import Header from "./component/header/header.component";
import Signinandsingout from "./pages/sign in/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from './redux/user/user.selector';

class App extends React.Component {
  // unsubscribeFromAuth = null;

  //renders when the component is mounted in dom.
  componentDidMount() {
    const { setCurrentUser } = this.props;
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  // componentWillMount() {
  //   this.unsubscribeFromAuth();
  // }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <Signinandsingout />
              )
            }
          ></Route>
          <Route exact path='/checkout' component={CheckOut}/>
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
