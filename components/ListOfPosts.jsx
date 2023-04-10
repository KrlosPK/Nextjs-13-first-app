import Link from 'next/link'
import styles from '../styles/ListOfPosts.module.css'

const fetchPosts = async () => {
  return fetch('https://jsonplaceholder.typicode.com/posts').then((response) => response.json())
}

const ListOfPosts = async () => {
  const posts = await fetchPosts()

  return posts.slice(0, 10).map((post) => {
    return (
      <Link href={`/posts/${post.id}`} key={post.id}>
        <article className={styles.post}>
          <h2 className={styles.title}>{post.title}</h2>
          <p>{post.body}</p>
        </article>
      </Link>
    )
  })
}

export { ListOfPosts }
