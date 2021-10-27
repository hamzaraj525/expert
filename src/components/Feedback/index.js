import React, { useState } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

//Components
import { Modal, PrimaryButton, PrimaryHeading, Scrollbar, Checkbox } from '../../components'

//Themes
import { Color } from '../../theme'

//Utils
import { Helpers } from '../../utils'

//Styling
import styles from './styles'

//Constants
const { secondary } = Color
const { translateLang } = Helpers

const Feedback = (props) => {
    const [feed, selectFeed] = useState('')

    const changeLanguage = (key) => {
        return translateLang(props.selectedLanguages, key)
    }

    const {
        faqs = [
            changeLanguage('ansTryApp'), changeLanguage('ansOrderLater'), changeLanguage('ansServiceProvider'),
            changeLanguage('ansNotContacted'), changeLanguage('ansVisitTime'),
            changeLanguage('ansNotSuitable'), changeLanguage('ansChangeVisit'),
            changeLanguage('ansOther')
        ],
        selectOption = () => { },
        keepOrder = () => { },
        cancelOrder = () => { },
        selected = feed,
        isVisible = false
    } = props

    const handleSelection = item => {
        selectFeed(item)
        selectOption(item)
    }


    const questions = (question, id) => {
        return <Checkbox
            isChecked={question === selected}
            handleCheck={() => handleSelection(question)}
            key={id}
            label={question}
            styling={styles.ansContainer}
            textStyling={styles.ansText} />
    }


    return (
        <Modal isVisible={isVisible} modalStyling={styles.modal}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <PrimaryHeading
                        styling={styles.ask}
                        heading={changeLanguage('question')} />
                    <PrimaryHeading
                        styling={styles.suggest}
                        heading={changeLanguage('reason')} />
                </View>
                <View style={styles.section}>
                    <Scrollbar scrollViewStyle={styles.scroll}>
                        {faqs.map((val, ind) => questions(val, ind))}
                    </Scrollbar>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton
                        onPress={keepOrder}
                        rippleContainerBorderRadius={0}
                        label={changeLanguage('keepOrder')}
                        styling={styles.buttonContainerSecondary}
                        textStyling={styles.button} />
                    <PrimaryButton
                        onPress={cancelOrder}
                        rippleContainerBorderRadius={0}
                        rippleColor={secondary}
                        label={changeLanguage('cancelOrder')}
                        styling={styles.buttonContainerPrimary}
                        textStyling={styles.button} />
                </View>
            </View>

        </Modal>
    )
}

const mapStateToProps = (state) => ({
    selectedLanguages: state.setLanguageReducer.selectedLanguage
})

export default connect(mapStateToProps)(Feedback)