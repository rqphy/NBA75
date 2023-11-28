precision mediump float;

uniform float uTime;
uniform sampler2D uTexture;
uniform bool uGrayscale;


varying vec2 vUv;
varying float vWave;

void main()
{
    float wave = vWave * 0.1;
    vec4 texColor = texture2D(uTexture, vUv + wave);
    vec3 filteredColor = texColor.rgb;
    vec3 colorFilter = vec3(0.3, 0.3, 0.3);

    if (uGrayscale) {
        filteredColor = texColor.rgb * colorFilter;
    }

    gl_FragColor = vec4(filteredColor, texColor.a);

    #include <tonemapping_fragment>
    #include <encodings_fragment>


}
