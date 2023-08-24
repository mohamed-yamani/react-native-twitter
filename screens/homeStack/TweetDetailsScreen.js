import React, { useLayoutEffect } from 'react'
import { Text, SafeAreaView } from 'react-native'
import TweetContent from '../../components/TweetContent'
import { useRoute, useNavigation } from '@react-navigation/native'

export default function TweetDetailsScreen() {
    const navigation = useNavigation();
    const router = useRoute();
    const { tweet } = router.params;

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: () => <Text style={{fontWeight: 'bold', fontSize: 16, color: '#c2c2c2'
        }}>{ tweet.author.name }</Text>
        })
    }, []);

    return (
        <SafeAreaView style={{flex: 1}}>
            <TweetContent tweet={tweet} />
        </SafeAreaView>
    )
}