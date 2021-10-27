import React from 'react'
import { View, TextInput, ActivityIndicator } from 'react-native'

//Icons
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

//Components
import { ImageView, RippleEffect } from '../../components'

//Utils
import { Images } from '../../utils'

//Themes
import { Color } from '../../theme'

//Styling
import styles from './styles'

//Utils
import { Navigator } from '../../utils'

//Constants
const { icon_filter, icon_search } = Images
const { secondary, primary } = Color
const { navigate } = Navigator

export default SecondaryInput = (props) => {
    const {
        placeholder = 'WHAT ARE YOU LOOKING FOR?',
        isFilter = true,
        isSearch = true,
        isSend = false,
        searchHandler = () => navigate('SearchResult'),
        filterHandler = () => { },
        keyboardType = 'default',
        inputValue,
        inputHandler = () => { },
        sendHandler = () => { },
        containerStyling = {},
        inputStyling = {},
        isLoading = false,
        disabled = false,
        loaderColor = primary,
        loaderSize = 'small',
        editable = true
    } = props

    return (
        <View style={[styles.container, containerStyling]}>
            <View style={[styles.inputContainer, inputStyling]}>
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    keyboardType={keyboardType}
                    value={inputValue}
                    onChangeText={inputHandler}
                    editable={editable}
                />
            </View>
            <View style={styles.iconContainer}>
                {isLoading && <ActivityIndicator color={loaderColor} size={loaderSize} />}
                {isFilter && !isLoading && <RippleEffect disabled={disabled} rippleContainerBorderRadius={100} rippleColor={secondary} onPress={searchHandler}>
                    <ImageView local={icon_search} containerStyling={styles.inputContainer} styling={styles.img} />
                </RippleEffect>}
                {isSearch && <RippleEffect rippleContainerBorderRadius={100} rippleColor={secondary} onPress={filterHandler}>
                    <ImageView local={icon_filter} containerStyling={styles.inputContainer} styling={styles.img} />
                </RippleEffect>}
                {isSend && <RippleEffect rippleContainerBorderRadius={100} rippleColor={secondary} onPress={sendHandler}>
                    <MaterialIcons name="send" style={styles.sendIcon} />
                </RippleEffect>}
            </View>
        </View>
    )
}