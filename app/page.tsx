import styles from "./css/page.module.css"
import Experience from "./_components/Experience/Experience"
import playerList from "@/app/data/players.json"

export default async function Home() {
	return (
		<main className={styles.main}>
			<section className={styles.map}>
				<Experience playerList={playerList} />
			</section>
		</main>
	)
}
