import React from 'react';
import { Button, BackHandler } from 'react-native';
import SendIntentAndroid from 'react-native-send-intent';

const App = () => {
  const packageName = 'in.sis.mobile.pod'
  const onPressLearnMore = () => {
    // SendIntentAndroid.sendText({
    //   title: 'Please share this text',
    //   text: 'Lorem ipsum dolor sit amet, per error erant eu, antiopam intellegebat ne sed',
    //   type: SendIntentAndroid.isAppInstalled
    // });
    // SendIntentAndroid.isAppInstalled(packageName,
    //   { "com.mycorp.myapp.reason": "just because", "App2PropData2": "Lorem ipsum dolor sit amet, per error erant eu, antiopam intellegebat ne sed" }).then(
    //     isInstalled => {
    //       if (isInstalled) {
    //         SendIntentAndroid.openApp(packageName).then(
    //           console.log('opened')
    //         );
    //       } else {
    //         console.log('closed')
    //         BackHandler.exitApp();
    //       }
    //     },
    //   );
    SendIntentAndroid.openApp(packageName, {
      "sample": "just because",
      "com.mycorp.myapp.data": "must be a string",
    }).then(wasOpened => { console.log(wasOpened,'wasOpened')});

  }
  return (
    <Button
      onPress={onPressLearnMore}
      title="Learn More"
      color="#841584"
      accessibilityLabel="Learn more about this purple button"
    />
  )
}

export default App