import { View, StyleSheet, ScrollView } from 'react-native';
import {useQuery} from '@apollo/client';
import {ME} from '../graphql/queries';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#24292e',
  },
  scrollView: {
    marginHorizontal: 20,
    flexDirection: 'row',
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'space-evenly',
  }
  // ...
});



const AppBar = () => {
  const {data } = useQuery(ME);

  return (
  <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.scrollView} >
        <AppBarTab text='Repositories' linkTo='/' />
        {data && data.me ? <AppBarTab text='Sign out' linkTo='/signout'/> 
        : <AppBarTab text='Sign in' linkTo='/signin'/>}
      </ScrollView>
  </View>
  )
};

export default AppBar;