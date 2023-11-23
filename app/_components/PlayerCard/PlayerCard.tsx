"use client"
import Link from "next/link"
import styles from "./PlayerCard.module.css"
import { Text } from "@react-three/drei"
import { DoubleSide, Group, Vector3 } from "three"
import { useRef, useEffect, useState } from "react"
import { useFrame } from "@react-three/fiber"

interface playerProps {
	name: string
	uid: number
	index: number
}

const numberOfPlanes = 76
const sphereRadius = 4
let x = 0
let y = 0
let z = 0

export default function Player({ name, uid, index }: playerProps) {
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
		<group ref={groupRef} position={cardPos}>
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
