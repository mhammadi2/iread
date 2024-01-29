import { Grid, Header, Item,  Segment} from 'semantic-ui-react';
export default function ProfileHeader() {
  return (
    <Segment>
        <Grid>
            <Grid.Column width={16}>
                <Item.Group>
                    <Item>
                        <Item.Image avatar size='small' src='/user.png' />
                        {/* <Item.Image avatar size÷='small' src={profile.photoURL || '/user.png'} /> */}
                        <Item.Content verticalAlign='middle'>
                            <Header as='h1' 
                                style={{display: 'block', marginBottom: 10}} 
                                content='displayName'
                            />
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Grid.Column>
            {/* <Grid.Column width={4}>
                <Statistic.Group>
                    <Statistic label='Followers' value={10} />
                    <Statistic label='Following' value={5} />
                </Statistic.Group>
                <Divider />
                <Reveal animated='move'>
                    <Reveal.Content visible style={{width: '100%'}}>
                        <Button fluid color='teal' content='Following' />
                    </Reveal.Content>
                    <Reveal.Content hidden style={{width: '100%'}}>
                        <Button basic fluid color='red' content='Unfollow' />
                    </Reveal.Content>
                </Reveal>
            </Grid.Column> */}
        </Grid>
    </Segment>
  )
}