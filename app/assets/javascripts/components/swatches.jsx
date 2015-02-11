import React from 'react/addons';
import Swatch from './swatch.jsx';

const Swatches = React.createClass({
  mixins: [React.addons.PureRenderMixin],

  render: function() {
    return (
      <div className="form-group">
        <label>{this.props.labelText}</label>
        <div>
          {this.props.options.map((opt) => {
            let isChecked = opt.color == this.props.selected;
            return <Swatch key={opt.color} {...opt} handleChange={this.props.handleChange} checked={isChecked} />;
          })}
        </div>
      </div>
    )
  }
});

export default Swatches;
