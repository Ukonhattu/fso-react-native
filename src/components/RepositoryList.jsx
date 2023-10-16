import { FlatList, View, StyleSheet, Pressable, TextInput } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import { useNavigate } from 'react-router-native';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { useDebounce } from 'use-debounce';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  lexContainer: {
    display: 'flex',
  },
});


const ItemSeparator = () => <View style={styles.separator} />;

const FilterRepositories = ({setFilter}) => {
  const [selectedValue, setSelectedValue] = useState('');
  

  const handleValueChange = (value) => {
    setSelectedValue(value);
    setFilter(value);
  };

  // text field for filtering
  return (
    <>
      <TextInput
        style={styles.filterInput}
        onChangeText={handleValueChange}
        value={selectedValue}
        placeholder="Filter repositories"
      />
    </>
  )
}



const OrderByPicker = ({setOrderBy, setOrderDirection}) => {
  const [selectedValue, setSelectedValue] = useState('CREATED_AT_DESC');

  const handleValueChange = (value) => {
    setSelectedValue(value);
    switch (value) {
      case 'CREATED_AT_DESC':
        setOrderBy('CREATED_AT');
        setOrderDirection('DESC');
        break;
      case 'RATING_AVERAGE_DESC':
        setOrderBy('RATING_AVERAGE');
        setOrderDirection('DESC');
        break;
      case 'RATING_AVERAGE_ASC':
        setOrderBy('RATING_AVERAGE');
        setOrderDirection('ASC');
        break;
      default:
        break;
    }
    
  };

  return (
    <Picker
      selectedValue={selectedValue}
      onValueChange={handleValueChange}
    >
      <Picker.Item label="Latest" value="CREATED_AT_DESC" />
      <Picker.Item label="Most reviewed" value="RATING_AVERAGE_DESC" />
      <Picker.Item label="Least reviewed" value="RATING_AVERAGE_ASC" />
    </Picker>
  );
};

const RepositoryItemWithLink = ({item, navigate}) => {
    const onPress = () => {
        navigate(`/repository/${item.id}`);
    };
    return (
      <Pressable  onPress={onPress}>
        <RepositoryItem item={item}/>
      </Pressable>
    )
}

const RepositoryList = () => {
    const navigate = useNavigate();
    const [orderBy, setOrderBy] = useState('CREATED_AT');
    const [orderDirection, setOrderDirection] = useState('DESC');
    const [filter, setFilter] = useState('');
    const [ debouncedFilter ] = useDebounce(filter, 500);

    const {repositories } = useRepositories(
        {orderBy, orderDirection, searchKeyword: debouncedFilter}
    );
    

    const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  return (
    <View style={styles.flexContainer}>
      <OrderByPicker setOrderBy={setOrderBy} setOrderDirection={setOrderDirection}/>
      <FilterRepositories setFilter={setFilter}/>
        <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        // other props
            renderItem={(props) => <RepositoryItemWithLink {...props} navigate={navigate} />}
        />
    </View>
  );
};

export default RepositoryList;