
var gorrasCat = [
  {
    url:"oModal('cur_',8)",
    imges:"static/images/cur_2.png",
    txt:'Gorras Curvadas'
  },
  {
    url:"oModal('pla_',9)",
    imges:"pla_5.png",
    txt:'Gorras Planas'
  },
	{
	  url:"oModal('cap_',18)",
	  imges:"cap_all.png",
	  txt:'Ver todas <b>&#X271A</b>'
	}  
]

var technoCat = [   
  {
    url:"oModal('ear_',4)",
    imges:"ear_4.png",
    txt:'Audifonos & Bluetooth'
  },
  {
    url:"oModal('cha_',4)",
    imges:"cha_2.png",
    txt:'Cargadores & Cables'
  },
  {
    url:"oModal('spe_',2)",
    imges:"spe_0.png",
    txt:'Speakers'
  },
  {
    url:"oModal('tec_',20)",
    imges:"tec_1.png",
    txt:'Miscelaneos & más'
  }  
]

var promoList = [
	{
	  url:"oModal('tec_',21); showDivs(slideIndex = 1)" , 
	  image: "{{ url_for('static', filename='tec_0.png') }}" , 
	  title: "Smart TV BOX plus" , 
	  senten: "Aprovecha que solo quedan pocos."
	},
	{
	  url:"oModal('tec_',21); showDivs(slideIndex = 2)",
	  image: "tec_1.png",
	  title: "Receptor Bluetooth",
	  senten: "Transmite sonido por Bluetooth."
	},
	{
	  url:"oModal('tec_',21); showDivs(slideIndex = 3)",
	  image: "tec_2.png",
	  title: "Speaker Bluetooth",
	  senten: "Lleva tu musica a donde quieras."
	},
	{
	  url:"oModal('cap_',11); showDivs(slideIndex = 6)",
	  image: "cap_5.png",
	  title: "Gorras Planas",
	  senten: "Tu mejor estilo para cada ocacion."
	},
	{
	  url:"oModal('tec_',21); showDivs(slideIndex = 5)",
	  image: "tec_4.png",
	  title: "Game pad",
	  senten: "Llevas tus juegos a otro nivel."
	}
]

promoList.unshift(
    {
      url: "oModal('tec_',20); showDivs(slideIndex = 6)", 
      image: "tec_5.png", 
      title: "Cable HDMI", 
      senten: "Para contenidos de alta calidad"
    }
  )

var iconsAndUrls = [
    {   
      name: "Nosotros",
      icon: "fa fa-user",
      url: "#"
    },
    {
      name:"Catalogos",
      icon: "fa fa-list",
      url: "#catalogos" 
    },
    {
      name: "Facebook",
      icon: "fab fa-facebook-square",
      url: "fb://facewebmodal/f?href=https://www.facebook.com/articulosbquilla"
    },
    {  
      name: "Instagram",
      icon: "fab fa-instagram",
      url: "https://www.instagram.com/articulos_bquilla"
    },
    {
      name: "Whatsapp", 
      icon: "fab fa-whatsapp",
      url: "https://api.whatsapp.com/send?phone=+573008546921"
    },
    {
      name: "Linkedin",
      icon: "fab fa-linkedin",
      url: "#"
    },
    {
      name: "Google",
      icon: "fab fa-google-plus-square",
      url: "#"  
    }
  ]


let x = iconsAndUrls.slice(0,2);    
let menuIcons = 
  x.concat(iconsAndUrls.slice(4,5));
let socialIcons = 
  iconsAndUrls.slice(2,5);

var cont = 0;

var setCls = function(x){ return ' class="' + x + '"'}
var setStyle = function(x){ return ' style="' + x + '"'} 
var setHref = function(x){ return ' href="' + x + '"'}
var setSrc = function(x){ return ' src="' + x + '"'}
var setId = function(x){ return ' id="' + x + '"'}
var setOnClk = function(x){ return ' onclick="' + x + '"'}

var createElem2 =(elem,attr,content)=>{return '<'+elem +[attr]+'>' +[content]+ '</'+elem+'>' } 

