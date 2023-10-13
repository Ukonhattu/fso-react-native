import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';


const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  lexContainer: {
    display: 'flex',
  },
});


const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
    const {repositories} = useRepositories();
    const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  return (
    <View style={styles.flexContainer}>
        <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        // other props
            renderItem={RepositoryItem}
        />
    </View>
  );
};

export default RepositoryList;