
import React from 'react'
import { Post } from '../types/Post'
import { useNavigate } from 'react-router-dom'

interface Props {
  post: Post
  onDelete: (id: number) => void
}

const PostCard: React.FC<Props> = ({ post, onDelete }) => {
  const navigate = useNavigate()

  return (
    <div className="post-card">
      <img src={post.thumbnail} alt={post.title} />
      <h3>{post.title}</h3>
      <p className="meta">{post.author} • {post.date}</p>
      <p>{post.content.slice(0, 100)}...</p>
      <div className="actions">
        {/* match route in App.tsx */}
        <button onClick={() => navigate(`/posts/${post.id}`)}>Đọc thêm</button>
        <button
          onClick={() => {
            if (window.confirm('Bạn có chắc muốn xóa bài viết này?')) onDelete(post.id)
          }}
        >
          ❌ Xóa
        </button>
      </div>
    </div>
  )
}

export default PostCard
