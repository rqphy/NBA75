import { DoubleSide } from "three"

export default function Poster() {
    return (
        <mesh>
            <planeGeometry args={[0.8, 1]} />
            <meshNormalMaterial side={DoubleSide} />
        </mesh>
    )
}
