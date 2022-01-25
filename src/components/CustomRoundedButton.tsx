import React from 'react';
import { TouchableOpacity, Text, View, StyleProp, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { fontFamilys, colors } from './../constants';
import styles from './../style';

type PropsTypes = {
    propStyle?: StyleProp<ViewStyle>,
    title: string,
    onPressHandler: () => void
}

const CustomRoundedButton = (props: PropsTypes) => {
    const {propStyle, title, onPressHandler} = props;
    return (
        <View style={[styles.center, { width: '100%', height: 52 }, propStyle]}>
            <LinearGradient
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                colors={[colors['start'], colors['end']]}
                style={[styles.fullScreen, { borderRadius: 100 }]}
            >
                <TouchableOpacity onPress={onPressHandler}
                 style={{ ...styles.fullScreen, ...styles.center }}>
                    <Text style={{ fontFamily: fontFamilys['700'], color: colors['secondaryBg'] }}>{title}</Text>
                </TouchableOpacity>
            </LinearGradient>
        </View>
    );
};

export default CustomRoundedButton;