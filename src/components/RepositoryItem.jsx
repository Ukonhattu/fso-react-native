// render repository item react-native
import { View, StyleSheet, Image} from "react-native";
import Text from "./Text";

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

const RepositoryItem = ({ item, index }) => {
    const flexItem = index % 2 === 0 ? styles.flexItemA : styles.flexItemB;
  
    return (
      <View style={flexItem}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: item.ownerAvatarUrl }} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <View style={styles.nameContainer}>
            <Text fontWeight='bold' fontSize='subheading'>{item.fullName}</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>{item.description}</Text>
          </View>
          <View style={styles.languageContainer}>
            <Text style={styles.language}>{item.language}</Text>
          </View>
          <View style={styles.statsContainer}>
          <Text style={styles.stat}>{formatNumber(item.stargazersCount)} Stars</Text>
          <Text style={styles.stat}>{formatNumber(item.forksCount)} Forks</Text>
          <Text style={styles.stat}>{formatNumber(item.reviewCount)} Reviews</Text>
          <Text style={styles.stat}>{formatNumber(item.ratingAverage)} Rating</Text>
        </View>
        </View>
      </View>
    );
  };
  

export default RepositoryItem;
