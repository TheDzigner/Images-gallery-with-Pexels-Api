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

const curated = async () =>{

   const results = await fetch(`https://api.pexels.com/v1/curated?page=${next}&per_page=15

`,{

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

   }

   

   curated()

next_btn.addEventListener('click',function(){

  next++

  const curated = async () =>{

   const results = await fetch(`https://api.pexels.com/v1/curated?page=${next}&per_page=15

`,{

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

   }

   

   curated()

   

  const loadContent = async () => {

   const results = await fetch(`https://api.pexels.com/v1/search?query=${srch_input.value}&page=${next}`,{

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

   }

   loadContent()
window.scrollTo({
top : 0,
 behavior : 'smooth'
}) 
})

prev_btn.addEventListener('click',function(){

  next--

  

  const curated = async () =>{

   const results = await fetch(`https://api.pexels.com/v1/curated?page=${next}&per_page=15

`,{

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

   }

   

   curated()

  const loadContent = async () => {

   const results = await fetch(`https://api.pexels.com/v1/search?query=${srch_input.value}&page=${next}`,{

         method : 'GET', 

       headers : {

         Accept : 'application/json', 

         Authorization:

         '563492ad6f91700001000001256a669c576e4fdf8fac8f241a9ec042'

       }
     window.scrollTo({

top : 0,

 behavior : 'smooth'

}) 

     })

     

     const data = await results.json()

   showImg(data.photos)

     console.log(data)

   }

   loadContent()

})

btn_srch.addEventListener('click',function(){

  

if (srch_input.value == '' || srch_input.value == ' ') {

  alert('field can\'t be empty')

  return;

}else{

  show_results.innerHTML = `showing results for "${srch_input.value}"`

}

  const loadContent = async () => {

   const results = await fetch(`https://api.pexels.com/v1/search?query=${srch_input.value}&page=${next} `,{

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

   }

   loadContent()

})

  

    function showImg(data){

      var createCard = ''

      for (var i = 0; i < data.length; i++) {

        const show = `

              <div class="img_card">

                <div class="img_container">

                <img src=${data[i].src.original} alt=${data[i].alt}>

                </div>

                <div class="details">

                  <h3>

               Photo by <a href=${data[i].photographer_url}>${data[i].photographer}</a> on Pexels 

                  </h3> 

                  <button>

         <a href=${data[i].src.original}  download=${data[i].alt} >Download</a>

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

    }

