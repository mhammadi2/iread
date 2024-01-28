import { Container } from 'semantic-ui-react'
import NavBar from './nav/NavBar'
import HomePage from '../features/home/HomePage'
import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { useAppDispatch } from '../store/store'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../config/firebase'
import { logout, signIn } from '../features/auth/authSlice'
import ModalManager from '../common/modals/ModalManager'

function App() {
  const location = useLocation();
  const dispatch = useAppDispatch();
  useEffect(
    ()=> {
      onAuthStateChanged(auth, {
        next: user =>{
        if (user) {
          dispatch(signIn(user))
        } else {
            dispatch(logout())
        }
        },
        error: error => console.log(error),
        complete: () => {}
      })
    }, [dispatch])
  return (
    <>
    <NavBar/>
    <Container className='main'>
      {location.pathname==='/' ? <HomePage/> : <Outlet/> }
    <ModalManager/>
    </Container>
    </>
  )
}

export default App
