import { promises as fs } from "fs"

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

	return <h1>{player.name}</h1>
}
