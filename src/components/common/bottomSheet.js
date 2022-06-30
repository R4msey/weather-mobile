import React, {Component} from 'react';
import {
  View,
  Modal,
  TouchableOpacity,
  Animated,
  PanResponder,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {colors} from '../../theme/colors';

const {height} = Dimensions.get('screen');
export class BottomSheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      animatedHeight: new Animated.Value(0),
      pan: new Animated.ValueXY(),
      data: {},
    };
    this.createPanResponder(props);
  }

  setModalVisible(visible, h) {
    const {closeFunction, height} = this.props;
    const {animatedHeight, pan} = this.state;
    if (visible) {
      this.setState({modalVisible: visible});
      Animated.timing(animatedHeight, {
        toValue: h || height,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(animatedHeight, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start(() => {
        pan.setValue({x: 0, y: 0});
        this.setState({
          modalVisible: visible,
          animatedHeight: new Animated.Value(0),
        });
        if (typeof closeFunction === 'function') closeFunction();
      });
    }
  }

  createPanResponder(props) {
    const {height} = props;
    const {pan} = this.state;
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gestureState) => {
        if (gestureState.dy > 0) {
          Animated.event([null, {dy: pan.y}], {
            useNativeDriver: false,
          })(e, gestureState);
        }
      },
      onPanResponderRelease: (e, gestureState) => {
        const gestureLimitArea = height / 3;
        const gestureDistance = gestureState.dy;
        if (gestureDistance > gestureLimitArea) {
          this.setModalVisible(false);
        } else {
          Animated.spring(pan, {
            toValue: {x: 0, y: 0},
            useNativeDriver: false,
          }).start();
        }
      },
    });
  }

  show() {
    this.setModalVisible(true);
  }
  status() {
    return this.state.modalVisible;
  }

  changeHeight(height) {
    this.setModalVisible(true, height);
  }
  close() {
    this.setModalVisible(false);
  }

  render() {
    const {
      children,
      draggable = true,
      onClose = () => this.close(),
      visible = false,
    } = this.props;
    const {animatedHeight, pan, modalVisible} = this.state;
    const panStyle = {
      transform: pan.getTranslateTransform(),
    };
    return (
      <>
        {modalVisible && (
          <View
            style={[
              styles.wrapper,
              {
                height: height,
              },
            ]}>
            <TouchableOpacity
              style={styles.background}
              activeOpacity={1}
              onPress={onClose}
            />
            <Animated.View
              style={[
                panStyle,
                styles.container,
                {
                  height: animatedHeight,
                  overflow: visible ? 'visible' : 'hidden',
                },
              ]}>
              <Animated.View
                {...(draggable && this.panResponder.panHandlers)}
                style={styles.draggableContainer}>
                <View style={styles.draggableIcon} />
              </Animated.View>
              {children}
            </Animated.View>
          </View>
        )}
      </>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
  },
  background: {
    flex: 1,
  },
  container: {
    width: '100%',
    height: 0,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  draggableIcon: {
    alignSelf: 'center',
    width: 40,
    height: 5,
    backgroundColor: colors.gray,
    borderRadius: 5,
  },
  draggableContainer: {
    height: 40,
    justifyContent: 'center',
    backgroundColor: colors.dark,
    alignItems: 'center',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
});
