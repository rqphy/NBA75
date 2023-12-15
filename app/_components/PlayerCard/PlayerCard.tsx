"use client"
import { useRouter } from "next/navigation"
import { Text } from "@react-three/drei"
import { Group, Vector3 } from "three"
import { useRef, useEffect, useState } from "react"
import { useFrame } from "@react-three/fiber"
import Poster from "../Poster/Poster"

interface playerProps {
	name: string
	uid: number
	index: number
}

const numberOfPlanes = 76
const sphereRadius = 3.9

export default function Player({ name, uid, index }: playerProps) {
	const router = useRouter()

	const handleGroupClick = () => {
		router.push(`/player/${index}`)
	}

	const groupRef = useRef<Group>(null)
	useFrame(() => {
		groupRef.current?.lookAt(0, 0, 0)
	})

	const [cardPos, setCardPos] = useState<Vector3>(new Vector3(0, 0, 0))

	useEffect(() => {
		const phi = Math.acos(-1 + (2 * (index + 0.5)) / numberOfPlanes) // Polar angle
		const theta = Math.sqrt(numberOfPlanes * Math.PI) * phi // Azimuthal angle

		const pos = new Vector3(
			sphereRadius * Math.sin(phi) * Math.cos(theta),
			sphereRadius * Math.sin(phi) * Math.sin(theta),
			sphereRadius * Math.cos(phi)
		)

		setCardPos(pos)
	}, [])

	return (
		<group ref={groupRef} position={cardPos} onClick={handleGroupClick}>
			<Poster index={index} uid={uid.toString()} />
			<Text
				position={[-0.28, 0.45, 0.05]}
				rotation={[0, 0, Math.PI * 1.5]}
				color="white"
				anchorX="left"
				anchorY="top"
				scale={0.08}
			>
				{name}
			</Text>
		</group>
	)
}
