/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Router,
  Route,
  Redirect,
  Routes,
  Switch,
  useHistory,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { donorsRequest,} from './reducers/donor/actions';
import { hospitalsRequest} from './reducers/hospital/actions';
import { subscribersRequest } from './reducers/subscriber/actions';
import { transfusionsRequest } from './reducers/transfusion/actions';

import Main from './DemoPages/Main';
import Login from './containers/Login';
import Components from './DemoPages/Components';
import Forms from './DemoPages/Forms';
import Charts from './DemoPages/Charts';
import Tables from './DemoPages/Tables';
import Elements from './DemoPages/Elements';
import Widgets from './DemoPages/Widgets';
import Donors from './containers/Dashboard/Donors';
import Subscribers from './containers/Dashboard/Subscribers';
import Hospitals from './containers/Dashboard/Hospitals';
import Transfusions from './containers/Dashboard/Transfusions';
import Donations from './containers/Dashboard/Donations';
import Deferrals from './containers/Dashboard/Deferrals';
import Admins from './containers/Dashboard/Admins';

// import SignUp from './containers/SignUp';
// import Confirmation from './containers/Confirmation';
// import Home from './containers/Home';
// import AcceptShare from './components/Timeline/AcceptShare';

const PrivateRoute = ({
  children, ...rest
}) => {
  console.log(localStorage.getItem('isAuth'), ...rest)
  return (
    <Route
      {...rest}
      render={({location}) => (
        localStorage.getItem('auth_token')
          ? children
          : <Redirect to={{ pathname: '/login', state: { from: location } }} />
      )}
    />
  );
};

const history = createBrowserHistory();
const AppRouter = ({
  getTransfusions,
  getHospitals,
  getDonors,
  getSubscribers
}) => {
  
  useEffect(() => {
    getTransfusions({})
    getHospitals({})
    getDonors({})
    getSubscribers({})
  }, [])

  return (
      <Router history={history}>
          <Switch>
            <Redirect exact from="/" to="/dashboard" />
            <PrivateRoute exact path="/dashboard">
              <Main />
            </PrivateRoute>
            <Route exact path="/login" component={Login} />
            <Route path="/dashboard/components" component={Components}/>
            <Route path="/dashboard/forms" component={Forms}/>
            <Route path="/dashboard/charts" component={Charts}/>
            <Route path="/dashboard/tables" component={Tables}/>
            <Route path="/dashboard/elements" component={Elements}/>
            <Route path="/dashboard/widgets" component={Widgets}/>
            <PrivateRoute path="/dashboard/donors" >
              <Donors />
            </PrivateRoute>
            <PrivateRoute path="/dashboard/subscribers" >
              <Subscribers />
            </PrivateRoute>
            <PrivateRoute path="/dashboard/hospitals" >
              <Hospitals />
            </PrivateRoute>
            <PrivateRoute path="/dashboard/transfusions" >
              <Transfusions />
            </PrivateRoute>
            <PrivateRoute path="/dashboard/donations" >
              <Donations />
            </PrivateRoute>
            <PrivateRoute path="/dashboard/deferrals" >
              <Deferrals />
            </PrivateRoute>
            <PrivateRoute path="/dashboard/admins" >
              <Admins />
            </PrivateRoute>
          </Switch>
          
      </Router>
    );
}

PrivateRoute.propTypes = {
  children: PropTypes.objectOf(PropTypes.shape).isRequired,
};

const mapDispatchToProps = {
  getTransfusions: transfusionsRequest,
  getHospitals: hospitalsRequest,
  getDonors: donorsRequest,
  getSubscribers: subscribersRequest
}

export default connect(null, mapDispatchToProps)(AppRouter);
