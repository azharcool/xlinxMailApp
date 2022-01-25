import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, StatusBar, ViewStyle } from 'react-native';

import {colors} from '../constants';

interface PropTypes {
    // color: string,
    isLight: boolean,
    style: ViewStyle
    children?: JSX.Element | JSX.Element[]
}

export default function Wrapper(props: PropTypes) {
    const {isLight,children, style} = props;
    const bgColor = isLight ? colors['body'] : colors['white'];

    return (
        <SafeAreaView style={{...styles.wrapper, ...style}}>
            <StatusBar
                barStyle={isLight ? 'light-content' : 'dark-content'}
                backgroundColor={bgColor}
            />
            {children}
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        height: '100%',
        backgroundColor:colors['white'],
    
        alignItems:'center'
    },
});
