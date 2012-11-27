function getEngine (root) {
	var canvas = root;
	var dragging = undefined;
	var entities = [];

	function draw(entity, type){
		entities.push(entity);
		entity.id = entities.length;
		$("#"+canvas).append('<div class="entity" id="'+entity.id+'"></div>');
		
		if(type === "circle"){
			$("#"+entity.id).css({	top: entity.y, left: entity.x, 
									width: entity.radius, height: entity.radius, 
									borderRadius: "50%", backgroundColor: entity.background});
		} else if (type === "rectangle"){
			$("#"+entity.id).css({	top: entity.y, left: entity.x, 
									width: entity.width, height: entity.height,
									borderRadius: 0, backgroundColor: entity.background});
		}

		$("#console").html(JSON.stringify(entities));
	}

	return {
		drawRectangle : function (r){
			draw(r, "rectangle");
		},

		drawCircle : function (c) {
			draw(c, "circle");
		},

		click : function(callback) {
			$("#"+canvas).click(callback);
		}
	};
}