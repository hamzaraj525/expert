import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

//Styling
import styles from './style'

//Utils
import { Helpers } from '../../utils'

//Component
import { Header, Scrollbar, ApprovalCard, PrimaryHeading } from '../../components'

//Constant
const { translateLang } = Helpers

function Approval(props) {

    const changeLanguage = (key) => {
        return translateLang(props.selectedLanguages, key)
    }

    const renderHeading = heading => {
        return <View style={styles.headingContainer}>
            <PrimaryHeading heading={changeLanguage(heading)} />
        </View>
    }

    return <View style={styles.container}>
        <Header containerStyling={styles.makeBg} isUser={false} title={changeLanguage('approval')} />
        <Scrollbar>
            {renderHeading('resolved')}
            <ApprovalCard containerStyling={styles.resolvedCards} />
            {renderHeading('appointments')}
            <ApprovalCard containerStyling={styles.appointmentsCards} />
            <ApprovalCard containerStyling={styles.appointmentsCards} />
            <ApprovalCard containerStyling={styles.appointmentsCards} />
        </Scrollbar>
    </View>
}

const mapStateToProps = (state) => ({
    selectedLanguages: state.setLanguageReducer.selectedLanguage
})

export default connect(mapStateToProps)(Approval)