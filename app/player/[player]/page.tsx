import Player from "../../_components/PlayerCard/PlayerCard"
import playerList from "../../data/players.json"
import { useMemo, useState } from "react"

interface pageProps {
	params: { playerId: string }
}

export default function page({ params }: pageProps) {
	return <h1>{"toto"}</h1>
}
