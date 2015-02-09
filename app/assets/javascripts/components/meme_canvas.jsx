import React from 'react';

const MemeCanvas = React.createClass({
  componentDidMount: function() {
    let canvas = this.refs.canvas.getDOMNode();
    this.ctx = canvas.getContext('2d');
    this.renderCanvas();
  },

  componentDidUpdate: function() {
    this.ctx.clearRect(0, 0, 755, 378);
    this.renderCanvas();
  },

  renderCanvas: function() {
    this.renderOverlay();
    this.renderText();
  },

  renderOverlay: function() {
    this.ctx.save();
    this.ctx.globalAlpha = this.props.overlayAlpha;
    this.ctx.fillStyle = this.props.overlayColor;
    this.ctx.fillRect(0, 0, 755, 378);
    this.ctx.globaAlpha = 1;
    this.ctx.restore();
  },
  
  renderText: function() {
    this.renderHeadline();
    // this.renderSourceLine();
  },
  
  renderHeadline: function() {
    this.ctx.save();
    this.ctx.font = "italic 300 32px Lato";
    this.ctx.textAlign = this.props.textAlign;
    this.ctx.fillStyle = "#fff";
    this.ctx.fillText(this.props.headline, 50, 75);
    this.ctx.restore();
  },

  render: function() {
    return (
      <canvas ref="canvas" id="meme-canvas" width="755" height="378"></canvas>
    )
  }
});

export default MemeCanvas;
