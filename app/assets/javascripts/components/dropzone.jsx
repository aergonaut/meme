import React from 'react/addons';

const Dropzone = React.createClass({
  getInitialState: function() {
    return {
      accepting: false
    }
  },
  
  dragOver: function(e) {
    e.preventDefault();
  },
  
  dragEnter: function() {
    this.setState({ accepting: true });
  },
  
  dragLeave: function() {
    this.setState({ accepting: false });
  },

  handleDrop: function(e) {
    this.setState({ accepting: false });
    this.props.handleDrop(e);
  },

  render: function() {
    let cx = React.addons.classSet;
    let classes = cx({
      "dropzone": true,
      "accept-drop": this.state.accepting
    });

    return (
      <div className={classes}
        onDrop={this.handleDrop}
        onDragOver={this.dragOver}
        onDragEnter={this.dragEnter}
        onDragLeave={this.dragLeave}>Drop image here</div>
    )
  }
});

export default Dropzone;
