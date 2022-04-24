import { useRouter } from 'next/router';
import styles from '../../styles/Post.module.css';

export default function Post(){
    const router = useRouter();
    const params = router.query;
    console.log(params);
    return (
        <h1 className={styles.title}> This is post page !</h1>
    )
}