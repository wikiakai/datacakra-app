import Image from 'next/image'
import styles from './page.module.css'
import Welcome from '@/lib/main/view/Welcome'
import LoginView from '@/lib/auth/login/view'

export default function Home() {
  
  return (
    <main className={styles.main}>
      <Welcome />
    </main>
  )
}
