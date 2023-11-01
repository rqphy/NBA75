import styles from "./css/page.module.css"
import playersList from "./data/players.json"
import Player from "./_components/PlayerCard/PlayerCard"
import Experience from "./_components/Experience/Experience"

export default function Home() {
	return (
		<main className={styles.main}>
			<section className={styles.map}>
				<Experience />
			</section>
		</main>
	)
}
