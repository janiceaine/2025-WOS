const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('bg-canvas') });
renderer.setSize(window.innerWidth, window.innerHeight);

const geometry = new THREE.SphereGeometry(0.5, 32, 32);
const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
const star = new THREE.Mesh(geometry, material);
scene.add(star);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  star.rotation.x += 0.01;
  star.rotation.y += 0.01;
  renderer.render(scene, camera);
}

animate();