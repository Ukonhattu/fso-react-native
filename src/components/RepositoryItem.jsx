// render repository item react-native
import { View, StyleSheet} from "react-native";
import Text from "./Text";



const RepositoryItem = ({ item, index }) => {
    const styles = StyleSheet.create({
        flexItemA: {
          flexGrow: 0,
          backgroundColor: 'green',
        },
        flexItemB: {
          flexGrow: 1,
          backgroundColor: 'blue',
        },
      });
    const flexItem = index % 2 === 0 ? styles.flexItemA : styles.flexItemB;
    return (
        <View style={flexItem}>
        <Text fontWeight='bold' fontSize='subheading<' >Full name: {item.fullName}</Text>
        <Text>Description: {item.description}</Text>
        <Text>Language: {item.language}</Text>
        <Text>Stars: {item.stargazersCount}</Text>
        <Text>Forks: {item.forksCount}</Text>
        <Text>Reviews: {item.reviewCount}</Text>
        <Text>Rating: {item.ratingAverage}</Text>
        </View>
    );
    };

export default RepositoryItem;
