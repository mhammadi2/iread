/* eslint-disable @typescript-eslint/no-explicit-any */
// Copied from ProfieABout as it has the same structure and then modified
import {  useEffect, useState } from 'react';
import { Tab, Grid, Header, Button, Card, Image } from 'semantic-ui-react';
import { auth, storage} from '../../config/firebase';
import { Photo, Profile } from '../../types/profile';
import PhotoUpload from './PhotoUpload';
import { useAppSelector } from '../../store/store';
import { useFireStore } from '../../hooks/firestore/useFirestore';
import { actions } from './photosSlice';
import { updateProfile } from 'firebase/auth';
// import { ref } from 'firebase/database'; wrong ref location
import { deleteObject, ref } from 'firebase/storage';
import { toast } from 'react-toastify';

type Props = {
    profile: Profile
}

export default function ProfilePhotos({ profile }: Props) {
    const [editMode, setEditMode] = useState(false);
    const isCurrentUser = auth.currentUser?.uid === profile.id;
    // checking correct profile id
    const{data: photos, status} = useAppSelector(state => state.photos);
    const {loadCollection, remove} = useFireStore(`profiles/${profile.id}/photos`);
    // to update the photo for the main photo in the collection profile
    const {update} = useFireStore('profiles')

    useEffect (()=>{
        loadCollection(actions)
        // Careful to choose actions from phot0sclice

    }, [loadCollection])

    // Handle to make a main photo
    async function handleSetMain(photo:Photo){
        await update(profile.id, {
            photoURL:photo.url
        });
        await updateProfile(auth.currentUser!,{
            photoURL: photo.url
        });

    }
    async function handleDeletePhoto(photo: Photo) {
        try {
            const storageRef = ref(storage, `${profile.id}/user_images/${photo.id}`);
            await deleteObject(storageRef);
            await remove(photo.id);
        } catch (error: any) {
            toast.error(error.message)
        }
    }
    

    return (
        <Tab.Pane loading={status === 'loading'}>
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
                     {/* {editMode ? <p> Photo Upload Goes Here</p> : ( */}
                     {/* {editMode ?<PhotoUpload/> : ( */}
                     {editMode ?<PhotoUpload profile={profile} setEditMode={setEditMode}/> : (
                        <Card.Group itemsPerRow={5}>
                                {/* Check empty photos array */}
                                {photos.map(photo =>(
                                    <Card key={photo.id}>
                                    {/* <Image src='/user.png'/> */}
                                    <Image src={photo.url}/>
                                    {isCurrentUser &&
                                        <Button.Group>
                                            <Button  
                                            basic
                                            color='green'
                                            disabled={photo.url===profile.photoURL}
                                            onClick={() => handleSetMain(photo)}
                                            >
                                             Main
                                            </Button>
                                            <Button 
                                                  basic color='red' 
                                                  icon='trash' 
                                                  disabled={photo.url === profile.photoURL}
                                                  onClick={() => handleDeletePhoto(photo)}
                                            />
                                        </Button.Group>
                                    } </Card>

                                ))}
                                
                        </Card.Group>
                    )}
                </Grid.Column>
            </Grid>
        </Tab.Pane>
    )
} 