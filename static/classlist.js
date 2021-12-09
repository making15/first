
function allList() {

$.ajax({
    type: "GET",
    url: "/test",
    data: {},
    async:false,
    success: function(response){

      let rows = response;
//      console.log(rows)
      for(var i = 0; i < rows.length; i++){

      let image01 = rows[i]['image01'];
      let time_H = rows[i]['time_H'];
      let name = rows[i]['name'];
      let p_title = rows[i]['p_title'];
      let detail = rows[i]['detail'];
      let dec = rows[i]['dec'];      
      let idx = rows[i]['idx'];

      console.log(idx)

      let temp_html = `<div class="w-full md:w-80 justify-center items-center bg-white shadow-lg rounded-lg flex flex-col mb-3">
                <img src="${image01}"
                     alt="img"
                     title="img" class="transform hover:scale-110 w-full h-60 object-cover rounded-t-lg flex-auto">

                <div class="w-full p-4 justify-start flex flex-col">
                    <div class="pt-2">
                        <span class="italic text-sm text-gray-400 font-medium underline">단 <span class="text-blue-500 text-xl">${time_H}</span> 시간 !</span>
                        <span class="italic text-sm text-gray-400 font-medium underline items-end"><span class="text-blue-500">${name}</span> 's class</span>
                    </div>
                    <div class="flex">
                        <div class="rounded-full h-8 w-8 bg-gray-500 flex items-center justify-center overflow-hidden flex-shrink-0">
                            <img src="https://user-images.githubusercontent.com/89088205/144193199-8660b5fc-7246-44b1-a11e-7738e6302e8d.jpg">
                        </div>
                        <span class="truncate mx-20 pt-1 ml-2 font-bold text-center text-sm lg:text-lg xl:text-2xl">${p_title}</span>
                    </div>
                    <h4 class="truncate border-b-2 text-center text-blue-400">${detail}</h4>
                    <p class="truncate my-4">${dec}</p>
                    <button value="button" id="${idx}" class="btn transform hover:scale-110 animate-pulse mx-10 px-4 py-2 text-white hover:bg-blue-700 bg-blue-500">자세히 보기
                    </button>
                </div>
            </div>`

  $('#classlist').prepend(temp_html);




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
       console.log(response)
       window.location.href = '/detail?id=' + id;
    }
  })

});

    }
  })
 };

function artList() {

$('#classlist').empty();
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
      let time_H_Art = apples[i]['time_H'];
      let nameArt = apples[i]['name'];
      let p_titleArt = apples[i]['p_title'];
      let detailArt = apples[i]['detail'];
      let decArt = rows[i]['dec'];        
      let idxArt = apples[i]['idx'];


      let temp_html02 = `<div class="w-full md:w-80 justify-center items-center bg-white shadow-lg rounded-lg flex flex-col mb-3">
                <img src="${image01Art}"
                     alt="img"
                     title="img" class="transform hover:scale-110 w-full h-60 object-cover rounded-t-lg flex-auto">
                <div class="w-full p-4 justify-start flex flex-col">
                    <div class="pt-2">
                        <span class="italic text-sm text-gray-400 font-medium underline">단 <span class="text-blue-500 text-xl">${time_H_Art}</span> 시간 !</span>
                        <span class="italic text-sm text-gray-400 font-medium underline items-end"><span class="text-blue-500">${nameArt}</span> 's class</span>
                    </div>
                    <div class="flex">
                        <div class="rounded-full h-8 w-8 bg-gray-500 flex items-center justify-center overflow-hidden flex-shrink-0">
                            <img src="https://user-images.githubusercontent.com/89088205/144193199-8660b5fc-7246-44b1-a11e-7738e6302e8d.jpg">
                        </div>
                        <span class="truncate mx-20 pt-1 ml-2 font-bold text-center text-sm lg:text-lg xl:text-2xl">${p_titleArt}</span>
                    </div>
                    <h4 class="truncate border-b-2 text-center text-blue-400">${detailArt}</h4>
                    <p class="truncate my-4">${decArt}</p>
                    <button value="button" id="${idxArt}" class="mx-10 px-4 py-2 text-white hover:bg-blue-700 bg-blue-500">자세히 보기
                    </button>
                </div>
            </div>`

  $('#classlist').prepend(temp_html02);
  
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
};



    }
  })
 };

function cookList() {

$('#classlist').empty();

$.ajax({
    type: "GET",
    url: "/test",
    data: {},
    async:false,
    success: function(response){

      let rows = response;
      for(var i = 0; i < rows.length; i++){

// console.log(product)
let pineapple = rows.filter(value => value.product === 'cook');

      let image01Cook = pineapple[i]['image01'];
      let time_H_Cook = pineapple[i]['time_H'];
      let nameCook = pineapple[i]['name'];
      let p_titleCook = pineapple[i]['p_title'];
      let detailCook = pineapple[i]['detail'];
      let decCook = rows[i]['dec'];          
      let idxCook = pineapple[i]['idx'];

 console.log(idxCook)
      let temp_html03 = `<div class="w-full md:w-80 justify-center items-center bg-white shadow-lg rounded-lg flex flex-col mb-3">
                <img src="${image01Cook}"
                     alt="img"
                     title="img" class="transform hover:scale-90 w-full h-60 object-cover rounded-t-lg flex-auto">
                <div class="w-full p-4 justify-start flex flex-col">
                    <div class="pt-2">
                        <span class="italic text-sm text-gray-400 font-medium underline">단 <span class="text-blue-500 text-xl">${time_H_Cook}</span> 시간 !</span>
                        <span class="italic text-sm text-gray-400 font-medium underline items-end"><span class="text-blue-500">${nameCook}</span> 's class</span>
                    </div>
                    <div class="flex">
                        <div class="rounded-full h-8 w-8 bg-gray-500 flex items-center justify-center overflow-hidden flex-shrink-0">
                            <img src="https://user-images.githubusercontent.com/89088205/144193199-8660b5fc-7246-44b1-a11e-7738e6302e8d.jpg">
                        </div>
                        <span class="truncate mx-20 pt-1 ml-2 font-bold text-center text-sm lg:text-lg xl:text-2xl">${p_titleCook}</span>
                    </div>
                    <h4 class="truncate border-b-2 text-center text-blue-400">${detailCook}</h4>
                    <p class="truncate my-4">${decCook}</p>
                    <button value="button" id="${idxCook}" class="mx-10 px-4 py-2 text-white hover:bg-blue-700 bg-blue-500">자세히 보기
                    </button>
                </div>
            </div>`

  $('#classlist').prepend(temp_html03);
  
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

};

  


    }
  })
 };

