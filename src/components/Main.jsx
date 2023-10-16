import { Route, Routes, Navigate } from 'react-router-native';
import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import OneRepositoryPage from './OneRepositoryPage';
import AppBar from './AppBar';
import SignIn from './SignIn';
import SignOut from './SignOut';
import ReviewForm from './ReviewForm';
import SignUpForm from './SignUpForm';
import OwnReviews from './OwnReviews';


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
        <AppBar />
        <Routes>
            <Route path="/" element={<RepositoryList />} />
            <Route path='/repository/:id' element={<OneRepositoryPage />} />
            <Route path="/newreview" element={<ReviewForm />} />
            <Route path="/myreviews" element={<OwnReviews />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signout" element={<SignOut />} />
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="*" element={<Navigate to="/" replace />} />  
        </Routes>
    </View>
  );
};

export default Main;