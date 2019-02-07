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
      let updated_at = this.props.post.updated_at
      let post = {id: id, message: message, updated_at: updated_at}
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

    return(
      <div>
        {message}
        <p>{this.props.post.updated_at}</p>
        <button onClick={() => this.handleEdit()}>
        {this.state.editable? 'Submit' : 'Edit'}</button>
        <button onClick={() =>
          this.props.handleDelete(this.props.post.id)}>Delete</button>
        <AllComments comments = {this.props.post.comments}/>
        <NewComment post = {this.props.post}
        handleCommentFormSubmit = {this.props.handleCommentFormSubmit}/>
      </div>
    )
  }
}
