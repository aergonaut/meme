import React from 'react';

const Swatch = React.createClass({
  render: function() {
    let style = {
      backgroundColor: this.props.color
    };

    return <input className="swatch" type="radio" name="swatch" style={style} value={this.props.color} onClick={this.props.handleChange} checked={this.props.checked} />
  }
});

export default Swatch;
