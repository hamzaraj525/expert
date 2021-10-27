import React, { useState } from "react";
import { View } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker'

//Icons
import Entypo from 'react-native-vector-icons/Entypo'

//Styles
import styles from './styles'

//Components
import { Grid, PrimaryButton } from '../index'

//Theme
import { Color, Constants } from '../../theme'

//Constant
const { secondary, primary, white } = Color
const { schedule } = Constants

export default function SchedulePagination(props) {
    const [activePage, handlePage] = useState(0)
    const [activeIndex, handleIndex] = useState(null)
    const [isCalender, handleCalender] = useState(false)
    const [date, handleDate] = useState(new Date())

    const {
        data = schedule,
        numColumns = 2
    } = props

    const btnEvent = (ind, timing) => {
        const { getTiming = () => { } } = props
        handleIndex(ind)
        getTiming(timing.toLowerCase())
    }

    const next = () => {
        handleIndex(null)
        handlePage(activePage + 1)
    }

    const back = () => {
        handleIndex(null)
        handlePage(activePage - 1)
    }

    const selectDate = (event, date) => {
        if (!date) {
            handleCalender(false)
        } else {
            const { getDate = () => { } } = props
            handleCalender(false)
            handleDate(date)
            getDate(date)
        }
    }

    const renderItem = ({ index, item }) => {
        const { title, isAvail } = item
        return <PrimaryButton
            onPress={() => btnEvent(index, title)}
            rippleContainerBorderRadius={0}
            label={title}
            disabled={isAvail}
            textStyling={[styles.btnText, isAvail ? styles.textDisable : { color: activeIndex == index ? white : secondary }]}
            styling={[styles.btn, isAvail ? styles.btnDisable : { backgroundColor: activeIndex == index ? primary : white, borderColor: activeIndex === index ? primary : secondary }]}
            rippleColor={secondary}
        />
    }

    return (
        <View style={styles.container}>
            <View style={styles.navHeader}>
                <PrimaryButton label={date.toString().slice(0, 16)} rippleColor={secondary} rippleContainerBorderRadius={0}
                    styling={styles.calanderContainer} onPress={() => handleCalender(true)} textStyling={styles.textStyling} />
                {/* {activePage > 0 ? <RippleEffect rippleColor={secondary} onPress={back}>
                    <Entypo name="chevron-left" style={styles.chevIcons} />
                </RippleEffect>
                    :
                    <View style={styles.disableChevs} />
                } */}
                {/* <PrimaryHeading heading={!!data.length ? data[activePage].label : ''} styling={styles.headerTitle} />
                {!!data.length && activePage + 1 !== data.length ? <RippleEffect rippleColor={secondary} onPress={next}>
                    <Entypo name="chevron-right" style={styles.chevIcons} />
                </RippleEffect> :
                    <View style={styles.disableChevs} />} */}
            </View>
            {!!data.length && <Grid numColumns={numColumns} data={data[activePage].timings} renderItem={renderItem} />}
            {isCalender &&
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    minimumDate={new Date()}
                    mode='date'
                    display="default"
                    onChange={(event, date) => selectDate(event, date)}
                />
            }
        </View>
    );
}
