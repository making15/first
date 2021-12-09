


function artList() {

$.ajax({
    type: "GET",
    url: "/test",
    data: {},
    async:false,
    success: function(response){

      let rows = response;
      for(var i = 0; i < rows.length; i++){

let apples = rows.filter(value => value.product === 'art');

      let image01Art = apples[i]['image01'];  
      let p_titleArt = apples[i]['p_title'];
      let idxArt = apples[i]['idx'];

      let temp_html = `<div class="bg-blue-50 flex flex-row flex-initial swiper-slide w-full md:w-60 box-content max-h-50 rounded-lg justify-center min-h-60 max-h-60 overflow-hidden">
      <div class="bg-white hover:bg-blue-200 justify-center items-center shadow-lg rounded-lg flex flex-col flips">
                        <img src="${image01Art}"
                             alt="img" class="flex rounded-t-lg swiper-lazy object-fill relative flex-grow">                              
              <div class="swiper-lazy-preloader"></div>
                    <button value="button" id="${idxArt}" class="object-center z-10 absolute btn transform hover:scale-110 animate-pulse bg-transparent mx-15 px-4 py-2 text-white hover:bg-blue-600 rounded-md text-2xl">${p_titleArt}
                    </button>
                    </div>
                    </div>`

  $('#artslide').prepend(temp_html);
  

};

$(".btn").on("click",function(){
let id = $(this).attr('id'); 
console.log(id);

$.ajax({
    type: "GET",
    url: "/detail/show",
    data: {id},
    async:false,
    success: function(response){
//       console.log(response)
       window.location.href = '/detail?id=' + id;
    }
  });

});

    }
  })
 };


 function cookList() {


$.ajax({
    type: "GET",
    url: "/test",
    data: {},
    async:false,
    success: function(response){

      let rows = response;
      for(var i = 0; i < rows.length; i++){

let pineapple = rows.filter(value => value.product === 'cook');

      let image01Cook = pineapple[i]['image01'];
      let p_titleCook = pineapple[i]['p_title'];
      let idxCook = pineapple[i]['idx'];


      let temp_html03 = `<div class="bg-blue-50 flex flex-row flex-initial swiper-slide w-full md:w-60 box-content max-h-50 rounded-lg justify-center min-h-60 max-h-60 overflow-hidden">
      <div class="bg-white hover:bg-blue-200 justify-center items-center shadow-lg rounded-lg flex flex-col flips">
                        <img src="${image01Cook}"
                             alt="img" class="flex rounded-t-lg swiper-lazy object-fill relative flex-grow">                              
              <div class="swiper-lazy-preloader"></div>
                    <button value="button" id="${idxCook}" class="object-center z-10 absolute btn transform hover:scale-110 animate-pulse bg-transparent mx-15 px-4 py-2 text-white hover:bg-blue-600 rounded-md text-2xl">${p_titleCook}
                    </button>
                    </div>
                    </div>`

  $('#cookslide').append(temp_html03);

};

$(".btn").on("click",function(){
let id = $(this).attr('id'); 
console.log(id);

$.ajax({
    type: "GET",
    url: "/detail/show",
    data: {id},
    async:false,
    success: function(response){
//       console.log(response)
       window.location.href = '/detail?id=' + id;
    }
  });
});
    }
  });


 };