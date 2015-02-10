import React from 'react';
import MemeCanvas from './meme_canvas.jsx';
import MemeControls from './meme_controls.jsx';

const App = React.createClass({
  getInitialState: function() {
    return {
      "overlay": true,
      "overlayColor": "#000000",
      "overlayAlpha": "0.5",
      "headline": "Write your own headline",
      "textAlign": "left",
      "backgroundImageFile": false
    }
  },

  headlineChange: function(event) {
    this.setState({ "headline": event.target.value });
  },

  handleTextAlignChange: function(event) {
    this.setState({ "textAlign": event.target.value });
  },

  handleOverlayChange: function(event) {
    this.setState({ "overlayColor": event.target.value });
  },

  handleDrop: function(event) {
    event.stopPropagation();
    event.preventDefault();

    let dt = event.dataTransfer,
        files = dt.files,
        file = files[0];

    let img = new Image(),
        reader = new FileReader();

    reader.onload = (e) => {
      img.src = e.target.result;
      this.setState({ "backgroundImageFile": img });
    }
    reader.readAsDataURL(file);
  },

  render: function() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-12 page-header">
            <h1>Image Generator</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <MemeCanvas {...this.state} width={755} height={378} />
          </div>
          <div className="col-lg-4">
            <MemeControls
              {...this.state}
              headlineChange={this.headlineChange}
              textAlignChange={this.handleTextAlignChange}
              overlayChange={this.handleOverlayChange}
              handleDrop={this.handleDrop} />
          </div>
        </div>
      </div>
    )
  }
});

export default App;
