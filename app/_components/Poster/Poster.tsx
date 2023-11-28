import { useRef } from "react"
import { useLoader, extend, useFrame } from "@react-three/fiber"
import { DoubleSide, TextureLoader } from "three"
import WaveShaderMaterial from "./shader/wave"

extend({ WaveShaderMaterial })

export default function Poster({
    index,
    posterLink = "/posters/stephen_curry.jpg",
}) {
    const shaderRef = useRef()

    useFrame(({ clock }) => {
        // get uTime for shader
        shaderRef.current.uTime += 0.003
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
