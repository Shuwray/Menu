$(function(){
	var Acordeao = function (el,multiple) {
		this.el = el || {};
		this.multiple = multiple || false;
		
		//variavel
		var links = this.el.find('.link');
		//evento
		links.on('click',{el: this.el, multiple: this.multiple}, this.dropdown)
	}
	Acordeao.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this= $(this),
			$next= $this.next();

			$next.slideToggle();
			$this.parent().toggleClass('open');
			
			if (!e.data.multiple) {
				$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
			};
	}
	var acordeao = new Acordeao($('#acordeao'),false);
});