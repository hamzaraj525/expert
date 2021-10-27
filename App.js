import React from 'react';

//REDUX configuration
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {store, persistor} from './src/configuration';

//Navigation
import Navigation from './src/navigation';

//Toast
import Toast from 'react-native-toast-message';

//Utils
import {Navigator} from './src/utils';

//Constants
const {setTopLevelNavigator} = Navigator;

export default function App() {
  console.disableYellowBox = true;

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Navigation
          ref={(navigatorRef) => {
            setTopLevelNavigator(navigatorRef);
          }}
        />
        <Toast ref={(ref) => Toast.setRef(ref)} />
      </PersistGate>
    </Provider>
  );
}
// Example to Send Text SMS on Button Click in React Native
// https://aboutreact.com/send-text-sms-in-react-native/

// import React in our code
// import React, {useEffect, useState} from 'react';

// // import all the components we are going to use
// import {
//   SafeAreaView,
//   StyleSheet,
//   View,
//   Text,
//   TouchableOpacity,
//   TextInput,
// } from 'react-native';

// // import SMS API
// import SendSMS from 'react-native-sms';

// const App = () => {
//   const [mobileNumber, setMobileNumber] = useState('03164558585');
//   const [bodySMS, setBodySMS] = useState(
//     'Please follow https://aboutreact.com',
//   );

//   useEffect(() => {
//     initiateSMS();
//   });
//   const initiateSMS = () => {
//     // Check for perfect 10 digit length
//     if (mobileNumber.length != 11) {
//       alert('Please insert correct contact number');
//       return;
//     }

//     SendSMS.send(
//       {
//         // Message body
//         body: 'hello',
//         // Recipients Number
//         recipients: ['03228434863', '03164558585'],
//         // An array of types
//         // "completed" response when using android
//         successTypes: ['sent', 'queued'],
//       },
//       (completed, cancelled, error) => {
//         if (completed) {
//           console.log('SMS Sent Completed');
//         } else if (cancelled) {
//           console.log('SMS Sent Cancelled');
//         } else if (error) {
//           console.log('Some error occured');
//         }
//       },
//     );
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.container}>
//         <Text style={styles.titleText}>
//           Example to Send Text SMS on Button Click in React Native
//         </Text>
//         <Text style={styles.titleTextsmall}>Enter Mobile Number</Text>
//         {/* <TextInput
//           value={mobileNumber}
//           onChangeText={(mobileNumber) => setMobileNumber(mobileNumber)}
//           placeholder={'Enter Conatct Number to Call'}
//           keyboardType="numeric"
//           style={styles.textInput}
//         /> */}
//         <Text style={styles.titleTextsmall}>Enter SMS body</Text>
//         {/* <TextInput
//           value={bodySMS}
//           onChangeText={(bodySMS) => setBodySMS(bodySMS)}
//           placeholder={'Enter SMS body'}
//           style={styles.textInput}
//         /> */}
//         <TouchableOpacity
//           activeOpacity={0.7}
//           style={styles.buttonStyle}
//           onPress={initiateSMS}>
//           <Text style={styles.buttonTextStyle}>Send Message</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     padding: 10,
//     textAlign: 'center',
//   },
//   titleText: {
//     fontSize: 22,
//     textAlign: 'center',
//     fontWeight: 'bold',
//   },
//   titleTextsmall: {
//     marginVertical: 8,
//     fontSize: 16,
//   },
//   buttonStyle: {
//     justifyContent: 'center',
//     marginTop: 15,
//     padding: 10,
//     backgroundColor: '#8ad24e',
//   },
//   buttonTextStyle: {
//     color: '#fff',
//     textAlign: 'center',
//   },
//   textInput: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     width: '100%',
//     paddingHorizontal: 10,
//   },
// });
