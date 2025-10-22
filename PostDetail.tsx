
import { useParams, useNavigate, Link } from 'react-router-dom'
import { Post } from '../types/Post'

interface Props {
  posts: Post[]
  onDelete: (id: number) => void
}

export default function PostDetail({ posts, onDelete }: Props) {
  const { id } = useParams<{ id: string }>()  // <-- đảm bảo id là string
  const navigate = useNavigate()
  const post = posts.find((p) => p.id === Number(id))

  if (!post) return <h2>Không tìm thấy bài viết!</h2>

  return (
    <div className="detail">
      <img src={post.thumbnail} alt={post.title} />
      <h2>{post.title}</h2>
      <p><b>Tác giả:</b> {post.author}</p>
      <p><b>Ngày:</b> {post.date}</p>
      <p><b>Thể loại:</b> {post.category}</p>
      <p>{post.content}</p>

      <div className="buttons">
        <button onClick={() => navigate(-1)}>⬅ Quay lại</button>
        <Link to={`/posts/edit/${post.id}`}>Chỉnh sửa</Link>
        <button onClick={() => onDelete(post.id)}>Xóa</button>
      </div>
    </div>
  )
}
