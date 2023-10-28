import { FC } from "react"

interface pageProps {
	params: { player: string }
}

const page: FC<pageProps> = ({ params }) => {
	return <div>{params.player}</div>
}

export default page
