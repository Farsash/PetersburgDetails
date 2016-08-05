			/*
			
			var number_model = 0; // Порядковый номер модели
			
			
			var objects = [];
			
			var t_loader = new THREE.TextureLoader();
			var stone_mat = new THREE.MeshBasicMaterial( { map: t_loader .load('models/stone_dif.jpg')} );
			
			var stone = [{
				path: 'models/stone.json',
				mat: stone_mat,
				name: 'stone',
				scale: 0.3,
				pos_x: 0,
				pos_y: 0,
				pos_z: 0,
			}];	
			
			objects.push(stone)
			
						var stone2 = [{
				path: 'models/stone.json',
				mat: stone_mat,
				name: 'stone',
				scale: 0.0033,
				pos_x: 0,
				pos_y: -3,
				pos_z: 0,
			}];	
			
			objects.push(stone2)
			
			var loader;
			var scene, camera, renderer;
			var areaW = $('#dddd').width(); var areaH = $('#dddd').height();
		
			
			init();
			obj_add(objects[0]);
			
			function init() {
			scene = new THREE.Scene();
			camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
			
			container = document.getElementById( 'dddd' );
			renderer = new THREE.WebGLRenderer();	
			renderer.setSize( areaW, areaH );
			renderer.setClearColor(new THREE.Color(0xebebe8));

			container.appendChild( renderer.domElement );

			var geometry = new THREE.BoxGeometry( 1, 1, 1 );
			var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
			var cube = new THREE.Mesh( geometry, material );
			scene.add( cube );

			camera.position.z = 20;
			render();
				
			}
			
			
			function obj_add(ht) {
				loader = new THREE.JSONLoader();	
				ht.forEach(function(o) {
					loader.load(o.path,
						function ( geometry, materials ) {
							var object = new THREE.Mesh( geometry, o.mat );
							object.scale.set(o.scale,o.scale,o.scale);
							object.position.set(o.pos_x,o.pos_y,o.pos_z);
							geometry.computeTangents();
							object.name = o.name;
							//remove_list.push(object.name);
							scene.add(object);
							render();
						}
					);
				});
			}
	
			function render() {
				renderer.render( scene, camera );
			}

			render();
			
			$('#left_bt').click(function(e) {
				e.preventDefault();
				if (number_model == 0) {} else {
					number_model = number_model - 1;
					preview_img();
				}
			});
			
			$('#right_bt').click(function(e) {
				e.preventDefault();
				number_model = number_model + 1;
				preview_img();s
			});
			*/
				if ( ! Detector.webgl ) Detector.addGetWebGLMessage();
				
				var number_model = 0;
				
				var objects = [];
			
				var t_loader = new THREE.TextureLoader();
				var stone_mat = new THREE.MeshBasicMaterial( { map: t_loader .load('models/stone_dif.jpg')} );
				
				var fun_mat = new THREE.MeshBasicMaterial( { map: t_loader .load('models/o/fun.jpg')} );
				var ogr_mat = new THREE.MeshPhongMaterial( { color: 0x8f8f8f, specular: 0x282725, side:THREE.DoubleSide} );


				var container, loader;
				var camera, controls, scene, renderer;
				var scene = new THREE.Scene();
				var areaW = $('#container').width(); var areaH = $('#container').height();
				
				
							
				var stone = [{
					path: 'models/o/fun.js',
					mat: fun_mat,
					name: 'stone',
					scale: 1,
					pos_x: 0,
					pos_y: 0,
					pos_z: 0,
				},{
					path: 'models/o/og1.js',
					mat: ogr_mat,
					name: 'stone',
					scale: 1,
					pos_x: 0,
					pos_y: 0,
					pos_z: 0,
				}];	
				
				objects.push(stone)
				
				var stone2 = [{
					path: 'models/stone.json',
					mat: stone_mat,
					name: 'stone',
					scale: 0.1,
					pos_x: 0,
					pos_y: -3,
					pos_z: 0,
				}];	
				
				objects.push(stone2)
					

				init();
				obj_add(objects[0]);
				render();
				animate();
				
				function animate() {
					requestAnimationFrame(animate);
					renderer.render( scene, camera );
				}
				
				function init() {
					camera = new THREE.PerspectiveCamera( 60, areaW / areaH, 1, 80000 );
					camera.position.y = 100;
					camera.position.x = 100;
					camera.lookAt(scene);
					controls = new THREE.OrbitControls( camera );
					controls.damping = 0.02;
					controls.addEventListener( 'change', render );
					
					var light = new THREE.PointLight( 0xffffff, 1 );
					light.position.set( 0, 108.53 , 56.36  );
					scene.add( light );
					
					var light = new THREE.PointLight( 0xffffff, 0.8 );
					light.position.set( 0, -108.53 , -56.36  );
					scene.add( light );
					
				
					renderer = new THREE.WebGLRenderer( { antialias: true } );
					renderer.setClearColor( 0xebebe8 );
					renderer.setPixelRatio( window.devicePixelRatio );
					renderer.setSize( areaW, areaH );
					container = document.getElementById( 'container' );
					container.appendChild( renderer.domElement );
					window.addEventListener( 'resize', onWindowResize, false );
					render();
				}	
				
				function onWindowResize() {
					camera.aspect = window.innerWidth / window.innerHeight;
					camera.updateProjectionMatrix();

					renderer.setSize( window.innerWidth, window.innerHeight );
					render();
				}
				
				function render() {	
					renderer.render( scene, camera );
				}
				
				function obj_add(ht) {
					loader = new THREE.JSONLoader();	
					ht.forEach(function(o) {
						loader.load(o.path,
							function ( geometry, materials ) {
								var object = new THREE.Mesh( geometry, o.mat );
								object.scale.set(o.scale,o.scale,o.scale);
								object.position.set(o.pos_x,o.pos_y,o.pos_z);
								geometry.computeTangents();
								object.name = o.name;
								//remove_list.push(object.name);
								scene.add(object);
								render();
							}
						);
					});
				}
	
				
							
				$('#left_bt').click(function(e) {
					e.preventDefault();
					if (number_model == 0) {} else {
						number_model = number_model - 1;
						preview_img();
					}
				});
				
				$('#right_bt').click(function(e) {
					e.preventDefault();
					number_model = number_model + 1;
					preview_img();s
				});