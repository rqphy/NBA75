import Link from "next/link"
import styles from "./player.module.css"

interface playerProps {
	name: string
}

export default function Player({ name }: playerProps) {
	return (
		<li className={styles.player}>
			<Link href={`/players/${name}`}>{name}</Link>
		</li>
	)
}
