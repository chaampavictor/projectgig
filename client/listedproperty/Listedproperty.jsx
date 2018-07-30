import React from 'react';
import {Meteor} from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data'
import Footer from '../Footer';
import Navbar from '../Navbar';
import Altsearch from '../altsearch/Altsearch';
import {UserFiles} from '../../lib/collections';
import {Listproperty} from '../../lib/collections';

export class Listedproperty extends React.Component {

  c(id) {
    FlowRouter.go("/propertydetail?id=" + id)
  }


  renderProperty() {
    const {property, userfiles} = this.props;
    if (!property) {
      return;
    }

    return property.map((prop) => (

      <div key={prop._id}>

        <div className="row">
          <div className="col s12 m6 l6 card-style">
            <div className="card" onClick={this.c.bind(this, prop._id)}>
              <div key={prop.user} className="collection-item dismissable">
                <div className="card-content ">
                  <span className="card-title center">
                    <img src={`/uploads/${prop.imageId}.${prop.imageType}`} style={{width: 100 + "%",height:200 + "px"}} />
                    <a href={"/propertydetail?id=" + prop._id} className="primary-content">{`${prop.propertyname}`}</a>
                  </span>
                  <div className="center">
                    {prop.description}
                  </div>
                </div>

                <div className="card-action center">
                  {prop.location}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    ))
  }

  render() {

    return (
      <div>
        <div id="alt-banner" className="section">
          <Navbar/>
          <Altsearch/>
        </div>
        <div className="container">

          <h4 className="center">Listed Properties</h4>
          {this.renderProperty()}
  
  
        </div>

        <Footer/>
      </div>

    );
  }
}
export default withTracker(() => {
    Meteor.subscribe('userfiles')

  return {
    property: Listproperty.find().fetch(),
    userfiles: UserFiles.findOne(),
  }
})(Listedproperty)
