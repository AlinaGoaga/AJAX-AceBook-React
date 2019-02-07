const NewComment = (props) => {

  let formFields = {}

  return (
    <form onSubmit={ (e) => {
      props.handleCommentFormSubmit(formFields.body.value,props.post);
      e.target.reset();
      e.preventDefault();
    }
  }>
  <input ref={input => formFields.body = input}
  placeholder='Join the conversation' />
  <button>Submit</button>
  </form>
)

}
