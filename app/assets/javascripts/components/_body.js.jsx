class Body extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.addNewPost = this.addNewPost.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.deletePost = this.deletePost.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.updatePost = this.updatePost.bind(this)
    this.handleCommentFormSubmit = this.handleCommentFormSubmit.bind(this)
    this.addNewComment = this.addNewComment.bind(this)
  }

  handleFormSubmit(message) {
    let body = JSON.stringify({ post: { message: message } })

    fetch('http://localhost:3000/api/v1/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body
    }).then((response) => {return response.json()})
    .then((post)=>{
      this.addNewPost(post)
    })
  }

  addNewPost(post){
    var posts = this.state.posts
    posts.unshift(post)
    this.setState({
      posts: posts
    })
  }

  handleCommentFormSubmit(body,post) {
    let requestBody = JSON.stringify({ comment: { body: body } })
    fetch(`/api/v1/posts/${post.id}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: requestBody
    }).then((response) => {return response.json()})
    .then((comment)=>{
      this.addNewComment(post,comment)
    })
  }

  addNewComment(post, comment){
    let newPosts = this.state.posts.map((p) => {
      if (p === post) { p.comments.push(comment) }
      return p;
    })
    this.setState({
      posts: newPosts
    })
  }

  handleUpdate(post) {
    fetch(`http://localhost:3000/api/v1/posts/${post.id}`,
      {
        method: 'PUT',
        body: JSON.stringify({post: post}),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {return response.json()})
      .then((response) => {
        this.updatePost(response)
      })
    }

    updatePost(post){
      let newPosts = this.state.posts.filter((p) => p.id !== post.id)
      newPosts.unshift(post)
      this.setState({
        posts: newPosts
      })
    }

    handleDelete(id) {
      fetch(`http://localhost:3000/api/v1/posts/${id}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((response) => {
          this.deletePost(id)
        })
      }

      deletePost(id){
        newPosts = this.state.posts.filter((post) => post.id !== id)
        this.setState({
          posts: newPosts
        })
      }

      componentDidMount() {
        fetch('/api/v1/posts.json')
        .then((response) => {return response.json()})
        .then((data) => {this.setState({ posts: data }) });
      }

      render() {
        return(
          <div>

          <NewPost handleFormSubmit={this.handleFormSubmit}/>
          <AllPosts posts={this.state.posts}
          handleDelete={this.handleDelete}
          handleUpdate={this.handleUpdate}
          handleCommentFormSubmit={this.handleCommentFormSubmit}
          />

          </div>
        )
      }
    }
