import React, { createContext, useState, useEffect } from "react";
import { getUser } from "../service/auth/LoginService";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [wallet, setWallet] = useState(() => {
        let a = localStorage.getItem('user')

        if (a !== undefined) {
            return JSON.parse(a)?.wallet 
        }

        return 0;
    });
    const checkLogin = () => {
        let token = localStorage.getItem('token')
        return token !== null && token !== undefined
    }

    const getUserInfo = () => {
        let a = localStorage.getItem('user')

        if (a !== undefined) {
            return JSON.parse(a)
        }

        return null;
    }

    const checkWallet = (amount) => {
        let a = localStorage.getItem('user')

        if (a !== undefined) {
            return JSON.parse(a)?.wallet >= amount
        }

        return false;
    }

    const updateUserInfo = () => {
        if (localStorage.getItem('token')) {
            getUser().then(res => {
                if (res.status === 200){
                    let data = res?.data
                    localStorage.setItem('user', JSON.stringify(data));
                    setWallet(data?.wallet)
                }
            })
        }
    }

    const handleLogout = (e) => {
        e.preventDefault()
        // Clear the token and user data when logging out
        localStorage.clear();
        window.location.href = "/"
    
    };


    return (
        <AuthContext.Provider
            value={{
                checkLogin, getUserInfo, checkWallet, updateUserInfo, wallet, handleLogout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
