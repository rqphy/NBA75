"use client"
import React from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

const Experience = () => {
	return (
		<Canvas>
			<OrbitControls />
			<mesh>
				<sphereGeometry args={[4, 32, 16]} />
				<meshNormalMaterial wireframe />
			</mesh>
		</Canvas>
	)
}

export default Experience
