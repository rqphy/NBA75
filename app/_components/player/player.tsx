import Link from "next/link"
import styles from "./player.module.css"

interface playerProps {
	name: string
	uid: number
	index: number
}

export default function Player({ name, uid, index }: playerProps) {
	return (
		<li className={styles.player} key={uid}>
			<Link href={`/player/${index}`}>{name}</Link>
		</li>
	)
}
