import React from 'react';
import { AppLoading, Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import MainNavigation from './navigation/MainNavigation';
import { StatusBar } from 'react-native';

export default class App extends React.Component {
  state = {
    loaded: false
  };

  handleError = (error) => console.log(error);

  handleLoaded = () => this.setState({ loaded: true });

  loadAssets = async () => {
    await Font.loadAsync({
      ...Ionicons.font
    });
  };

  render() {
    const { loaded } = this.state;
    if (loaded) {
      return (
        <React.Fragment>
          <StatusBar barStyle="light-content" />
          <MainNavigation />
        </React.Fragment>
      );
    } else {
      return <AppLoading startAsync={this.loadAssets} onFinish={this.handleLoaded} onError={this.handleError} />;
    }
  }
}
