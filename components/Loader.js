import React from 'react'
import {View, ActivityIndicator} from 'react-native'

import styles from '../styles'

function Loader () {
  return (
    <View style={styles.center}>
      <ActivityIndicator size='large' />
    </View>
  )
}

export default Loader
