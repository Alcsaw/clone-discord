import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;

        if (div) {
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef]);

    return (
        <Container>
            <Messages>
                <ChannelMessage
                    author="Alcsaw"
                    date="27/06/2020"
                    content="I'm clonning Discord's GUI!"
                />

                <ChannelMessage
                    author="Diego"
                    date="27/06/2020"
                    content={
                        <>
                            <Mention>@Alcsaw</Mention>,
                            Cool!
                        </>
                    }
                    hasMention
                />

                <ChannelMessage
                    author="Alcsaw"
                    date="27/06/2020"
                    content="Yeah... But it's kinda buggy in Firefox still :c"
                />

                <ChannelMessage
                    author="Grooby"
                    date="27/06/2020"
                    content="Playing AC/DC - Whole Lotta Rosie"
                    isBot
                />

                {Array.from(Array(15).keys()).map(n => (
                    <ChannelMessage
                        key={n}
                        author="Alcsaw"
                        date="27/06/2020"
                        content="Spamming some content to test the chat"
                    />
                ))}
                <div>

                </div>

            </Messages>


            <InputWrapper>
                <Input type="text" placeholder="Message #chat-livre" />
                <InputIcon />
            </InputWrapper>
        </Container>
    )
};

export default ChannelData;
