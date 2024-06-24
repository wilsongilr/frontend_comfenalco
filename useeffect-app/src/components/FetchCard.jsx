import React, { useEffect, useState } from 'react'
import getUsers from '../helpers/getUsers'
import getPosts from '../helpers/getPosts'


// const initialUser = {
//     name: "Wilson",
//     email: "wilsongilr@gmail.com"
// }


// const initialPosts = [
//     { id: 1, title: "Posts 1" },
//     { id: 2, title: "Posts 2" },
// ]


const FetchCard = () => {
    //     const [user, setUser] = useState(initialUser);
    //     const [posts, setPosts] = useState(initialPosts);
    const [user, setUser] = useState({});
    const [posts, setPosts] = useState([]);

    const updateUser = () => {
        getUsers()
            .then((newUser) => {
                setUser(newUser);
            })
    }

    const updatePosts = () => {
        getPosts(user.id)
            .then((newPosts) => {
                setPosts(newPosts);
            })
    }

    useEffect(() => {
        updateUser();

    }, []);


    useEffect(() => {
        if (user?.id) {
            updatePosts();
        }
    }, [user])

    return (
        <div>
            <button onClick={updateUser}>Another User</button>
            <h1>{user.name}</h1>
            <h2>{user.email}</h2>

            <br />
            <h2>posts - User: {user.id}</h2>

            <ul>
                {posts.map(post =>

                    <li key={post.id}>Titulo: {post.title} </li>
                )}

            </ul>


        </div>
    )
}

export default FetchCard