class Api::V1::CommentsController < ApplicationController

  skip_before_action :verify_authenticity_token

  def create
    post = Post.find(params[:post_id])
    post_comments = post.comments
    new_comment = params[:comment].permit(:body)
    comment = post_comments.create!(new_comment.merge(user: current_user))
    render json: comment
  end

end
