import React from 'react/addons';

const FormInput = React.createClass({
  mixins: [React.addons.PureRenderMixin],

  render: function() {
    return (
      <div className="form-group">
        <label htmlFor="{this.props.elementId}">{this.props.labelText}</label>
        <input type="text" className="form-control" id="{this.props.elementId}" value={this.props.text} onChange={this.props.handleChange} />
      </div>
    );
  }
});

export default FormInput;
