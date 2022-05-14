import React, { useState, useEffect } from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';


const CHECK_CONN_BUTT_TITLE_CHECK = "Check Connection"
const CHECK_CONN_BUTT_TITLE_RESET = "Reset"


const ConnectionStatusViewer = () => {
  const [connStatusText, setConnStatusText] = useState('')
  const [checkConnButtTitle, setCheckConnButtTitle] = useState(CHECK_CONN_BUTT_TITLE_CHECK)

  const onPressCheckConnection = () => {
    let newText = "Not implemented yet"
  
    if (connStatusText) {
      setConnStatusText('')
      setCheckConnButtTitle(CHECK_CONN_BUTT_TITLE_CHECK)
      
    } else {
      setConnStatusText(newText)
      setCheckConnButtTitle(CHECK_CONN_BUTT_TITLE_RESET)
    }
  }

  return (
    <>
      <Text>{connStatusText}</Text>

      <Button
        onPress={onPressCheckConnection}
        title={checkConnButtTitle}
      />
    </>
  )
}


export default ConnectionStatusViewer