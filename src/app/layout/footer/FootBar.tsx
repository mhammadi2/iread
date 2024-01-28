import { Container, Grid, Menu, MenuItem } from "semantic-ui-react";

export default function FootBar() {
  return (
    <>
    <Menu  fixed='bottom'>
    <Grid>
    <Container>
    <Grid Footer>
      <Grid.Column width={12}>
      <MenuItem >
                <img src="/logo.png" alt="logo" /> 
            </MenuItem>
      </Grid.Column>
      <Grid.Column width={4}>
      <MenuItem >
                <p> Developed by IREAD Team</p>
            </MenuItem>
      </Grid.Column>
    </Grid>
            
            
    </Container>
    </Grid>
    </Menu>

    </>
  )
}