"use client"
import React from "react"
import { Canvas } from "@react-three/fiber"

const Experience = () => {
	return (
		<Canvas>
			<mesh>
				<torusKnotGeometry />
				<meshNormalMaterial />
			</mesh>
		</Canvas>
	)
}

export default Experience
