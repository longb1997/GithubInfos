import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import Spinner from 'react-native-spinkit';
import {Colors} from '@config';
import {showLoading, stopLoad} from '../loading/actions';
import {connect} from 'react-redux';

function ModalLoading(props) {
  return (
    <View>
      <Modal
        visible={props.loading}
        hideModalContentWhileAnimating
        useNativeDriver={true}
        style={styles.container}>
        <View style={styles.content}>
          <Spinner
            style={{marginBottom: 20, marginRight: 6}}
            isVisible={true}
            size={42}
            type={'FadingCircleAlt'}
            color={Colors.blue}
          />
          <Text style={styles.textStyle}>{props.loadingText}</Text>
        </View>
      </Modal>
    </View>
  );
}

const mapState = (state) => {
  return {
    loading: state.loading.isLoading,
    loadingText: state.loading.loadingText,
  };
};

const mapDispatch = {
  showLoading,
  stopLoad,
};

export default connect(mapState, mapDispatch)(ModalLoading);

const styles = StyleSheet.create({
  container: {
    margin: 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.65)',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 12,
    width: 140,
    height: 110,
  },
  textStyle: {
    color: Colors.black,
    fontSize: 15,
  },
});
