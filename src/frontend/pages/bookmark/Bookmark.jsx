import React from 'react'
import { useSelector } from 'react-redux'
import { PostCard } from '../../components/PostCard/PostCard';
import BookmarkCSS from "./Bookmark.module.css"

function Bookmark() {
  const {user} = useSelector(state => state.auth);
  const {allPosts} = useSelector(state => state.posts);
  const {bookmarks} = user;

  const bookmarkedPosts = allPosts.filter(post => {
    return bookmarks.some(markedPost => markedPost._id === post._id);
  })

  return (
    <section className={`d-flex ${BookmarkCSS.container}`}>
      {bookmarks.length === 0 && <h1>No Bookmarks added.</h1>}
    {bookmarks.length > 0 && bookmarkedPosts.map(post =><PostCard post={post} key={post._id}/> )}
    </section>
  )
}

export default Bookmark