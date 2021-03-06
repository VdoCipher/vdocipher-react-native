/**
 * VdoPlayerView component that can be dropped into a layout for video playback.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {requireNativeComponent, ViewPropTypes} from 'react-native';

export default class VdoPlayerView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullscreen: true,
      orientation: 'portrait',
    }
    this._propRef = 1;
  }

  seek = seekTargetMs => {
    if (this._root) {
      this._root.setNativeProps({seek: seekTargetMs});
    }
  }

  enterFullscreen = () => {
    if (this._root) {
      this._root.setNativeProps({fullscreen: true});
    }
  }

  exitFullscreen = () => {
    if (this._root) {
      this._root.setNativeProps({fullscreen: false});
    }
  }

  getPlaybackProperties = () => {
    if (this._root) {
      this._root.setNativeProps({playbackProperties: this._propRef++});
    }
  }

  _onInitSuccess = (event) => {
    if (this.props.onInitializationSuccess) {
      this.props.onInitializationSuccess(event.nativeEvent);
    }
  }

  _onInitFailure = (event) => {
    if (this.props.onInitializationFailure) {
      this.props.onInitializationFailure(event.nativeEvent);
    }
  }

  _onLoading = (embedInfo, event) => {
    if (this.props.onLoading) {
      this.props.onLoading({embedInfo, ...event.nativeEvent});
    }
  }

  _onLoaded = (embedInfo, event) => {
    if (this.props.onLoaded) {
      this.props.onLoaded({embedInfo, ...event.nativeEvent});
    }
  }

  _onLoadError = (embedInfo, event) => {
    if (this.props.onLoadError) {
      this.props.onLoadError({embedInfo, ...event.nativeEvent});
    }
  }

  _onPlayerStateChanged = (event) => {
    if (this.props.onPlayerStateChanged) {
      this.props.onPlayerStateChanged(event.nativeEvent);
    }
  }

  _onProgress = (event) => {
    if (this.props.onProgress) {
      this.props.onProgress(event.nativeEvent);
    }
  }

  _onBufferUpdate = (event) => {
    if (this.props.onBufferUpdate) {
      this.props.onBufferUpdate(event.nativeEvent);
    }
  }

  _onPlaybackSpeedChanged = (event) => {
    if (this.props.onPlaybackSpeedChanged) {
      this.props.onPlaybackSpeedChanged(event.nativeEvent.playbackSpeed);
    }
  }

  _onTracksChanged = (event) => {
    if (this.props.onTracksChanged) {
      this.props.onTracksChanged(event.nativeEvent);
    }
  }

  _onMediaEnded = (embedInfo, event) => {
    if (this.props.onMediaEnded) {
      this.props.onMediaEnded({embedInfo, ...event.nativeEvent});
    }
  }

  _onError = (embedInfo, event) => {
    if (this.props.onError) {
      this.props.onError({embedInfo, ...event.nativeEvent});
    }
  }

  _onPlaybackProperties = (event) => {
    if (this.props.onPlaybackProperties) {
      this.props.onPlaybackProperties(event.nativeEvent);
    }
  }

  _onEnterFullscreen = (event) => {
    if (this.props.onEnterFullscreen) {
      this.props.onEnterFullscreen();
    }
  }

  _onExitFullscreen = (event) => {
    if (this.props.onExitFullscreen) {
      this.props.onExitFullscreen();
    }
  }

  render() {
    return (
      <RCTVdoPlayerView ref={component => this._root = component}
        onInitSuccess={this._onInitSuccess}
        onInitFailure={this._onInitFailure}
        onVdoLoading={((embedInfo) => (event) => this._onLoading(embedInfo, event))(this.props.embedInfo)}
        onVdoLoaded={((embedInfo) => (event) => this._onLoaded(embedInfo, event))(this.props.embedInfo)}
        onVdoLoadError={((embedInfo) => (event) => this._onLoadError(embedInfo, event))(this.props.embedInfo)}
        onVdoPlayerStateChanged={this._onPlayerStateChanged}
        onVdoProgress={this._onProgress}
        onVdoBufferUpdate={this._onBufferUpdate}
        onVdoPlaybackSpeedChanged={this._onPlaybackSpeedChanged}
        onVdoTracksChanged={this._onTracksChanged}
        onVdoMediaEnded={((embedInfo) => (event) => this._onMediaEnded(embedInfo, event))(this.props.embedInfo)}
        onVdoError={((embedInfo) => (event) => this._onError(embedInfo, event))(this.props.embedInfo)}
        onVdoPlaybackProperties={this._onPlaybackProperties}
        onVdoEnterFullscreen={this._onEnterFullscreen}
        onVdoExitFullscreen={this._onExitFullscreen}
        {...this.props}
      />
    );
  }
}

VdoPlayerView.propTypes = {
  /* Native only */
  onInitSuccess: PropTypes.func,
  onInitFailure: PropTypes.func,
  onVdoLoading: PropTypes.func,
  onVdoLoaded: PropTypes.func,
  onVdoLoadError: PropTypes.func,
  onVdoPlayerStateChanged: PropTypes.func,
  onVdoProgress: PropTypes.func,
  onVdoBufferUpdate: PropTypes.func,
  onVdoPlaybackSpeedChanged: PropTypes.func,
  onVdoTracksChanged: PropTypes.func,
  onVdoMediaEnded: PropTypes.func,
  onVdoError: PropTypes.func,
  playbackProperties: PropTypes.number,
  onVdoPlaybackProperties: PropTypes.func,
  seek: PropTypes.number,
  fullscreen: PropTypes.bool,
  onVdoEnterFullscreen: PropTypes.func,
  onVdoExitFullscreen: PropTypes.func,

  /* Wrapper component public api */
  embedInfo: PropTypes.object,
  showNativeControls: PropTypes.bool,
  playWhenReady: PropTypes.bool,
  playbackSpeed: PropTypes.number,
  onInitializationSuccess: PropTypes.func,
  onInitializationFailure: PropTypes.func,
  onLoading: PropTypes.func,
  onLoaded: PropTypes.func,
  onLoadError: PropTypes.func,
  onPlayerStateChanged: PropTypes.func,
  onProgress: PropTypes.func,
  onBufferUpdate: PropTypes.func,
  onPlaybackSpeedChanged: PropTypes.func,
  onTracksChanged: PropTypes.func,
  onMediaEnded: PropTypes.func,
  onError: PropTypes.func,
  onPlaybackProperties: PropTypes.func,
  onEnterFullscreen: PropTypes.func,
  onExitFullscreen: PropTypes.func,

  /* Required */
  ...ViewPropTypes,
};

var RCTVdoPlayerView = requireNativeComponent('RCTVdoPlayerView', VdoPlayerView, {
  nativeOnly: {
    onInitSuccess: true,
    onInitFailure: true,
  }
});
