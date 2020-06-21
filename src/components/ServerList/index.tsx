import React from 'react';

import ServerButton from '../ServerButton';

import { Container, Separator } from './styles';

const ServerList: React.FC = () => {
    return (
        <Container>
            <ServerButton isHome />

            <Separator />

            <ServerButton />

            <ServerButton hasNotifications mentions={1} />

            <ServerButton hasNotifications />

            <ServerButton />

            <ServerButton hasNotifications mentions={3} />

        </Container>
    )
};

export default ServerList;
