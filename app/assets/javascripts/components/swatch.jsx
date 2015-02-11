import React from 'react/addons';

const Swatch = React.createClass({
  mixins: [React.addons.PureRenderMixin],

  render: function() {
    let style = {
      backgroundColor: this.props.color
    };

    return <input className="swatch" type="radio" name="swatch" style={style} value={this.props.color} onChange={this.props.handleChange} defaultChecked={this.props.checked} />
  }
});

export default Swatch;
