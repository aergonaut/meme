import React from 'react/addons';

const MemeCanvas = React.createClass({
  mixins: [React.addons.PureRenderMixin],

  componentDidMount: function() {
    this.canvas = this.refs.canvas.getDOMNode();
    this.ctx = this.canvas.getContext('2d');
    this.renderCanvas();
  },

  componentDidUpdate: function() {
    this.ctx.clearRect(0, 0, this.props.width, this.props.height);
    this.renderCanvas();
  },

  renderCanvas: function() {
    this.renderBackgroundImage();
    this.renderOverlay();
    this.renderText();
    let download = this.refs.download.getDOMNode();
    download.setAttribute('href', this.canvas.toDataURL());
  },

  renderBackgroundImage: function() {
    if (this.props.backgroundImageFile) {
      this.ctx.save();
      let frame = { width: this.props.width, height: 358 };

      let dx = 0, dy = 0;

      let dWidth = this.props.backgroundImageFile.width, dHeight = this.props.backgroundImageFile.height;

      let sx = Math.floor((this.props.backgroundImageFile.width - frame.width) / 2),
          sy = Math.floor((this.props.backgroundImageFile.height - frame.height) / 2),
          sWidth = frame.width,
          sHeight = frame.height;

      this.ctx.drawImage(this.props.backgroundImageFile, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
      this.ctx.restore();
    }
  },

  renderOverlay: function() {
    this.ctx.save();
    this.ctx.globalAlpha = this.props.overlayAlpha;
    this.ctx.fillStyle = this.props.overlayColor;
    this.ctx.fillRect(0, 0, this.props.width, this.props.height);
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
    let xOffset = 50;
    if (this.props.textAlign == "center") {
      xOffset = 377;
    } else if (this.props.textAlign == "right") {
      xOffset = this.props.width - 50;
    }
    this.ctx.fillText(this.props.headline, xOffset, 75);
    this.ctx.restore();
  },

  render: function() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-12">
            <canvas ref="canvas" id="meme-canvas" width={this.props.width} height={this.props.height}></canvas>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <a ref="download" download="your_image.png" id="download" className="btn btn-default btn-lg btn-block">Download Image</a>
          </div>
        </div>
      </div>
    )
  }
});

export default MemeCanvas;
