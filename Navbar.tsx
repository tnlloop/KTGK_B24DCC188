import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #333', background: '#111', color: '#fff' }}>
      <div style={{ maxWidth: 960, margin: '0 auto', display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Link to="/" style={{ color: '#fff', fontWeight: 700, textDecoration: 'none' }}>📚 Danh sách bài viết</Link>
        <Link to="/create" style={{ color: '#bbb', textDecoration: 'none', marginLeft: 'auto' }}>Tạo bài viết</Link>
      </div>
    </nav>
  )
}