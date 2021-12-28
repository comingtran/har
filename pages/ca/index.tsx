import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router'

const index = ()=>{
    const router = useRouter()
    const { state, code } = router.query
return (
    <>
    <div className={styles.container}>
    <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to AUTHORIZATION CODE

        </h1>
        <h1 className={styles.title}>
         State: {state}
        </h1>
        <h1 className={styles.title}>
          Code: {code}
          
        </h1>
    </main>    
    </div>
    </>
)
}
export default index