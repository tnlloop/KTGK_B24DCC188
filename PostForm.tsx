import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Post } from '../types/Post'

interface Props {
  posts?: Post[]
  onSubmit: (post: Post) => void
}

export default function PostForm({ posts, onSubmit }: Props) {
  const { id } = useParams()
  const navigate = useNavigate()
  const editing = id && posts

  const [form, setForm] = useState<Post>({
    id: 0,
    title: '',
    author: '',
    thumbnail: '',
    content: '',
    category: 'Khác',
    date: '',
  })

  useEffect(() => {
    if (editing) {
      const found = posts!.find((p) => p.id === Number(id))
      if (found) setForm(found)
    }
  }, [id])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (form.title.length < 10) return alert('Tiêu đề ít nhất 10 ký tự')
    if (form.author.length < 3) return alert('Tác giả ít nhất 3 ký tự')
    if (form.content.length < 50) return alert('Nội dung ít nhất 50 ký tự')

    onSubmit(form)
  }

  return (
    <div className="form">
      <h2>{editing ? 'Chỉnh sửa bài viết' : 'Tạo bài viết mới'}</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Tiêu đề" value={form.title} onChange={handleChange} />
        <input name="author" placeholder="Tác giả" value={form.author} onChange={handleChange} />
        <input name="thumbnail" placeholder="URL ảnh thumbnail" value={form.thumbnail} onChange={handleChange} />
        <textarea name="content" placeholder="Nội dung" rows={10} value={form.content} onChange={handleChange} />
        <select name="category" value={form.category} onChange={handleChange}>
          <option>Công nghệ</option>
          <option>Du lịch</option>
          <option>Ẩm thực</option>
          <option>Đời sống</option>
          <option>Khác</option>
        </select>
        <div className="actions">
          <button type="submit">{editing ? 'Cập nhật' : 'Đăng bài'}</button>
          <button type="button" onClick={() => navigate(editing ? `/posts/${id}` : '/')}>Hủy</button>
        </div>
      </form>
    </div>
  )
}
