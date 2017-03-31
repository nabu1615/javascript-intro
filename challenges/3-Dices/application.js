(function () {
	var view = new View(),
		model = new Model(),
		controller = new Controller(view, model),
		element = $('.dice');

	function Controller(view, model) {
		this.model = model
		this.view = view
	}

	controller.events = function (){
    	var that = this;

		$('#roller button.add').on('click', function(e) {
			debugger;
			that.view.create(element)
		})

		$('#roller button.roll').on('click', function() {
			that.roll(element)
		})
	}

    controller.roll = function(dice) {
    	that = this;
    	var valRan = that.model.random
        $(dice).find('.die').each(function(k, die) {
            var value = that.model.random()
            that.view.setText(die, valRan)
        }); 
    }

    // Lauch Events
	controller.events(element);

	function Model() {}

	model.random = function() {
    	return Math.floor((Math.random() * 6) + 1)
    }

   	function View() {}

	view.create = function (die) {
		var html = '<div class="die">0</div>';
		$(die).append(html);
    }

    view.setText = function (die, value) {
    	$(die).text(value);
    }

}());