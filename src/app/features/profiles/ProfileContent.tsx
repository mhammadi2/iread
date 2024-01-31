import { Tab } from 'semantic-ui-react';
import { Profile } from '../../app/types/profile';
import ProfileAbout from './ProfileAbout';
import ProfilePhotos from './ProfilePhotos';
// import ProfilePhotos from './ProfilePhotos';
// import ProfileEvents from './ProfileEvents';

type Props = {
    profile: Profile
}

export default function ProfileContent({profile}: Props) {
// export default function ProfileContent() {
    const panes = [
        {menuItem: 'About', render: () => <ProfileAbout profile={profile} />},
        {menuItem: 'Photos', render: () => <ProfilePhotos profile={profile} />},
        // {menuItem: 'Events', render: () => <ProfileEvents profile={profile} />},
        // {menuItem: 'Followers', render: () => <Tab.Pane>Followers</Tab.Pane>},
        // {menuItem: 'Following', render: () => <Tab.Pane>Following</Tab.Pane>},
    ]

    return (
        <Tab
            menu={{ fluid: true, vertical: true }}
            menuPosition='right'
            panes={panes}
        />
    )
} 