"use client"
import React from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import Player from "../PlayerCard/PlayerCard"

interface player {
    name: string
    uid: number
    story: string
}

const cameraDistance = 7.5
const maxCameraDistance = 7

interface experienceProps {
    playerList: player[]
}

export default function Experience({ playerList }: experienceProps) {
    return (
        <Canvas
            camera={{
                fov: 45,
                position: [-1.666, 7.2, -1.321],
            }}
        >
            <OrbitControls
                minDistance={cameraDistance}
                maxDistance={cameraDistance}
            />
            <mesh>
                <sphereGeometry args={[4, 32, 16]} />
                <meshBasicMaterial color={"white"} wireframe />
            </mesh>
            {playerList.map((player, index) => (
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
