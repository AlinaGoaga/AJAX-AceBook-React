import React from 'react';

const AllComments = (props) => {

  var comments = props.comments.map((comment) => {
    return(
      <div key={comment.id}>
        <p>{comment.body}</p>
      </div>
    )

  })

  return(
    <div style={{margin: "20px", fontStyle: "italic"}}>
    {comments}
    </div>
  )
}

export default AllComments;
