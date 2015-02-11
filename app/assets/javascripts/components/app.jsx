import React from 'react/addons';
import MemeCanvas from './meme_canvas.jsx';
import MemeControls from './meme_controls.jsx';
import {Map} from 'immutable';

const App = React.createClass({
  mixins: [React.addons.PureRenderMixin],

  getInitialState: function() {
    return Map({
      "overlay": true,
      "overlayColor": "#000000",
      "overlayAlpha": 0.3,
      "headline": "Write your own headline",
      "textAlign": "left",
      "backgroundImageFile": false
    });
  },

  headlineChange: function(event) {
    this.replaceState(this.state.set("headline", event.target.value));
  },

  handleTextAlignChange: function(event) {
    this.replaceState(this.state.set("textAlign", event.target.value));
  },

  handleOverlayChange: function(event) {
    this.replaceState(this.state.set("overlayColor", event.target.value));
  },

  handleOpacityChange: function(event) {
    this.replaceState(this.state.set("overlayAlpha", event.target.value / 100));
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
      this.replaceState(this.state.set("backgroundImageFile", img));
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
            <MemeCanvas {...this.state.toObject()} width={755} height={378} />
          </div>
          <div className="col-lg-4">
            <MemeControls
              {...this.state.toObject()}
              headlineChange={this.headlineChange}
              textAlignChange={this.handleTextAlignChange}
              overlayChange={this.handleOverlayChange}
              opacityChange={this.handleOpacityChange}
              handleDrop={this.handleDrop} />
          </div>
        </div>
      </div>
    )
  }
});

export default App;
