import Link from "next/link"
import styles from "./player.module.css"

interface playerProps {
	name: string
	uid: number
}

export default function Player({ name, uid }: playerProps) {
	return (
		<li className={styles.player}>
			<Link href={`/players/${uid}`}>{name}</Link>
		</li>
	)
}
