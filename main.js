var container = 

document.querySelector('.container')

var show_results = 

document.querySelector('.title p')

var btn_srch = 

document.querySelector('#srch_btn')

btn_srch.addEventListener('click',function(){

  var srch_input = 

document.querySelector('#search_input')

if (srch_input.value == '' || srch_input.value == ' ') {

  alert('field can\'t be empty')

  return;

}else{

  show_results.innerHTML = `showing results for "${srch_input.value}" `

}

  const loadContent = async () => {

   const results = await fetch('https://api.pexels.com/v1/search?query=' + srch_input. value,{

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

      <img src=${data[i].src.original} alt="">

    </div>

        `

        createCard += show

      }

        

container.innerHTML = createCard

    }

