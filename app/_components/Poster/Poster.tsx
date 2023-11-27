import { useLoader } from "@react-three/fiber"
import { group } from "console"
import { DoubleSide, TextureLoader } from "three"

export default function Poster({ posterLink = "/posters/stephen_curry.jpg" }) {
    const [image] = useLoader(TextureLoader, [posterLink])

    return (
        <group>
            <mesh position={[0, 0, -0.0001]}>
                <planeGeometry args={[0.8, 1]} />
                <meshBasicMaterial color={"black"} side={DoubleSide} />
            </mesh>
            <mesh>
                <planeGeometry args={[0.8, 1]} />
                <meshBasicMaterial map={image} />
            </mesh>
        </group>
    )
}
