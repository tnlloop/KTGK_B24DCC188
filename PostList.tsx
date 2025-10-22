import { useState } from 'react'
import PostCard from '../components/PostCard'
import { Post } from '../types/Post'

interface Props {
  posts: Post[]
  onDelete: (id: number) => void
}

export default function PostList({ posts, onDelete }: Props) {
  const [filter, setFilter] = useState('')

  const filtered = posts.filter((p) =>
    p.title.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div className="list">
      <h2>Danh sách bài viết ({filtered.length})</h2>
      <input
        type="text"
        placeholder="Tìm theo tiêu đề..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <div className="grid">
        {filtered.map((post) => (
          <PostCard key={post.id} post={post} onDelete={onDelete} />
        ))}
      </div>
    </div>
  )
}
