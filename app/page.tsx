import styles from "./css/page.module.css"
import playersList from "./data/players.json"
import Player from "./_components/PlayerCard/PlayerCard"

export default function Home() {
	return (
		<main className={styles.main}>
			<section className={styles.map}>
				{playersList.map((player, index) => (
					<Player name={player.name} index={index} uid={player.uid} />
				))}
			</section>
		</main>
	)
}
