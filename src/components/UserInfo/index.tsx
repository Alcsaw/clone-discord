import React from 'react';

import { Container,
    Profile,
    Avatar,
    UserData,
    Icons,
    MicrophoneIcon,
    HeadphoneIcon,
    SettingsIcon
} from './styles';

const UserInfo: React.FC = () => {
    return (
        <Container>

            <Profile>
                <Avatar />

                <UserData>
                    <strong>Alcsaw</strong>
                    <span>#0018</span>
                </UserData>
            </Profile>

            <Icons>
                <MicrophoneIcon />
                <HeadphoneIcon />
                <SettingsIcon />
            </Icons>

        </Container>
    )
};

export default UserInfo;
