import styles from "./css/page.module.css"
import playersList from "./data/players.json"
import Player from "./components/player/player"

export default function Home() {
	return (
		<main className={styles.main}>
			<section className={styles.map}>
				{playersList.map((player) => (
					<Player name={player.name} uid={player.uid} />
				))}
			</section>
		</main>
	)
}
