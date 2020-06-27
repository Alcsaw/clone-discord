import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
    nickname: string;
    isBot?: boolean;
};

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
    return (
        <User>
            <Avatar className={ isBot ? 'bot' : '' } />

            <strong>{nickname}</strong>

            {isBot && <span>BOT</span>}
        </User>
    );
};

const UserList: React.FC = () => {
    return (
        <Container>
            <Role>Disponível - 1</Role>

            <UserRow nickname="Alcsaw" />
            <UserRow nickname="Groovy" isBot />
            <UserRow nickname="Groovy" isBot />
            <UserRow nickname="Groovy" isBot />

            <Role>Offline - 111</Role>
            <UserRow nickname="Alcsaw" />
            <UserRow nickname="Alcsaw" />
            <UserRow nickname="Alcsaw" />
            <UserRow nickname="Alcsaw" />
            <UserRow nickname="Alcsaw" />
            <UserRow nickname="Alcsaw" />
            <UserRow nickname="Alcsaw" />
            <UserRow nickname="Alcsaw" />
            <UserRow nickname="Diego Fernandes" />
            <UserRow nickname="Diego Fernandes" isBot />
        </Container>
    )
};

export default UserList;
