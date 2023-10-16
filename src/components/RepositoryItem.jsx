// render repository item react-native
import { View, StyleSheet, Image, Button } from "react-native";
import Text from "./Text";
import { Linking } from 'react-native';


const styles = StyleSheet.create({
    flexItemA: {
      flexGrow: 0,
      backgroundColor: '#F5F5F5',
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
    },
    flexItemB: {
      flexGrow: 1,
      backgroundColor: '#ECEFF1',
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
    },
    imageContainer: {
      width: 50,
      height: 50,
      marginRight: 10,
    },
    image: {
      width: '100%',
      height: '100%',
      borderRadius: 5,
    },
    textContainer: {
      flex: 1,
      flexDirection: 'column',
    },
    nameContainer: {
      marginBottom: 5,
    },
    descriptionContainer: {
      marginBottom: 5,
    },
    languageContainer: {
      marginBottom: 5,
    },
    statsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10,
    },
    stat: {
      fontSize: 14,
      color: '#757575',
    },
    description: {
      fontSize: 14,
      color: '#757575',
    },
    language: {
      color: '#4CAF50',
    },
  });

  const formatNumber = (number) => {
    if (number >= 1000) {
      return `${(number / 1000).toFixed(1)}K`;
    }
    return number.toString();
  };


const RepositoryItem = ({ item, index = 0, isLone }) => {
  const flexItem = index % 2 === 0 ? styles.flexItemA : styles.flexItemB;

  const handleOpenUrl = () => {
    Linking.openURL(item.url);
  };
  
  if (!item) {
    return null;
  }

  return (
    <View style={flexItem} testID="repositoryItemContainer">
      <View style={styles.imageContainer} testID="repositoryItemImageContainer">
        <Image source={{ uri: item.ownerAvatarUrl }} style={styles.image} testID="repositoryItemImage" />
      </View>
      <View style={styles.textContainer} testID="repositoryItemTextContainer">
        <View style={styles.nameContainer} testID="repositoryItemNameContainer">
          <Text fontWeight="bold" fontSize="subheading" testID="repositoryItemFullName">
            {item.fullName}
          </Text>
        </View>
        <View style={styles.descriptionContainer} testID="repositoryItemDescriptionContainer">
          <Text style={styles.description} testID="repositoryItemDescription">
            {item.description}
          </Text>
        </View>
        <View style={styles.languageContainer} testID="repositoryItemLanguageContainer">
          <Text style={styles.language} testID="repositoryItemLanguage">
            {item.language}
          </Text>
        </View>
        <View style={styles.statsContainer} testID="repositoryItemStatsContainer">
          <Text style={styles.stat} testID="repositoryItemStars">
            {formatNumber(item.stargazersCount)} Stars
          </Text>
          <Text style={styles.stat} testID="repositoryItemForks">
            {formatNumber(item.forksCount)} Forks
          </Text>
          <Text style={styles.stat} testID="repositoryItemReviews">
            {formatNumber(item.reviewCount)} Reviews
          </Text>
          <Text style={styles.stat} testID="repositoryItemRating">
            {formatNumber(item.ratingAverage)} Rating
          </Text>
        </View>
        {isLone && (
          <View style={{ marginTop: 10 }}>
            <Button onPress={handleOpenUrl} title="Open in GitHub" />
          </View>
        )}
      </View>
    </View>
  );
};
  

export default RepositoryItem;
