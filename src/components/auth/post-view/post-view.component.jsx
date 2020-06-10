import React from 'react';
import { Card, Heading, Text, Box } from 'rebass';

export const PostList = props => (
    <Box 
        sx={{
            display: 'grid',
            gridGap: 4,    
            gridTemplateColumns: 'repeat(2, minmax(128px, 1fr))',
        }}
    >
        {Object.keys(props.posts).map((key,index) => (
            <Card key={index} px={3} pt={3} pb={3}>
                <Heading>{props.posts[key].post.header}</Heading>
                <Text mt={1}>{props.posts[key].post.body}</Text>
            </Card>
        ))}
    </Box>
);