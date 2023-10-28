import styles from "./player.module.css"

interface playerProps {
	name: string
}

export default function Player({ name }: playerProps) {
	return <li className={styles.player}>{name}</li>
}
