import React from 'react';
import { Flex, Box, Card, Image, Heading, Text } from 'rebass'
import './card-list.style.css';

export const CardList  =  ({ projects })  => (
    <div className='card-list'>
        {
            projects.map((project, index) => (
                <Card 
                    key={index} 
                    width={256} 
                    sx={{
                        p: 1,
                        borderRadius: 2,
                        boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
                    }}>
                    <Image src='https://picsum.photos/256' />
                    <Box px={2}>
                        <Heading as='h3'>{project.name}</Heading>
                        <Text fontSize={0} p={3}>{project.description}</Text>
                    </Box>
                    <Flex >
                        <Box p={3} width={1/2}>
                            <Text fontSize={0}>{project.startDate}</Text>
                        </Box>
                        <Box p={3} width={1/2}>
                            <Text fontSize={0}>{project.endDate}</Text>
                        </Box>
                    </Flex>
                </Card>
            ))
        }
    </div>
);