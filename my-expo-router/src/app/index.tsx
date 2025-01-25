import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to my expo router demo</Text>
      <Link href="/customer/customerTab1" style={styles.link}>
        <Text>Go to customer</Text>
      </Link>
      <Link href="/accounts" style={styles.link}>
        <Text>Go to accounts</Text>
      </Link>
      <Link href="/about" style={styles.link}>
        <Text>About me</Text>
      </Link>
    </View>
  )
}

export default index

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    link:{
        padding: 10,
        bordercolor: 'black',
        borderwidth: 1,
        margin: 5,
        color: 'black',
        backgroundColor: 'lightgrey',
        width: 200

    }
}