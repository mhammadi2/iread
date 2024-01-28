//NavbarLg.jsx
import { Menu, Segment } from 'semantic-ui-react'
export default function NavbarLg({renderLinks}) {
    return (
      <Segment inverted attached size='mini'>
        <Menu inverted secondary>
        {renderLinks()}
        </Menu>
      </Segment>
    )
  }
