import { Grid } from 'semantic-ui-react';
import ProfileHeader from './profileHeader';
// import LoadingComponent from '../../app/layout/LoadingComponent';

export default function ProfilePage() {
//   const {id} = useParams();
//   const {status, data} = useAppSelector(state => state.profiles);
//   const profile = data.find(x => x.id === id);
//   const {loadDocument} = useFireStore('profiles');

//   useEffect(() => {
//     if (id) loadDocument(id, actions)
//   }, [id, loadDocument]);

// //   if (status === 'loading') return <LoadingComponent content='Loading profile...' />

//   if (!profile) return <h2>Not found</h2>

  return (
    <Grid>
      <Grid.Column width={16}>
        {/* <ProfileHeader profile={profile} /> */}
       <ProfileHeader/>
        {/* <ProfileContent profile={profile} /> */}
      </Grid.Column>
    </Grid>
  )
}