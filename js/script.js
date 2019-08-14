$(document).ready(function(){
    var totalWidth = 0;
    var positions = new Array();
    
    $('#slides .slide').each(function(i){
    	//Obtener ancho de slider
    	positions[i] = totalWidth;
    	totalWidth += $(this).width();
        
        //Chequear ancho
    	if (!$(this).width) {
            alert('Please add a width to your images');
            return false;
    	}
    });

    //Colocar ancho
    $('#slides').width(totalWidth);
    //Menu de items
    $('#menu ul li a').click(function(e, keepScroll){
    	//Eliminar clase activa y agregar inactiva
    	$('li.product').removeClass('active').addClass('inactive');
    	//Agregar clase activa al parent
    	$(this).parent().addClass('active');
    	var pos = $(this).parent().prevAll('.product').length;

    	$('#slides').stop().animate({marginLeft:-positions[pos]+'px'}, 450);

    	//Default previo
    	e.preventDefault();
        //Detener autoscroll
    	if(!autoscroll) clearInterval(itvl);
    });
    
    //Hacer de la primer imagen activa
    $('#menu ul li.product:first').addClass('active').siblings().addClass('inactive');

    //Auto Scroll
    var current= 1;
    //Duración de auto scroll
    var duration = 10;
    var itvl = setInterval(function(){autoScroll()}, duration*10000);
    function autoScroll(){
    	if (current == -1) return false;

    	$('#menu ul li a').eq(current%$('menu ul il a').length).trigger('click', [true]);
    }

   
});