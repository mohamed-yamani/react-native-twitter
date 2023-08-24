import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const TweetContent = ({tweet}) => {
    const { navigate } = useNavigation();


    const { id, author, fullText, retweetCount, replyCount, favoriteCount } = tweet;
    const { name, screen_name, avatar } = author;

  return (
        <View style={styles.container}>
            <Image source={{uri: avatar}} style={styles.avatar} />
            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.username}>@{screen_name}</Text>
                </View>
                <Text style={styles.body}
                >{fullText}</Text>

                    <View style={styles.footer}>
                        <Pressable onPress={() => navigate('TweetDetails', {tweet})}>
                            <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
                                <Ionicons name="chatbubble-outline" size={20} color="grey" />
                                <Text style={styles.footerText}>{replyCount}</Text>
                            </View>
                        </Pressable>
                        <Pressable onPress={() => navigate('TweetDetails', {tweet})}>
                            <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
                                <Ionicons name="repeat-outline" size={20} color="grey" />
                                <Text style={styles.footerText}>{retweetCount}</Text>
                            </View>
                        </Pressable>
                        <Pressable onPress={() => navigate('TweetDetails', {tweet})}>
                            <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
                                <Ionicons name="heart-outline" size={20} color="grey" />
                                <Text style={styles.footerText}>{favoriteCount}</Text>
                            </View>
                        </Pressable>
                        <Pressable onPress={() => navigate('TweetDetails', {tweet})}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Ionicons name="share-outline" size={20} color="grey" />
                                </View>
                        </Pressable>

                    </View>
            </View>
        </View>
    );
}

export default TweetContent;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
        borderBottomWidth: 0.5,
        borderColor: 'lightgrey',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    content: {
        flex: 1,
        marginLeft: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    name: {
        fontWeight: 'bold',
    },
    username: {
        color: 'grey',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    footerText: {
        color: 'grey',
    },
    body: {
        marginTop: 10,
        lineHeight: 18,
    },
});