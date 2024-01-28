import { PayloadAction, createSlice } from '@reduxjs/toolkit'
// import { User } from '../../app/types/user'
import { User } from 'firebase/auth'
import { AppUser } from '../../types/user'

type State = {
    authenticated: boolean
    currentUser: AppUser | null
    // currentUser: User | null
}

const initialState: State = {
    authenticated: false,
    currentUser: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signIn: {  
            reducer: (state, action: PayloadAction<AppUser>) => {
                state.authenticated = true;
                state.currentUser =action.payload
            // Non serilizable data shaping

            // state.currentUser = {
            //     email: action.payload.email,
            //     photoURL: '/user.png'
            // }
            }, 
            prepare: (user:User) => {
                const mapped: AppUser={
                    uid :user.uid,
                    email : user.email,
                    photoURL : user.photoURL,
                    displayName : user.displayName,
                    providerId: user.providerData[0].providerId
                }
                return {payload:mapped}
            }
            
        },
        // signOut: (state) => {
        logout: (state) => {
            state.authenticated = false;
            state.currentUser = null;
        }
    }
})

// export const {signIn, signOut} = authSlice.actions; 
export const {signIn, logout} = authSlice.actions; 