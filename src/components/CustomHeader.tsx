import React from 'react';
import { View, Text, Image } from 'react-native';

import images from '../assets/images';
import styles from '../style';
import { fontFamilys, colors } from '../constants';


const CustomHeader = () => {
    return (
        <View style={styles.header}>
            <View style={styles.headerContainer}>
                <View style={styles.rowCenter}>
                    <View style={{ height: 10, width: 20, marginRight: 10 }}>
                        <Image source={images.MENU} style={styles.fullScreen} />
                    </View>
                    <Text style={{
                        fontFamily: fontFamilys['700'],
                        color: colors['dark']
                    }}>Inbox</Text>
                </View>
                <View style={styles.rowCenter}>
                    <View style={{ height: 16.1, width: 18.96,  marginRight: 10  }}>
                        <Image source={images.CHECK} style={styles.fullScreen} />
                    </View>
                    <View style={{ height: 23, width: 23 }}>
                        <Image source={images.PLUS} style={styles.fullScreen} />
                    </View>
                </View>
            </View>
        </View>
    );
};

export default CustomHeader;

