import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';
import Tab from '../Tab';

class About extends React.Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div className="page-height">
        <Tab/>
        </div>
        <hr className="alt-hr"/>
        <Footer className="fixed-bottom"/>
      </div>

    );
  }
}
export default About;
