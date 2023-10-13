import { useApolloClient } from '@apollo/client';
import { useContext, useEffect } from 'react';
import AuthStorageContext from '../contexts/AuthStorageContext';
import { useNavigate } from 'react-router-native';

const SignOut = () => {
    const authStorage = useContext(AuthStorageContext);
    const apolloClient = useApolloClient();
    const navigate = useNavigate();
    useEffect(() => {
        const signout = async () => {
            await authStorage.removeAccessToken();
            apolloClient.resetStore();
            navigate('/');
        }
        signout();
    }, [])
    return null;
}

export default SignOut;