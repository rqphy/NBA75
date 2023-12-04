import styles from "../../css/player.module.css"
import { promises as fs } from "fs"
import Switch from "@/app/_components/Switch/Switch"
import { useRef } from "react"
interface pageProps {
	params: { player_id: string }
}

export default async function page({ params }: pageProps) {
	const file = await fs.readFile(
		process.cwd() + "/app/data/players.json",
		"utf8"
	)

	const data = JSON.parse(file)
	const player = data[Number(params.player_id)]
	// const offRef = useRef<HTMLDivElement>(null)

	return (
		<>
			<div className={styles.transition}></div>
			<section className={styles.player}>
				<div className={styles.container}>
					<h1 className={styles.title}>{player.name}</h1>
					<figure className={styles.banner}>
						<img
							src="/banners/stephen_curry.jpg"
							alt={player.name}
						/>
					</figure>
					<p className={styles.story}>{player.story}</p>
				</div>
			</section>
			<Switch
				currentId={Number(params.player_id)}
				// transition={offRef.current}
			/>
		</>
	)
}
