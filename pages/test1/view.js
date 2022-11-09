import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from "next/link";

export default function View() {
  const router = useRouter()
  const { id } = router.query;
  const { last_element } = router.query;

  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://jsonplaceholder.typicode.com/todos/' + id)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  return (
    <div>
      <h1>{data.id}</h1>
      <p>{data.title}</p>
      <button>
        <Link href={{ pathname: '/test1', query: { last_element: last_element } }}>Back</Link>
      </button>
    </div>
  )
}
