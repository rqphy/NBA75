interface pageProps {
	params: { player: string }
}

export default function page({ params }: pageProps) {
	return <div>{params.player}</div>
}
