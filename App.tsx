import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import PostList from './pages/PostList'
import PostDetail from './pages/PostDetail'
import PostForm from './components/PostForm'
import { Post } from './types/Post'

function App() {
  const navigate = useNavigate()

  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      title: 'React Hooks là gì?',
      author: 'Nguyễn Văn A',
      thumbnail: 'https://picsum.photos/300/200',
      content: 'React Hooks giúp viết component ngắn gọn hơn...',
      category: 'Công nghệ',
      date: '2025-10-20',
    },
    {
      id: 2,
      title: 'Ẩm thực Huế',
      author: 'Trần B',
      thumbnail: 'https://picsum.photos/301/200',
      content: 'Huế nổi tiếng với món bún bò...',
      category: 'Ẩm thực',
      date: '2025-10-21',
    },
    {
      id: 3,
      title: 'Du lịch Đà Lạt',
      author: 'Lê C',
      thumbnail: 'https://picsum.photos/302/200',
      content: 'Đà Lạt có khí hậu mát mẻ quanh năm...',
      category: 'Du lịch',
      date: '2025-10-22',
    },
  ])

  const addPost = (post: Post) => {
    setPosts([...posts, { ...post, id: Date.now(), date: new Date().toISOString().split('T')[0] }])
    alert('Đăng bài thành công!')
    navigate('/')
  }

  const updatePost = (updated: Post) => {
    setPosts(posts.map((p) => (p.id === updated.id ? updated : p)))
    alert('Cập nhật thành công!')
    navigate(`/posts/${updated.id}`)
  }

  const deletePost = (id: number) => {
    if (confirm('Bạn có chắc muốn xóa bài viết này?')) {
      setPosts(posts.filter((p) => p.id !== id))
      navigate('/')
    }
  }

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<PostList posts={posts} onDelete={deletePost} />} />
        <Route path="/create" element={<PostForm onSubmit={addPost} />} />
        <Route path="/posts/:id" element={<PostDetail posts={posts} onDelete={deletePost} />} />
        <Route path="/posts/edit/:id" element={<PostForm posts={posts} onSubmit={updatePost} />} />
      </Routes>
    </div>
  )
}

export default App
