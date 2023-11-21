"use client"
import React from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import Player from "../PlayerCard/PlayerCard"

const Experience = () => {
	return (
		<Canvas
			camera={{
				fov: 45,
				position: [0, 0, 7.5],
			}}
		>
			<OrbitControls />
			<mesh>
				<sphereGeometry args={[4, 32, 16]} />
				<meshNormalMaterial wireframe />
			</mesh>
			<Player name="hello" uid={12} index={3} />
		</Canvas>
	)
}

export default Experience
