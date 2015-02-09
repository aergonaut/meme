import React from 'react';
import Swatch from './swatch.jsx';

const Swatches = React.createClass({
  render: function() {
    return (
      <div className="form-group">
        <label>{this.props.labelText}</label>
        <div>
          {this.props.options.map((opt) => {
            let isChecked = opt.color == this.props.selected;
            return <Swatch {...opt} handleChange={this.props.handleChange} checked={isChecked} />;
          })}
        </div>
      </div>
    )
  }
});

export default Swatches;
