<template>
    <div>

    </div>
</template>

<script>
import * as THREE from 'three'
// 引入轨道控制器
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
// 引入gsap动画
import gsap from 'gsap'
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
        const meterial = new THREE.MeshBasicMaterial({ color: 0x4670A8 });   //材质
        const cube = new THREE.Mesh(geomerty, meterial);
        sence.add(cube);
        // 相机位置  也就是离物体位置
        camera.position.z = 20;

        // 3.添加坐标轴 红色代表 X 轴. 绿色代表 Y 轴. 蓝色代表 Z 轴.   5代表刻度
        const axes = new THREE.AxesHelper(20);
        sence.add(axes);

        //4.添加轨道控制器  
        const controls = new OrbitControls(camera, render.domElement);

        //5.比例缩放
        cube.scale.set(1, 1, 1)

        //6.Clock  时钟
        const clock = new THREE.Clock;

        //7.gsap动画库  不能放 animate里  不然一直重复执行 没有效果
        // gsap.to(cube.position,10, {x:20, y:20});//向右移动200px的同时向下移动100px
        gsap.to(cube.position,5, {
                x:20,
                repeat:-1,  //一直重复
                ease:'Power1.easeOut',  //动画效果
                yoyo:true //往返
        });

        //8.屏幕适配  监听页面变化更新视图
        window.addEventListener('resize',()=>{
            //更新摄像头
            camera.aspect = window.innerWidth / window.innerHeight;
            // 更新摄像机投影矩阵
            camera.updateProjectionMatrix();
            //...

            camera.setSize(window.innerWidth,window.innerHeight);
        })

        //渲染循环 或动画循环  time是requestAnimationFrame默认传的
        function animate() {
            render.render(sence, camera);
            // 下一帧执行animate  这样就会一帧帧的连续执行了
            requestAnimationFrame(animate);
        }
        animate();
    }
}
</script>
