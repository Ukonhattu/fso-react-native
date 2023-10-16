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

const ForLoggedOut = () => {
  return (
    <>
      <AppBarTab text='Sign in' linkTo='/signin' />
      <AppBarTab text='Sign up' linkTo='/signup' />
    </>
  )
}

const ForLoggedIn = () => {
  return (
    <>
      <AppBarTab text='Sign out' linkTo='/signout' />
      <AppBarTab text='My reviews' linkTo='/myreviews' />
    </>
  )
}


const AppBar = () => {
  const {data } = useQuery(ME);

  return (
  <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.scrollView} >
        <AppBarTab text='Repositories' linkTo='/' />
        <AppBarTab text='Create a review' linkTo='/newreview' />
        {data && data.me ? <ForLoggedIn />
        : <ForLoggedOut />}
      </ScrollView>
  </View>
  )
};

export default AppBar;