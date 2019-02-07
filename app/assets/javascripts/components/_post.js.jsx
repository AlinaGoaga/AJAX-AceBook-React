class Post extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      editable: false
    }
    this.handleEdit = this.handleEdit.bind(this)
  }

  handleEdit(){
    if(this.state.editable){
      let message = this.message.value
      let id = this.props.post.id
      let created_at = this.props.post.created_at
      let post = {id: id, message: message, created_at: created_at}
      this.props.handleUpdate(post)
    }
    this.setState({
      editable: !this.state.editable
    })
  }

  render(){
    let message = this.state.editable ? <input type='text' ref={
      input => this.message = input
    }
    defaultValue={
      this.props.post.message
    }/> : <h3> {
      this.props.post.message
    } </h3>

    var formFields = {}

    return(
      <div>
        {message}
        <p>{this.props.post.created_at}</p>
        <button onClick={() => this.handleEdit()}>
        {this.state.editable? 'Submit' : 'Edit'}</button>
        <button onClick={() =>
          this.props.handleDelete(this.props.post.id)}>Delete</button>
        <AllComments comments = {this.props.post.comments}/>
        <form onSubmit={ (e) => {
              this.props.handleCommentFormSubmit(formFields.body.value,this.props.post);
              e.target.reset();
              e.preventDefault();
            }
          }>
          <input ref={input => formFields.body = input}
              placeholder='Join the conversation' />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}
