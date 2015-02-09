import React from 'react';
import FormInput from './form_input.jsx';
import FormTextarea from './form_textarea.jsx';
import FormSelect from './form_select.jsx';
import Swatches from './swatches.jsx';
import Dropzone from './dropzone.jsx';

const MemeControls = React.createClass({
  render: function() {
    let textAlignOptions = [
      { value: "left", label: "Left" },
      { value: "center", label: "Center" },
      { value: "right", label: "Right" }
    ];

    let overlayOptions = [
      { color: "#000000", label: "Black" },
      { color: "#91C000", label: "Green" },
      { color: "#22A1E2", label: "Blue" },
      { color: "#4C46AB", label: "Purple" },
      { color: "#D71037", label: "Red" }
    ];

    return (
      <div>
        <FormTextarea
          elementId="headline"
          labelText="Headline"
          text={this.props.headline}
          handleChange={this.props.headlineChange} />
        <FormSelect
          elementId="textAlign"
          labelText="Text Alignment"
          value={this.props.textAlign}
          options={textAlignOptions}
          handleChange={this.props.textAlignChange} />
        <Swatches
          selected={this.props.overlayColor}
          options={overlayOptions}
          labelText="Overlay"
          handleChange={this.props.overlayChange} />
        <Dropzone handleDrop={this.props.handleDrop} />
      </div>
    );
  }
});

export default MemeControls;
