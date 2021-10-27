import React from 'react'
import { View, Platform } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import Geolocation from 'react-native-geolocation-service';
import { request, PERMISSIONS } from 'react-native-permissions'

//Utils
import { Images } from '../../utils'

//Components
import { Spinner } from '../index'

//Styling
import styles from './styles'

//Constants
const { icon_location } = Images

export default class MyMap extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            location: { latitude: 0, longitude: 0 },
            loader: true
        }
    }
    
    componentDidMount() {
        this.start()
    }

    start = async () => {
        const result = await this.checkPermissions()
        if (result) this.getLocation()
        else this.checkPermissions()
    }

    checkPermissions = async () => {
        if (Platform.OS === 'android') {
            const coarse = await request(PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION)
            const fine = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
            if (coarse !== 'granted' || fine !== 'granted') {
                return false
            } else {
                this.getLocation()
            }
        }
    }

    getLocation = async () => {
        const { dragHandler = () => { } } = this.props
        Geolocation.getCurrentPosition(
            (position) => {
                const location = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                }
                this.setState({
                    location,
                    loader: false
                }, () => {
                    dragHandler(location)
                })
            },
            (error) => {
                console.log(error.code, error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        )
    }

    dragLocation = (e) => {
        const { dragHandler = () => { } } = this.props
        this.setState({
            location: e.nativeEvent.coordinate
        })
        dragHandler(e.nativeEvent.coordinate)
    }

    render() {
        const {
            isEdit = false,
            containerStyling = {}
        } = this.props
        const { location, loader } = this.state

        if (loader) return <View style={[styles.container, containerStyling]}>
            <Spinner imageShown={false} />
        </View>

        return (
            <View style={[styles.container, containerStyling]}>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    initialRegion={{
                        ...location,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    }}
                    showsUserLocation={true}
                >
                    <Marker
                        draggable={isEdit}
                        coordinate={location}
                        coordinate={{
                            latitude: location && location.latitude ? location.latitude : 0,
                            longitude: location && location.longitude ? location.longitude : 0,
                        }}
                        image={icon_location}
                        onDragEnd={this.dragLocation}
                    />
                </MapView>
            </View>
        )
    }
}
