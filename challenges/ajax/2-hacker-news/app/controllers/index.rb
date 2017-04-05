get '/' do
  redirect '/posts'
end

get '/posts' do
  @posts = Post.all
  erb :index
end

get '/posts/:id/vote' do
  post = Post.find(params[:id])
  post.votes.create(value: 1)
  content_type 'application/json'
  {points: post.points}.to_json
end

delete '/posts/:id' do
  post = Post.find(params[:id])
  post.destroy
  content_type 'application/json'
  {post_id: post.id}.to_json
end

post '/posts' do
  @post = Post.create( title: params[:title],
               username: Faker::Internet.user_name,
               comment_count: rand(1000) )
  erb :_post, :layout => false
end

get '/post/:id' do
  @post = Post.find(params[:id])
  erb :post
end
