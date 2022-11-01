var container = 

document.querySelector('.container')

var show_results = 

document.querySelector('.title p')

var btn_srch = 

document.querySelector('#srch_btn')

  var next = 1

  

var next_btn = 

document.querySelector('#next')

var prev_btn = 

document.querySelector('#prev')

var srch_input =

document.querySelector('#search_input')

var pagination = 

document.querySelector('.pagination')

var expend_img_container = 

document.querySelector('.expend_img')

var expend_img = 

document.querySelector('.expend_img img')

var close_expend_img = 

document.querySelector('.expend_img span')

pagination.style.display = 'none'

next_btn.addEventListener('click',function(){

  next++

  const loadContent = async () => {

   const results = await fetch(`https://api.pexels.com/v1/search?query=${srch_input.value}&page=${next}&per_page=70`,{

         method : 'GET', 

       headers : {

         Accept : 'application/json', 

         Authorization:

         '563492ad6f91700001000001256a669c576e4fdf8fac8f241a9ec042'

       }

     })

     

     const data = await results.json()

   showImg(data.photos)

   window.scrollTo({ top: 0, behavior: 'smooth' }); 

     console.log(data)

   }

   loadContent()

   

})

  

   prev_btn.addEventListener('click',function(){

  next--

  const loadContent = async () => {

   const results = await fetch(`https://api.pexels.com/v1/search?query=${srch_input.value}&page=${next}&per_page=70`,{

         method : 'GET', 

       headers : {

         Accept : 'application/json', 

         Authorization:

         '563492ad6f91700001000001256a669c576e4fdf8fac8f241a9ec042'

       }

     })

     

     const data = await results.json()

   showImg(data.photos)

   window.scrollTo({ top: 0, behavior: 'smooth' }); 

     console.log(data)

   }

   loadContent()

   

})

btn_srch.addEventListener('click',function(){

  

if (srch_input.value == '' || srch_input.value == ' ') {

  alert('field can\'t be empty')

  return;

}else{

  show_results.innerHTML = `showing results for "${srch_input.value.trim()}"`

  pagination.style.display = 'block'

}

  const loadContent = async () => {

   const results = await fetch(`https://api.pexels.com/v1/search?query=${srch_input.value.trim()}&page=${next}&per_page=70`,{

         method : 'GET', 

       headers : {

         Accept : 'application/json', 

         Authorization:

         '563492ad6f91700001000001256a669c576e4fdf8fac8f241a9ec042'

       }

     })

     

     const data = await results.json()

   showImg(data.photos)

     console.log(data)

       window.scrollTo({top:0, behavior:'smooth'})

   }

   loadContent()

})

  

    function showImg(data){

      var createCard = ''

      for (var i = 0; i < data.length; i++) {

        const show = `

              <div class="img_card">

                <div class="img_container">

                <div class='skeleton_anim'></div>

             <img src=${data[i].src.portrait} alt=${data[i].alt}>

                </div>

                <div class="details">

                  <h3>

               Photo by <a href=${data[i].photographer_url}>${data[i].photographer}</a> on Pexels 

                  </h3> 

                  <button>

         <a href=${data[i].src.portrait}  download=${data[i].alt} >Download</a>

                  </button>

                  <a href="https://pexels.com" target='_blank'>

                Photo provided by Pexels

                  </a>

                </div>

                

            </div>

        `

        createCard += show

      }

      

container.innerHTML = createCard

var img_card = 

document.querySelectorAll('.img_container img') 

img_card.forEach(card =>{

  card.addEventListener('click', function(){

  expend_img_container.style.display = 'block'

  expend_img.src = card.getAttribute('src')

  })

})

    }

    

    

close_expend_img.addEventListener('click',function(){

   expend_img_container.style.display = 'none' 

})

