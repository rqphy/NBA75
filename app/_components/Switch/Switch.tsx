import styles from "./Switch.module.css"
import Link from "next/link"
interface switchProps {
    currentId: number
}

export default function Switch({ currentId }: switchProps) {
    return (
        <ul className={styles.switch}>
            {currentId > 0 && (
                <Link href={`/player/${currentId - 1}`} className={styles.prev}>
                    P
                </Link>
            )}
            <div className={styles.bball}></div>
            {currentId < 75 && (
                <Link href={`/player/${currentId + 1}`} className={styles.next}>
                    N
                </Link>
            )}
        </ul>
    )
}