var create_aPlusI =(attr1, content1, attr2, content2 )=>{ return createElem2('a', attr1, createElem2('i', attr2, content2) + content1 )}
var create_divPlusH3 =(attr1, content1, attr2, content2 )=>{ return createElem2('div', attr1, createElem2('h3', attr2, content2) + content1 )}





function setMainBox(id, heading){
       
    let myAttr =  setId(id.id + 'Box_' + cont) + setCls(id.id + 'Box');
        id.innerHTML += create_divPlusH3( myAttr, '', '', heading ) ;
            let mainBox = document.getElementById( id.id + 'Box_' + cont ); 
    return mainBox; }
    
function setMainBoxCard(id, heading){
       
    let myAttr =  setId(id.id + 'Box_' + cont) + setCls(id.id + 'Box w3-card w3-margin');
        id.innerHTML += create_divPlusH3( myAttr, '', '', heading ) ;
            let mainBox = document.getElementById( id.id + 'Box_' + cont ); 
    return mainBox; }

function innerMenu(id,list,heading)
{       let x = setMainBox(id, heading);
    list.forEach((item)=>{  
        let a_attr = setCls('w3-btn') + setHref(item.url);
        let i_attr = setCls(item.icon); 
        let p_elem = createElem2('p', '', '&nbsp'+item.name );
    
            x.innerHTML += create_aPlusI(a_attr, p_elem, i_attr) ;
    });     
    cont++;
}

function innerSocialLinks(id , list , heading)
{       let x = setMainBox(id, heading);
    list.forEach(function(item){
        let a_attr = setCls('w3-btn') + setHref(item.url) ;
        let i_attr = setCls(item.icon);
        
        x.innerHTML += create_aPlusI(a_attr,'',i_attr) ;        
    });
    cont++; 
}

function innerCatalogos(id, list, heading)
{       let x = setMainBoxCard(id, heading);
    list.forEach(function(item){
        let div_attr = setCls('w3-container ') + setOnClk(item.url) ; 
        let content = createElem2('img', setSrc( item.imges ), + item.img) +
                   createElem2('p'   ,'', item.txt);      

        x.innerHTML += createElem2('div', div_attr, content) + createElem2('hr');            
    })
    cont++; 
}
				
function innerSlideshow(id, list, heading)
{       let x = setMainBox(id, heading);
    list.forEach(function(item){ ///      Bucle forEach()→
        let img =   createElem2('img', setCls('promo') + src(item.image)) ;
        let text =  createElem2('h1', '',item.title ) + 
                    createElem2('h4', '', item.senten ) +
                    createElem2('button', setCls('w3-btn w3-red') ,'Ver Cat&aacutelogos') ;

        let txtCont = createElem2('div', setCls('txtCont') , text);
        let skewCont= createElem2('div', setCls('skewCont')) ;        
        let div_attr = setCls('mySlides ') + setOnClk(item.url);
    /// x.innerHTML +=
        x.innerHTML += createElem2('div', div_attr , skewCont + txtCont + img );
  });
    // x.innerHTML += arrowLeft +arrowRight;
        x.innerHTML +=
        (function createDots(){ 
                let x = ''; let div_attr = setId('catalogos')+ setCls('dots');
            promoList.forEach(function() 
            {
                x +=  createElem2('span', setCls('dot'));  
            })
                return createElem2('div', div_attr, x);
        }())
}

function showSlides() {
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    //Hide all the slide with a loop

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
        slideInd++;

    if (slideInd > slides.length) {slideInd = 1}

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }

slides[slideInd -1].style.display = "block";
dots[slideInd -1].className+= " active";
setTimeout(showSlides, 4000); // Change image every 4 seconds
}




90


innerMenu(header,menuIcons);
cont = 0;

var slideInd = 1;
innerSlideshow( slideshow, promoList, '');     
showSlides(slideInd);
cont = 0;

innerCatalogos(wrapper,technoCat, 'Tecnología');
innerCatalogos(wrapper,gorrasCat, 'Gorras');
cont = 0;

innerSocialLinks(footer, socialIcons, 'Siguenos');
innerMenu(footer, menuIcons, 'Menú');
innerCatalogos(foote, technoCat, 'Tecnología');
innerCatalogos(footer, gorrasCat, 'Gorras');






