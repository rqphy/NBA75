import Player from "@/app/components/player/player"

interface pageProps {
	params: { player: string }
}

export default function page({ params }: pageProps) {
	return <Player name={params.player} />
}