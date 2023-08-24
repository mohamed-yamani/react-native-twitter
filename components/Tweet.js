import { useNavigation } from '@react-navigation/native';
import React from 'react';
import TweetContent from './TweetContent';
import { Text, View, Image, StyleSheet, Pressable } from 'react-native';


const Tweet = ({tweet}) => {
  const { navigate } = useNavigation();
  return (
    <Pressable onPress={() => navigate('TweetDetailsScreen', { tweet })}>
        <TweetContent tweet={tweet} />
    </Pressable>
  )
}

export default Tweet

