import { NavigationActions, StackActions } from "react-navigation";

let navigator;

function setTopLevelNavigator(navigatorRef) {
  navigator = navigatorRef;
}

function navigate(routeName, params) {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  );
}


function push(routeName, params) {
  navigator.dispatch(
    StackActions.push({
      routeName,
      params
    })
  );
}



function navigateAndReset(routeName, params = {}) {
  navigator.dispatch(
    StackActions.reset({
      index: 0,
      key: null,
      actions: [
        NavigationActions.navigate({
          routeName,
          params
        })
      ]
    })
  );
}

function goBack() {
  navigator.dispatch(NavigationActions.back());
}

export default {
  navigate,
  navigateAndReset,
  setTopLevelNavigator,
  goBack,
  push
};
