import React from 'react';
import { View } from 'react-native';
import StarRating from 'react-native-star-rating';

//Styling
import styles from './style'

//Theme
import { Color } from '../../theme'

// //Constant
const { primary } = Color


export default function RatingStar(props) {
    const {
        containerstyling = {},
        starCount = 2,
        onPress = () => {},
        starSize = 40
    } = props

    return <View style={[styles.container, containerstyling]} >
        <StarRating
        disabled={false}
        maxStars={5}
        rating={starCount}
        selectedStar={onPress}
        fullStarColor={primary}
        starSize={starSize}
      />
    </View>
}