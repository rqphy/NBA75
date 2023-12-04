"use client"
import { useRouter } from "next/navigation"
import styles from "./Switch.module.css"
import Link from "next/link"
import { useState } from "react"
interface switchProps {
	currentId: number
	// transition: HTMLDivElement | null
}

export default function Switch({ currentId }: switchProps) {
	const router = useRouter()
	const [activeTransition, setActiveTransition] = useState<boolean>(false)

	const handleSwitchClick = (index: number) => {
		setActiveTransition(true)
		setTimeout(() => {
			router.push(`/player/${index}`)
		}, 400)
	}

	return (
		<>
			{activeTransition && <div className={styles.off}></div>}
			<ul className={styles.switch}>
				{currentId > 0 && (
					<figure
						onClick={() => handleSwitchClick(currentId - 1)}
						className={styles.prev}
					>
						<img src="/arrow_icon.png" alt="previous player" />
					</figure>
				)}
				<Link href={"/"} className={styles.bball}>
					<figure>
						<img src="/bball.png" alt="basketball icon" />
					</figure>
				</Link>
				{currentId < 75 && (
					<figure
						onClick={() => handleSwitchClick(currentId + 1)}
						className={styles.next}
					>
						<img src="/arrow_icon.png" alt="next player" />
					</figure>
				)}
			</ul>
		</>
	)
}
