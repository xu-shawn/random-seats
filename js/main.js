const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const light = new THREE.AmbientLight(0xffffff, 10);
scene.add(light);

// const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

camera.position.set(0,10,00);
camera.lookAt(0,0,0);

const loader = new THREE.GLTFLoader();
loader.load
("../assets/classroom/Classroom.glb", function(gltf)
 {
     scene.add(gltf.scene);
 }
);

function animate()
{
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

animate();
