import React from "react";
import { FlatList, View } from "react-native";

//Styles
import styles from './styles'

export default function Grid(props) {

    const {
        data = [],
        renderItem = () => { },
        numColumns = 2
    } = props

    return (
        <View style={styles.mainContainer}>
            <FlatList
                data={data}
                renderItem={renderItem}
                numColumns={numColumns} />
        </View>
    );
}
