"use client"
import React from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

const Experience = () => {
	return (
		<Canvas>
			<OrbitControls />
			<mesh>
				<torusKnotGeometry />
				<meshNormalMaterial />
			</mesh>
		</Canvas>
	)
}

export default Experience
