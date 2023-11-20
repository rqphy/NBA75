"use client"
import React from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

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
		</Canvas>
	)
}

export default Experience
