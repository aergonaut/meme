import React from 'react';

const FormTextarea = React.createClass({
  render: function() {
    return (
      <div className="form-group">
        <label htmlFor={this.props.elementId}>{this.props.labelText}</label>
        <textarea className="form-control" id={this.props.elementId} value={this.props.text} onChange={this.props.handleChange}></textarea>
      </div>
    )
  }
});

export default FormTextarea;
