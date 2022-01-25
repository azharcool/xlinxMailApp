import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { colors } from '../constants';

interface PropTypes {
    isHighlighted: boolean,
}

export default function LinearLine(props: PropTypes) {
    const {isHighlighted} = props;
    const midColor = isHighlighted ? colors['gradientMidBlue'] : colors['gradientMidGray'];

    return (
        <>
            <LinearGradient
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                colors={[colors['transparent'],midColor, colors['transparent']]} style={{ ...styles.lenght, margin: 25 }}>

            </LinearGradient>
        </>
    )
};

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        height: '100%',
        backgroundColor: colors['white']
    },
    lenght: {
        height: 0.6,
        width: '70%'
    }
});
