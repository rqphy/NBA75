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
                    <figure>
                        <img src="/arrow_icon.png" alt="previous player" />
                    </figure>
                </Link>
            )}
            <figure className={styles.bball}>
                <img src="/bball.png" alt="basketball icon" />
            </figure>
            {currentId < 75 && (
                <Link href={`/player/${currentId + 1}`} className={styles.next}>
                    <figure>
                        <img src="/arrow_icon.png" alt="next player" />
                    </figure>
                </Link>
            )}
        </ul>
    )
}
