import React from 'react';

export default const AllPosts = (props) => {

  var posts = props.posts.map((post) => {
    return(
      <div key={post.id}>
      <Post post={post}
      handleDelete={props.handleDelete}
      handleUpdate={props.handleUpdate}
      handleCommentFormSubmit={props.handleCommentFormSubmit}/>
      </div>
    )
  })

  return(
    <div>
    {posts}
    </div>
  )
}
