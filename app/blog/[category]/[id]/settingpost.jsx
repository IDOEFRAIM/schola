'use client'

import { usePost } from "../../../../lib/store"

export default function AppInitializer({ articles, children }) {
    usePost.setState({ 
    articles
  })
  const posts = usePost()
  console.log('from zustand', posts.articles)
  return
}