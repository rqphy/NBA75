"use client"
import React from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import Player from "../PlayerCard/PlayerCard"
import playersList from "../../data/players.json"

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
			{playersList.map((player, index) => (
				<Player
					key={player.uid}
					name={player.name}
					uid={player.uid}
					index={index}
				/>
			))}
		</Canvas>
	)
}

export default Experience
