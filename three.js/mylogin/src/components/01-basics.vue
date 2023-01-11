<template>
    <div>

    </div>
</template>

<script>
import * as THREE from 'three'
export default {
    data() {
        return {

        }
    },
    created() {
        // 1.创建一个场景
        const sence = new THREE.Scene();
        //相机
        //PerspectiveCamera(fov,aspect,near,far) 透视摄像机    
        //fov — 摄像机视锥体垂直视野角度
        //aspect — 摄像机视锥体长宽比
        //near — 摄像机视锥体近端面
        //far — 摄像机视锥体远端面    
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const render = new THREE.WebGLRenderer();
        render.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(render.domElement);


        //2.添加立方体
        const geomerty = new THREE.BoxGeometry(1, 1, 1)  //几何体
        const meterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });   //材质
        const cube = new THREE.Mesh(geomerty, meterial);
        sence.add(cube);
        camera.position.z = 5;

        //渲染循环 或动画循环
        function animate() {
            requestAnimationFrame(animate);
            // 每帧执行  正常情况下是60次/秒
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            render.render(sence, camera);
        }
        animate();

    }
}
</script>
