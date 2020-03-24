import React from 'react'
import PostForm from './components/PostForm'
import Posts from './components/Posts'
import FetchedPost from './components/FetchedPost'
import Welcome from './components/Welcome'
import Dialog from './components/Dialog'
import Timer from './components/Hooks'

function App() {
    return (
        <div className="container pt-3">
            <div className="row">
                <div className="col">
                    <div id="messages"/>
                    <Timer interval={2000} title={'Hooks'}/>
                    <Dialog/>
                    <Welcome interval={1000} title={'One minute'}/>
                    <Welcome interval={5000} title={'Five minute'}/>
                    <PostForm/>
                </div>
                {/* /.col */}
            </div>
            {/* /.row */}
            <hr/>
            <div className="row">
                <div className="col">
                    <h2>Синхронные посты</h2>
                    <Posts/>
                </div>
                {/* /.col */}
                <div className="col">
                    <h2>Асинхронные посты</h2>
                    <FetchedPost />
                </div>
                {/* /.col */}
            </div>
            {/* /.row */}
        </div>
    )
}

export default App
