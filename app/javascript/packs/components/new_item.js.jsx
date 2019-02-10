import React from 'react';

export default const NewPost = (props) => {

  let formFields = {}


return (
    <form onSubmit={ (e) => {
      props.handleFormSubmit(formFields.message.value);
      e.target.reset();
      e.preventDefault();
    }
    }>
      <input ref={input => formFields.message = input}
      placeholder='Write your new post' />
      <button>Submit</button>
    </form>
  )
}
