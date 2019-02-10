import React from 'react';

export default const AllComments = (props) => {

  var comments = props.comments.map((comment) => {
    return(
      <div key={comment.id}>
        <p>{comment.body}</p>
      </div>
    )

  })

  return(
    <div>
    {comments}
    </div>
  )
}
