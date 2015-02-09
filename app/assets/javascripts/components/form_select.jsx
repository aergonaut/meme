import React from 'react';

const FormSelect = React.createClass({
  render: function() {
    return (
      <div className="form-group">
        <label htmlFor="{this.props.elementId}">{this.props.labelText}</label>
        <select className="form-control" id="{this.props.elementId}" onChange={this.props.handleChange} value={this.props.value}>
          {this.props.options.map((opt) => {
            return <option value={opt.value}>{opt.label}</option>;
          })}
        </select>
      </div>
    );
  }
});

export default FormSelect;
