import styles from "./Switch.module.css"
interface switchProps {
    currentId: string
}

export default function Switch({ currentId }: switchProps) {
    return (
        <ul className={styles.switch}>
            <li className={styles.prev}>previous player</li>
            <div className={styles.bball}></div>
            <li className={styles.next}>next player</li>
        </ul>
    )
}
