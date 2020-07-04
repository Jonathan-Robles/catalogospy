var id = function(x){ return ' id="' + x + '"'}
var cls = function(x){ return ' class="' + x + '"'}
var stl = function(x){ return ' style="' + x + '"'}
var src = function(x){ return ' src="' + x + '"'}
var href = function(x){ return ' href="' + x + '"'}
var onclick = function(x){ return ' onclick="' + x + '"'}

var crtDiv = function(attr, content){ return createElem('div', content)}
var crtA = function(attr, content){ return createElem('a',  content, attr)}
var crtI = function(attr, content){ return createElem('i',  content, attr)}

var crtImg = function(attr){ return '<img' + attr + '>'}

function createElem(elem,content,attr){
	let object = {
		lt:'<',	elem: elem, attr:attr, gt:'>',
		content: content, lts:'</',
		result: function(){
			return this.lt + this.elem + [this.attr] + this.gt +
					[this.content] +
					this.lts + this.elem + this.gt
			    }
    }
    return object.result()
}

function compElem(element,id,className){
    let x = document.createElement(element);
    x.id = id;  x.className = className;
return x;
}

var facebook ="fb://facewebmodal/f?href=https://www.facebook.com/articulosbquilla";
var instagram="https://www.instagram.com/articulos_bquilla";
var	face_art ='fb://page/378010675934018';
var	face_gor ='fb://page/581398665578960';
var server = "https://artbaq.github.io/catalogo/";



var containerModal = document.getElementById('container-modal');
var mySidebar = document.getElementById("mySidebar");
var social = document.getElementById('social');
var modal = document.getElementById('myModal');

var arrowLeft = crtA( id('arrowLeft') + 
	stl('position:absolute; top:45%; left:0; z-index:2;') +
	onclick('plusDivs(-1)') , crtImg( stl('width:50px') + src('arrowLeft.png') )  );

var arrowRight = crtA(	id('arrowRight') +
	stl('position:absolute; top:45%; right:0; z-index:2;') +
	onclick('plusDivs(1)') , crtImg( stl('width:50px') + src('arrowRight.png') ));					


function get_images(y, n)
{   	
	var f1_Set ='';
		for (var i = 0; i <= n; i++)	
		{	
			f1_Set += '<img class="caption" src="logo.png"><img class="passing" src="'+ y + i +'.png" style="width:100%">';
	 	}	
			f1_Set += '<img src="marco.png" style="position:absolute; top:0; width: 100%;z-index:2;">';
				
			f1_Set += arrowLeft + arrowRight;
						
			containerModal.innerHTML = f1_Set ; 		 
}


// Get the modal
function oModal(nam, num,){
	exit_Icon(myModal);
		modal.style.display = "block";    
	get_images(nam , num)
	showDivs(slideIndex); 
	}

function exit_Icon(id){
	var x = id.getElementsByTagName("a")[0]; 
		x.innerHTML = "&#10006";			
		x.src = "javascript:void(0)";
		x.onclick = function(){ w3_close() };
		}

function w3_close()	{	modal.style.display = 'none'; }

var slideIndex = 0;


function plusDivs( n
){	showDivs(slideIndex += n);
}


function showDivs(n){     var i;   
	var x = document.getElementsByClassName("passing");
	var y = document.getElementsByClassName("caption");
  	
  	if (n > x.length)	{ slideIndex = 1; }   	
	if (n < 1) 	{ slideIndex = x.length } 
	
		for ( i = 0; i < x.length; i++
		){
			x[i].style.display = "none";
			y[i].style.display = "none";
		}    
    	x[slideIndex-1].style.display = "block";  
    	y[slideIndex-1].style.display = "block";
}



function backTop(){

	let a = document.createElement('a'); 
	let i = document.createElement('i');
			a.id = 'homeButtom';
			a.href = '#inicio';			
			i.className = 'fa fa-home';			
		a.appendChild(i);
		document.body.appendChild(a);		
} 
backTop();	// This is the calling of backTop() function


function backTo(){
	let a = document.createElement('a'); 
	let i = document.createElement('mark');
			a.id = 'homeButtom';
			a.href = '#inicio';
			i.className = 'fa fa-home';
			i.innerHTML = '154';	
		a.appendChild(i);
		document.body.appendChild(a);		
} 


var homeButton = document.getElementById('homeButtom');
var emptySpace = document.getElementById('emptySpace');

function scrolling(){	
		if(header.offsetTop < window.pageYOffset){
			header.classList.add("sticky");	
			logo.style.opacity='1';	
			logo.style.transition ='1s';
			emptySpace.style.cssText ='height:3.4em;';				
		}else{
			header.classList.remove("sticky") ;
			logo.style.opacity ='0';
			logo.style.transition ='0s';
			emptySpace.style.cssText ='height:0em;';
		}
}


function backTopTrigger(){
	if(catalogos.offsetTop < window.pageYOffset)
	{		homeButton.style.width="40px";
		}else{		homeButton.style.width="0px";
	}			
}
