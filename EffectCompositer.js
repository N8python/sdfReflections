import * as THREE from 'https://cdn.skypack.dev/pin/three@v0.137.0-X5O2PK3x44y1WRry67Kr/mode=imports/optimized/three.js';

const EffectCompositer = {
    uniforms: {
        'tDiffuse': { value: null },
        'sceneDiffuse': { value: null }
    },
    vertexShader: /*glsl*/ `
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }
    `,
    fragmentShader: /*glsl*/ `
    varying vec2 vUv;
    uniform sampler2D tDiffuse;
    uniform sampler2D sceneDiffuse;
    void main() {
        gl_FragColor = vec4(texture2D(sceneDiffuse, vUv).rgb * texture2D(tDiffuse, vUv).rgb, 1.0);
    }
    `

}
export { EffectCompositer };