import React from 'react/addons';

const Slider = React.createClass({
  render: function() {
    let opacityAsPercent = this.props.value * 100;
    
    let style = {
      width: `${opacityAsPercent}%`,
      position: "relative"
    }

    // return (
    //   <div>
    //     <label>{this.props.labelText}</label>
    //     <div className="progress">
    //       <div className="progress-bar"role="progressbar" style={style}>
    //         <div id="opacity-handle"></div>
    //       </div>
    //     </div>
    //   </div>
    // )
    return (
      <div className="form-group">
        <label>{this.props.labelText}</label>
        <input type="range" min="0" max="100" step="1" value={this.props.value * 100} onChange={this.props.handleChange} />
      </div>
    )
  }
});

export default Slider;
