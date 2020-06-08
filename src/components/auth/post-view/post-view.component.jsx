import React from 'react';
import { Card, Heading, Text, Flex, Box, Button } from 'rebass';

export const PostList = props => (
    <Box 
        {...props}
        sx={{
            display: 'grid',
            gridGap: 2,    
            gridTemplateColumns: 'repeat(auto-fit, minmax(128px, 1fr))',
        }}
    >
        {Object.keys(props.posts).map((key,index) => (
            <Card key={index}>
                <Heading>{props.posts[key].post.header}</Heading>
                <Text>{props.posts[key].post.body}</Text>
            </Card>
        ))}
    </Box>
);