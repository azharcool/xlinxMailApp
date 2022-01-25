import React from 'react';
import { StyleSheet } from 'react-native';

import { colors, fontFamilys } from '../constants';

const styles = StyleSheet.create({
    fullScreen: {
        width: '100%',
        height: '100%',
    },
    containerTop: { width: '90%', alignItems: 'center', height: '85%' },
    containerBottom: { width: '90%', alignItems: 'center' },
    center: {
        justifyContent: 'center', alignItems: 'center'
    },
    position: {
        position: 'absolute', top: 0, bottom: 0, left: 0, right: 0,
    },
    rowCenter: {
        flexDirection: 'row', alignItems: 'center'
    },
    header: { width: "100%", alignItems: 'center',
     borderBottomWidth: 0.6,
    borderBottomColor: colors['lightGray'] },
    headerContainer: {
        width: '90%', flexDirection: 'row',
        justifyContent: 'space-between', paddingVertical: 12
    }
});

export default styles;