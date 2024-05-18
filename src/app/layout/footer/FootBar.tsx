import { Container, Grid, Header, List, Menu, MenuItem, Segment } from "semantic-ui-react";

export default function FootBar() {
  return (
    <>
    <Segment className="ui green inverted segment" vertical style={{ padding: '5em 0em' }}>
    {/* <Segment inverted vertical style={{ padding: '5em 0em' }}> */}
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={4}>
              <Header inverted as='h4' content='About' />
              <List link inverted>
                <List.Item as='a'>Sitemap</List.Item>
                <List.Item as='a'>Contact Us</List.Item>
                <List.Item as='a'>Religious Ceremonies</List.Item>
                <List.Item as='a'>Gazebo Plans</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={4}>
              <Header inverted as='h4' content='Services' />
              <List link inverted>
                <List.Item as='a'>Banana Pre-Order</List.Item>
                <List.Item as='a'>DNA FAQ</List.Item>
                <List.Item as='a'>How To Access</List.Item>
                <List.Item as='a'>Favorite X-Men</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={8}>
              <Header as='h4' inverted>
                Footer Header
              </Header>
              <p>
                Extra space for a call to action inside the footer that could help re-engage users.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>

      <Menu fixed="bottom">
        <Grid>
          <Container>
            <Grid Footer>
              <Grid.Column width={12}>
                <MenuItem>
                  <img src="/logo.png" alt="logo" />
                </MenuItem>
              </Grid.Column>
              <Grid.Column width={4}>
                <MenuItem>
                  <p> Developed by IREAD Team</p>
                </MenuItem>
              </Grid.Column>
            </Grid>
          </Container>
        </Grid>
      </Menu>
    </>
  );
}
