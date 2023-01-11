<template>
    <div>

    </div>
</template>

<script>
import * as THREE from 'three'
// 引入轨道控制器
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
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
        // 相机位置  也就是离物体位置
        camera.position.z = 10;

        // 3.添加坐标轴 红色代表 X 轴. 绿色代表 Y 轴. 蓝色代表 Z 轴.   5代表刻度
        const axes = new THREE.AxesHelper(5);
        sence.add(axes); 

        //4.添加轨道控制器  
        const controls = new OrbitControls( camera, render.domElement );

        
        //渲染循环 或动画循环
        function animate() {
            render.render(sence, camera);
            // 下一帧执行animate  这样就会一帧帧的连续执行了
            requestAnimationFrame(animate);
        }
        animate();

    }
}
</script>
