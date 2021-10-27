import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import {
    View,
    Animated,
    TouchableWithoutFeedback,
} from 'react-native';

//Styling
import styles from './styles';

//Themes
import { Color } from '../../theme'

export default class RippleEffect extends PureComponent {
    static defaultProps = {
        ...TouchableWithoutFeedback.defaultProps,
        rippleColor: Color.primary,
        rippleOpacity: 0.30,
        rippleDuration: 400,
        rippleSize: 0,
        rippleContainerBorderRadius: 0,
        rippleCentered: false,
        rippleSequential: false,
        rippleFades: true,
        disabled: false,

        onRippleAnimation: (animation, callback) => animation.start(callback),
    };

    static propTypes = {
        ...Animated.View.propTypes,
        ...TouchableWithoutFeedback.propTypes,
        disabled: PropTypes.bool

    };

    constructor(props) {
        super(props);

        this.onLayout = this.onLayout.bind(this);

        this.unique = 0;
        this.mounted = false;

        this.state = {
            width: 0,
            height: 0,
            ripples: [],
        };
    }

    onLayout(event) {
        let { width, height } = event.nativeEvent.layout;
        let { onLayout } = this.props;

        if ('function' === typeof onLayout) {
            onLayout(event);
        }

        this.setState({ width, height });
    }

    render() {
        let {
            disabled,
            children,
            onPress,
            ...props
        } = this.props;

        return (
            <TouchableWithoutFeedback onPress={onPress}>
                <Animated.View {...props} pointerEvents='box-only'>
                    {children}
                    <View style={[styles.container]}>
                    </View>
                </Animated.View>
            </TouchableWithoutFeedback>
        );
    }
}
