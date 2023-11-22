import Link from "next/link"
import styles from "./PlayerCard.module.css"
import { Text } from "@react-three/drei"
import { DoubleSide } from "three"

interface playerProps {
	name: string
	uid: number
	index: number
}

export default function Player({ name, uid, index }: playerProps) {
	return (
		<group key={index} position={[0 + index, 0, 4]}>
			{/* <Link href={`/player/${index}`}> */}
			<mesh>
				<planeGeometry args={[0.8, 1]} />
				<meshNormalMaterial side={DoubleSide} />
			</mesh>
			<Text
				position={[-0.32, 0.48, 0.001]}
				rotation={[0, 0, Math.PI * 1.5]}
				color="white"
				anchorX="left"
				anchorY="top"
				scale={0.08}
			>
				{name}
			</Text>
			{/* </Link> */}
		</group>
	)
}
