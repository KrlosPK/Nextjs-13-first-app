import Link from 'next/link'
import styles from '../styles/Header.module.css'

const routes = [
  {
    label: 'Home',
    path: '/'
  },
  {
    label: 'About',
    path: '/about'
  },
  {
    label: 'Posts',
    path: '/posts'
  }
]

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navigation}>
          {routes.map(({ label, path }) => (
            <li key={path}>
              <Link href={path}> {label} </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export { Header }
