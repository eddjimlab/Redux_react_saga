import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchPosts} from '../redux/actions'
import Post from './Post'
import {Loader} from './Loader'
import {Alert} from './Alert'

export default () => {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.fetchedPosts)
    const loading = useSelector(state => state.app.loading)

    if (loading) {
        return <Loader/>
    }

    if (!posts.length) {
        return (
            <div>
                <Alert text={'no posts'}/>
        <button
            className="btn btn-primary"
            onClick={() => dispatch(fetchPosts())}
        >Загрузить</button>
            </div>
        )
    }
    return posts.map(post => <Post post={post} key={post.id}/>)
}
