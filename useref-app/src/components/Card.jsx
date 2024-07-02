import { useEffect, useState } from "react"
import getPosts from '../helpers/getPosts'

const Card = () => {
    const [post, setPost] = useState({title: "post 1"})
    const [loading, setLoading] = useState(true);

    const updatePost = () => {
        getPosts()
        .then ((newpost) => {
            setTimeout(() => {
                setPost(newpost);
                setLoading(false);
            }, 2000);
            
        })
    }

    useEffect(() => {
        updatePost();
    },[]);

    if(loading) return <h1>Loading.......</h1>


  return (
    <div>
        <h1>{post.title}</h1>
    </div>
  )
}
export default Card