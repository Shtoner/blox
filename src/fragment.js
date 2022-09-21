// varying vec2 vUv;

// float random(vec2 n) { 
//     return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
// }

// vec2 gridUV = vec2(
// floor(vUv.x * 10.0) / 10.0,
// floor(vUv.y * 10.0) / 10.0
// );
// float strength = random(gridUV);

// gl_FragColor=vec4(strength,strength,strength,1.0);

const fragmentShader = `
varying vec2 vUv;

float random(vec2 n) { 
    return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
}
void main(){
vec2 gridUV = vec2(
  floor(vUv.x * 10.0) / 10.0,
  floor(vUv.y * 10.0) / 10.0
);
float strength = random(gridUV);
gl_FragColor=vec4(strength,strength,strength,1.0);
}
`

export default fragmentShader