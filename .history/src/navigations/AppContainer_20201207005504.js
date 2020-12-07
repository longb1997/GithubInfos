import {ModalLoading} from '@components';
import {showLoading, stopLoad} from '@loading/actions';
import MainStack from '@navigation/MainStack';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {connect} from 'react-redux';

const AppContainer = (props) => {
  return (
    <NavigationContainer>
      <MainStack />
      {/* <ModalLoading /> */}
    </NavigationContainer>
  );
};

const mapDispatch = {
  stopLoad,
  showLoading,
};

export default connect(null, mapDispatch)(AppContainer);
