/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import RNSaveView from 'react-native-save-view';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View
          ref={ref => (this._viewRef = ref)}
          collapsable={false}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'pink',
            width: 300,
            height: 300,
          }}>
          <Text>Hello World</Text>
        </View>
      </View>
    );
  }

  componentDidMount() {
    this._saveView();
  }

  async _saveView() {
    try {
      await this._makeSnapshotPNG();
      await this._makeSnapshotPNGBase64();
    } catch (err) {
      console.log('err', err);
    }
  }

  async _makeSnapshotPNG() {
    await RNSaveView.saveToPNG(this._viewRef, '/sdcard/Download/view.png');
    // Check /sdcard/Download/view.png using Device File Explorer
  }

  async _makeSnapshotPNGBase64() {
    const base64 = await RNSaveView.saveToPNGBase64(this._viewRef);
    console.log('base64:', base64);
  }
}
