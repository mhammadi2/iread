// Copied from ProfieABout as it has the same structure and then modified
import {  useState } from 'react';
import { Tab, Grid, Header, Button, Card, Image } from 'semantic-ui-react';
import { auth } from '../../config/firebase';
import { Profile } from '../../types/profile';

type Props = {
    profile: Profile
}

export default function ProfilePhotos({ profile }: Props) {
    const [editMode, setEditMode] = useState(false);
    const isCurrentUser = auth.currentUser?.uid === profile.id;
    // checking correct profile id
    

    return (
        <Tab.Pane>
            <Grid>
                <Grid.Column width={16}>
                    <Header floated='left' icon='photo' content='Photos' />
                    {isCurrentUser &&
                        <Button
                            floated='right'
                            basic
                            content={editMode ? 'Cancel' : 'Add photo'}
                            onClick={() => setEditMode(!editMode)}
                        />}
                </Grid.Column>
                <Grid.Column width={16}>
                     {editMode ? <p> Photo Upload Goes Here</p> : (
                        <Card.Group itemsPerRow={5}>
                    
                                <Card>
                                    <Image src='/user.png'/>
                                    {isCurrentUser &&
                                        <Button.Group>
                                            <Button  >
                                             Main
                                            </Button>
                                            <Button 
                                                basic color='red' 
                                                icon='trash'   
                                            />
                                        </Button.Group>
                                    } </Card>
                        </Card.Group>
                    )}
                </Grid.Column>
            </Grid>
        </Tab.Pane>
    )
} 