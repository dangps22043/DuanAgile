import React, { createContext, useState } from 'react'
import AxiosInstance from '../../axiosClient/AxiosInstance';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const UserContext = createContext();

export const UserProvider = (props) => {
    const { children } = props;
    const [isLoggedIn, setisLoggedIn] = useState(false);
    const login = async (email, password) => {
        try {
            const body = {
                email: email,
                password: password
            }
            const response = await AxiosInstance().post('/auth/login', body);
            const {token} = response.data;
            await AsyncStorage.setItem('token',token);
            setisLoggedIn(true);
            return true;
            console.log('Login responese: ', response)
        } catch (error) {
            console.log('Login error: ', error);
        }
        return false;
    }


    const register = async (email, password) => {
        try {
            const body = {
                email: email,
                password: password
            }
            const response = await AxiosInstance().post('/users/register', body);
            console.log('Login responese: ', response)
            return true;
        } catch (error) {
            console.log('Register error: ', error);
        }
        return false;
    }


    return (
        <UserContext.Provider value={{ isLoggedIn, setisLoggedIn, login, register }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext