import styles from "./css/page.module.css"
import Experience from "./_components/Experience/Experience"
import { promises as fs } from "fs"

export default async function Home() {
	const file = await fs.readFile(
		process.cwd() + "/app/data/players.json",
		"utf8"
	)

	const data = JSON.parse(file)

	return (
		<main className={styles.main}>
			<section className={styles.map}>
				<Experience playerList={data} />
			</section>
		</main>
	)
}
