import MainLayout from '@/lib/main/view/MainLayout'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <MainLayout />
    </main>
  )
}
