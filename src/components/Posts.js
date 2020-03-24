import React from 'react'
import {connect} from 'react-redux'
import Post from './Post'
import {Alert} from './Alert'


const Posts = ({syncPosts}) => {
    if (!syncPosts.length) {
        return <Alert text={'Постов пока нет'}/>
    }
    return syncPosts.map(post => <Post post={post} key={post.id}/>)
}


const mapStateToProps = state => {
    return {
        syncPosts: state.posts.posts
    }
}

export default connect(mapStateToProps, null)(Posts)
