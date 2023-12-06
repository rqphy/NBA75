import { useRef } from "react"
import { useLoader, extend, useFrame, Object3DNode } from "@react-three/fiber"
import { DoubleSide, TextureLoader } from "three"
import WaveShaderMaterial from "./shader/wave"

declare module "@react-three/fiber" {
	interface ThreeElements {
		waveShaderMaterial: Object3DNode<any, typeof WaveShaderMaterial>
	}
}

extend({ WaveShaderMaterial })

interface posterProps {
	index: number
	posterLink?: string
}

export default function Poster({
	index,
	posterLink = "/posters/stephen_curry.jpg",
}: posterProps) {
	const shaderRef = useRef<any>()

	useFrame(({ clock }) => {
		// get uTime for shader
		if (shaderRef) {
			shaderRef.current.uTime += 0.003
		}
	})
	const [image] = useLoader(TextureLoader, [posterLink])

	return (
		<group>
			{/* <mesh position={[0, 0, -0.0001]}>
                <planeGeometry args={[0.8, 1]} />
                <meshBasicMaterial color={"black"} side={DoubleSide} />
            </mesh> */}
			<mesh>
				<planeGeometry args={[0.8, 1, 16, 16]} />
				{/* <meshBasicMaterial map={image} /> */}
				<waveShaderMaterial
					ref={shaderRef}
					uTexture={image}
					uIndex={index}
					toneMapped={false}
					side={DoubleSide}
				/>
			</mesh>
		</group>
	)
}
