import React from 'react';
import Review from './Review';
import { FlatList, StyleSheet } from 'react-native-web';
import { View } from 'react-native';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  lexContainer: {
    display: 'flex',
  },
});

const ItemSeparator = () => <View style={styles.separator} />;
const ReviewList = ({ reviews }) => {
  return (
    <div>
      <FlatList
        data={reviews}
        renderItem={({ item }) => <Review review={item} />}
        keyExtractor={({ id }) => id}
        ItemSeparatorComponent={ItemSeparator}
      />
    </div>
  );
};

export default ReviewList;
