import React from 'react';
// import mount from 'react-mounter';
import {mount} from 'react-mount-layout';
import Landing from '../client/Landing.jsx';
import About from '../client/about/About.jsx';
import Dashlogin from '../client/dashlogin/Dashlogin.jsx';
import Dashboard from '../client/dashboard/Dashboard.jsx';
import Dashuser from '../client/dashboard/Dashuser.jsx';
import Registration from '../client/registration/Registration.jsx';
import Property from '../client/property/Property.jsx';
import Adminproperty from '../client/property/Adminproperty.jsx';
import Clientproperty from '../client/property/Clientproperty.jsx';
import Propertydetail from '../client/propertydetail/Propertydetail.jsx';
import Listedproperty from '../client/listedproperty/Listedproperty.jsx';
import Profile from '../client/profile/Profile.jsx';
import Login from '../client/login/Login.jsx';
import Searchresults from '../client/searchresults/Searchresults.jsx';
import Terms from '../client/terms/Terms.jsx';
import Privacy from '../client/privacy/Privacy.jsx';



let exposed;
exposed = FlowRouter.group({});
loggedIn = FlowRouter.group({
  triggersEnter: [
      function(){
          if (!(Meteor.loggingIn() || Meteor.userId())) {
              return FlowRouter.go("/login");
          }
      }
  ]
});



FlowRouter.route('/', {
    name: 'Landing',
    action: () => {
      mount(Landing,{})
    }
});
exposed.route('/about', {
    action: () => {
      mount(About,{});
    }
});
exposed.route('/registration', {
    action: () => {
      mount(Registration,{
      });
    }
});
exposed.route('/login', {
    action: () => {
      mount(Login,{
      });
    }
});
loggedIn.route('/property', {
    action: () => {
      mount(Property,{
      });
    }
});
exposed.route('/propertydetail', {
  action: () => {
    mount(Propertydetail,{
    });
  }
});
exposed.route('/listedproperty', {
    action: () => {
      mount(Listedproperty,{
      });
    }
});
loggedIn.route('/profile', {
    action: () => {
      mount(Profile,{
      });
    }
});
exposed.route('/searchresults', {
    action: () => {
      mount(Searchresults,{
      });
    }
});
exposed.route('/terms', {
  action: () => {
    mount(Terms,{
    });
  }
});
exposed.route('/privacy', {
  action: () => {
    mount(Privacy,{
    });
  }
});
loggedIn.route('/dashboard', {
  action: () => {
    mount(Dashboard,{
    });
  }
});
loggedIn.route('/adminpropertyt', {
  action: () => {
    mount(Adminproperty,{
    });
  }
});
loggedIn.route('/clientproperty', {
  action: () => {
    mount(Clientproperty,{
    });
  }
});
loggedIn.route('/dashuser', {
  action: () => {
    mount(Dashuser,{
    });
  }
});
loggedIn.route('/dashLogin', {
  action: () => {
    mount(Dashlogin,{
    });
  }
});
// FlowRouter.notFound = {
//   action: () => {
//     mount(NotFound, {});
//   }
// }

// const WelcomeComponent = ({name}) => (<p>Hello, {name}</p>);
// mount(WelcomeComponent, {name: 'Arunoda'});
