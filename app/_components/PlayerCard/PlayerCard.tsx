import Link from "next/link"
import styles from "./PlayerCard.module.css"

interface playerProps {
	name: string
	uid: number
	index: number
}

export default function Player({ name, uid, index }: playerProps) {
	return (
		<group>
			{/* <li className={styles.player} key={uid}>
			<Link href={`/player/${index}`}>{name}</Link>
		</li> */}
			<mesh position={[0, 0, 4]}>
				<planeGeometry args={[0.8, 1]} />
				<meshNormalMaterial />
			</mesh>
		</group>
	)
}
