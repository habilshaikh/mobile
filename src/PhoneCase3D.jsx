import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const ACCENT_COLORS = [0x4338ca, 0x1d4ed8, 0x0e7490, 0x334155, 0x64748b];

function PhoneCase3D() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    mount.appendChild(renderer.domElement);

    const ambient = new THREE.AmbientLight(0xffffff, 0.55);
    const keyLight = new THREE.DirectionalLight(0xffffff, 1.4);
    keyLight.position.set(4, 6, 6);
    const rimLight = new THREE.DirectionalLight(0x4338ca, 0.9);
    rimLight.position.set(-5, -2, -4);
    const fillLight = new THREE.PointLight(0x1d4ed8, 1.1, 12);
    fillLight.position.set(0, -1, 4);
    scene.add(ambient, keyLight, rimLight, fillLight);

    // ---- Main phone group ----
    const phoneGroup = new THREE.Group();

    const bodyGeo = new THREE.BoxGeometry(2.6, 5.4, 0.35, 3, 3, 2);
    const bodyMat = new THREE.MeshPhysicalMaterial({
      color: 0x1e293b,
      metalness: 0.3,
      roughness: 0.2,
      clearcoat: 0.9,
      clearcoatRoughness: 0.15,
    });
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    phoneGroup.add(body);

    const screenGeo = new THREE.BoxGeometry(2.3, 5.0, 0.05);
    const screenMat = new THREE.MeshPhysicalMaterial({
      color: 0x0b0e18,
      metalness: 0.1,
      roughness: 0.05,
      clearcoat: 1,
    });
    const screen = new THREE.Mesh(screenGeo, screenMat);
    screen.position.z = 0.2;
    phoneGroup.add(screen);

    const textureLoader = new THREE.TextureLoader();
    const screenTexture = textureLoader.load(
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=500&q=70"
    );
    screenTexture.colorSpace = THREE.SRGBColorSpace;

    const screenPhotoGeo = new THREE.PlaneGeometry(2.28, 4.95);
    const screenPhotoMat = new THREE.MeshBasicMaterial({ map: screenTexture });
    const screenPhoto = new THREE.Mesh(screenPhotoGeo, screenPhotoMat);
    screenPhoto.position.z = 0.231;
    phoneGroup.add(screenPhoto);

    const lensGeo = new THREE.CircleGeometry(0.28, 32);
    const lensMat = new THREE.MeshStandardMaterial({
      color: 0x111111,
      metalness: 0.85,
      roughness: 0.08,
    });
    const lens = new THREE.Mesh(lensGeo, lensMat);
    lens.position.set(-0.75, 1.9, -0.19);
    lens.rotation.y = Math.PI;
    phoneGroup.add(lens);

    scene.add(phoneGroup);

    // ---- Glowing platform ----
    const platformGeo = new THREE.CylinderGeometry(3.4, 3.4, 0.08, 64);
    const platformMat = new THREE.MeshStandardMaterial({
      color: 0x1e2436,
      metalness: 0.6,
      roughness: 0.3,
      emissive: 0x1d4ed8,
      emissiveIntensity: 0.1,
    });
    const platform = new THREE.Mesh(platformGeo, platformMat);
    platform.position.y = -3.1;
    scene.add(platform);

    const ringGeo = new THREE.RingGeometry(3.35, 3.55, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x475569,
      transparent: true,
      opacity: 0.5,
      side: THREE.DoubleSide,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = -3.05;
    scene.add(ring);

    // ---- Orbiting accessory tokens ----
    const orbiters = [];
    const orbiterGeo = new THREE.IcosahedronGeometry(0.32, 0);
    ACCENT_COLORS.forEach((color, index) => {
      const mat = new THREE.MeshPhysicalMaterial({
        color,
        metalness: 0.4,
        roughness: 0.2,
        clearcoat: 1,
        emissive: color,
        emissiveIntensity: 0.25,
      });
      const mesh = new THREE.Mesh(orbiterGeo, mat);
      const radius = 4.1 + (index % 2) * 0.5;
      const speed = 0.35 + index * 0.08;
      const yOffset = Math.sin(index) * 1.2;
      const angleOffset = (index / ACCENT_COLORS.length) * Math.PI * 2;
      orbiters.push({ mesh, radius, speed, yOffset, angleOffset });
      scene.add(mesh);
    });

    // ---- Particle field ----
    const particleCount = 220;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i += 1) {
      positions[i * 3] = (Math.random() - 0.5) * 16;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 2;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x94a3c4,
      size: 0.04,
      transparent: true,
      opacity: 0.55,
      sizeAttenuation: true,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    let frameId;
    const clock = new THREE.Clock();

    function animate() {
      const elapsed = clock.getElapsedTime();

      phoneGroup.rotation.y = elapsed * 0.42;

      const riseDuration = 1.6;
      const risePhase = Math.min(elapsed / riseDuration, 1);
      const easedRise = 1 - Math.pow(1 - risePhase, 3);
      const startY = -6;
      phoneGroup.position.y = startY + (0 - startY) * easedRise;

      orbiters.forEach(({ mesh, radius, speed, yOffset, angleOffset }) => {
        const angle = elapsed * speed + angleOffset;
        mesh.position.set(
          Math.cos(angle) * radius,
          yOffset + Math.sin(elapsed * 0.8 + angleOffset) * 0.4,
          Math.sin(angle) * radius - 1.5
        );
        mesh.rotation.x = elapsed * 0.8;
        mesh.rotation.y = elapsed * 0.6;
      });

      ring.rotation.z = elapsed * 0.15;
      particles.rotation.y = elapsed * 0.03;

      const camAngle = elapsed * 0.12;
      camera.position.set(Math.sin(camAngle) * 8.5, 1.2 + Math.sin(elapsed * 0.3) * 0.4, Math.cos(camAngle) * 8.5);
      camera.lookAt(0, -0.2, 0);

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    }
    animate();

    function handleResize() {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      bodyGeo.dispose();
      bodyMat.dispose();
      screenGeo.dispose();
      screenMat.dispose();
      screenPhotoGeo.dispose();
      screenPhotoMat.dispose();
      screenTexture.dispose();
      lensGeo.dispose();
      lensMat.dispose();
      platformGeo.dispose();
      platformMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      orbiterGeo.dispose();
      orbiters.forEach(({ mesh }) => mesh.material.dispose());
      particleGeo.dispose();
      particleMat.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div className="phone-3d-canvas" ref={mountRef} />;
}

export default PhoneCase3D;
