import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/default'
import { Feed } from './pages/Feed'
import { Post } from './pages/Post'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Feed />} />
        <Route path="/post/:postId" element={<Post />} />
      </Route>
    </Routes>
  )
}
