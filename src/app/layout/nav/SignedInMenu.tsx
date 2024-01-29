import { Menu, Image, Dropdown, DropdownMenu } from "semantic-ui-react";
import {Link, useNavigate} from 'react-router-dom'
import { useAppSelector } from "../../store/store";
import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";

export default function SignedInMenu() {
    const {currentUser} = useAppSelector(state=>state.auth)
    const navigate =useNavigate();

  
  async function  handleSignOut(){
      await signOut(auth)
        navigate('/');
    }
  return (
    <Menu.Item position='right'>
        <Image avatar spaced='right' src={currentUser?.photoURL || '/user.png'}/>
        {/* <Image avatar spaced='right' src='/user.png'/> */}
        {/* <Dropdown pointing='top left' text='Muhammad'> */}
        {/* <Dropdown pointing='top left' text={currentUser?.email}> */}
        <Dropdown pointing='top left' text={currentUser?.email as string}>
            <DropdownMenu>

            <Dropdown.Item as = {Link} to = '/activities' text='Activities' icon='move'/>
            {/* <Dropdown.Item text='My profile' icon='user'/> */}
            <Dropdown.Item as={Link} to={`/profiles/${currentUser?.uid}`} text='My profile' icon='user' />
            {/* <Dropdown.Item as={Link} to='/account' text='My account' icon='settings' /> */}
            {/* <Dropdown.Item  text='My Profile' icon='user' /> */}
            <Dropdown.Item onClick={handleSignOut} text='Sign Out' icon='power'/>
            </DropdownMenu>
        </Dropdown>
    </Menu.Item>
  )
}