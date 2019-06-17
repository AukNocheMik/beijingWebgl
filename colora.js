var materiala,materialb,materialc;

function colora() { 
		 var lightMap = new  THREE.TextureLoader().load('files/back/aa.jpg');
		 var lightMapb = new  THREE.TextureLoader().load('files/cctv_color.jpg');
		 var lightMapb = new  THREE.TextureLoader().load('files/back/download.jpg');
		  materiala = new THREE.MeshStandardMaterial(
            {
                //color: 0xff0000,
				metalness:0.9,
				roughness:0.1,
				map:lightMap,
            });
		 materialb = new THREE.MeshStandardMaterial(
            {
                //color: 0xff0000,
				metalness:0.2,
				roughness:0.7,
				map:lightMapb,
				//normalMap:lightMapa,
            });
			materialc = new THREE.MeshStandardMaterial(
            {
                //color: 0xff0000,
				metalness:0.5,
				roughness:0.5,
				map:lightMapc,
				//normalMap:lightMapa,
            });
}

function colorb() { 
var materialaa,materialbb,materialcc
		 var lightMapaa = new  THREE.TextureLoader().load('files/back/back.jpg');
		 var lightMapbb = new  THREE.TextureLoader().load('files/bg5.jpg');
		 var lightMapcc = new  THREE.TextureLoader().load('files/timg.jpg');
		  materialaa = new THREE.MeshStandardMaterial(
            {
                //color: 0xff0000,
				metalness:0.9,
				roughness:0.1,
				map:lightMap,
            });
		 materialbb = new THREE.MeshStandardMaterial(
            {
                //color: 0xff0000,
				metalness:0.9,
				roughness:0.1,
				map:lightMapb,
				//normalMap:lightMapa,
            });
			materialcc = new THREE.MeshStandardMaterial(
            {
                //color: 0xff0000,
				metalness:0.9,
				roughness:0.1,
				map:lightMapc,
				//normalMap:lightMapa,
            });
}
			
			function colorc() { 
			var materialaaa,materialbbb,materialccc
		 var lightMapaaa = new  THREE.TextureLoader().load('files/back/tai.jpg');
		 var lightMapbbb = new  THREE.TextureLoader().load('files/cctv_roughness_1255.jpg');
		 var lightMapccc = new  THREE.TextureLoader().load('files/back/car-shadow.jpg');
		  materialaaa = new THREE.MeshStandardMaterial(
            {
                //color: 0xff0000,
				metalness:0.1,
				roughness:0.8,
				map:lightMap,
            });
		 materialbbb = new THREE.MeshStandardMaterial(
            {
                //color: 0xff0000,
				metalness:0.8,
				roughness:0.1,
				map:lightMapb,
				//normalMap:lightMapa,
            });
			materialccc = new THREE.MeshStandardMaterial(
            {
                //color: 0xff0000,
				metalness:0.5,
				roughness:0.5,
				map:lightMapc,
				//normalMap:lightMapa,
            });
			}