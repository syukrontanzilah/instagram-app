import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ProfilePicture from '../ProfilePicture'

const Story = ({ imageUri, name }) => {
    return (
        <View style={styles.container}>
            <ProfilePicture uri={imageUri} />
            <Text
                numberOfLines={1}
                style={styles.name}>{name.length < 12 ? `${name}` : `${name.substring(0, 12)}...`}</Text>
        </View>
    )
}

export default Story

const styles = StyleSheet.create({
    container: {
        marginRight: 10,
        alignItems: 'center',
    },
    name: {
        fontSize: 14,
        color: '#474747'
    }
})
