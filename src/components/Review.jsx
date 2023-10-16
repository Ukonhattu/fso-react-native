import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
  },
  rating: {
    alignSelf: 'flex-start',
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#0366d6',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  ratingText: {
    color: '#0366d6',
    fontWeight: 'bold',
    fontSize: 20,
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  username: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  date: {
    color: '#666',
    marginBottom: 5,
  },
  text: {
    marginBottom: 5,
  },
});

const Review = ({ review }) => {
  return (
    <View style={styles.container}>
      { review.repository ? <Text fontWeight="bold">{review.repository.fullName}</Text> : null }
      <View style={styles.rating}>
        <Text style={styles.ratingText}>{review.rating}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.username}>{review.user.username}</Text>
        <Text style={styles.date}>{new Date(review.createdAt).toLocaleDateString()}</Text>
        <Text style={styles.text}>{review.text}</Text>
      </View>
    </View>
  );
};

export default Review;
