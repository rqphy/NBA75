import { shaderMaterial } from "@react-three/drei"
import vertexShader from "./vertex.glsl"
import fragmentShader from "./fragment.glsl"
import * as THREE from "three"

const WaveShaderMaterial = shaderMaterial(
    // Uniform
    {
        uGrayscale: false,
        uTime: 0,
        uTexture: new THREE.Texture(),
    },
    vertexShader,
    fragmentShader
)

export default WaveShaderMaterial
