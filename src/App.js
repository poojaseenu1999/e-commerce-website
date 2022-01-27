import React from "react";
import { Switch, Route} from "react-router-dom";
import "./App.css";
import ShopPage from "./pages/shop/shop.component";
import HomePage from "./pages/homepage/homepage.component";
import Header from "./component/header/header.component";
import Signinandsingout from "./pages/sign in/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument} from './firebase/firebase.utils';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentUser: null
    }
  }
  
  // unsubscribeFromAuth = null;

//renders when the component is mounted in dom.
  componentDidMount() {
     auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        });
      }
      this.setState({ currentUser: userAuth });
    }); 
  }

// componentWillMount() {
//   this.unsubscribeFromAuth();
// }

  render() {
  return (
    <div>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={Signinandsingout} />
      </Switch>
    </div>
  );
}
}

export default App;
