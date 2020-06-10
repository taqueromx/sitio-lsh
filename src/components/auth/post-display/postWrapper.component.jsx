import React, { Component } from "react";
import { PostList } from "../post-view/post-view.component";
import PostMockup from "../post-mockup/post-mockup.component";
import { Flex, Box } from 'rebass';

const firebase = require('firebase');
const db = firebase.firestore();

export class PostDisplay extends Component {

    constructor(props){
        super(props);

        this.state = {
            posts : []
        }
    }

    componentDidMount() {
        let posts = [];
        db.collection('posts')
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                posts.push({id:doc.id, post:doc.data()});
            });
        }).then(() => {
            this.setState({posts : posts});
        })
        .catch((error) => {
            console.log(error);
            alert(error);
        })
    }

    render() {
        const {posts} = this.state;
        return(
            <Box sx={{
                display: 'grid',
                gridGap: 4,    
                gridTemplateColumns: 'repeat(1, minmax(128px, 1fr))',
            }}>
                <Box>
                    <PostList posts={posts}/>
                </Box>
                <Box className='center'>
                    <PostMockup />
                </Box>
            </Box>
        )
    }
} 