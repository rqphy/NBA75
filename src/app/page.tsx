import styles from "./css/page.module.css"
import playersList from "./data/players.json"

export default function Home() {
	return (
		<main className={styles.main}>
			<section className={styles.map}>
				{playersList.map((player) => (
					<li className={styles.player}>{player}</li>
				))}
			</section>
		</main>
	)
}
