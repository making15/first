


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
      let detailArt = apples[i]['detail'];
      let idxArt = apples[i]['idx'];

      let temp_html = `<div class="transition duration-500 ease-in-out bg-white hover: transform hover:scale-90 w-full md:w-80 justify-center items-center bg-white shadow-lg rounded-lg flex flex-col swiper-slide flips">
                        <img src="${image01Art}"
                             alt="img"
                             title="img" class="w-full h-80 relative object-cover rounded-t-lg">                              
  <div class="w-full p-4 justify-start flex flex-col swiper-lazy">
              <div class="swiper-lazy-preloader"></div>
                            <div class="pt-2">
                                <i class="far fa-heart cursor-pointer"></i>
                                <span class="italic text-sm text-gray-400 font-medium underline">1명이 수료했어요!</span>
                            </div>
                            <div class="flex">
                                <div class="rounded-full h-8 w-8 bg-gray-500 flex items-center justify-center overflow-hidden flex-shrink-0">
                                    <img src="https://user-images.githubusercontent.com/89088205/143687229-6dc5725b-cb98-47df-a56c-8eeeb1fe207c.gif">
                                </div>
                <span class="truncate mx-20 pt-1 ml-2 font-bold text-center text-sm lg:text-lg">${p_titleArt}</span>
                            </div>
                            <h4 class="truncate border-b-2 text-center text-blue-400">${detailArt}</h4>
                            <p class="truncate my-4">여기에 상세내용이 들어갑니다 수선화를 고르면 추가점수가 있어요! 매일매일 신선한 여기에
                                상세내용이 들어갑니다 수선화를 고르면 추가점수가 있어요! 매일매일 신선한여기에 상세내용이 들어갑니다 수선화를 고르면 추가점수가 있어요여기에 상세내용이 들어갑니다 수선화를 고르면 추가점수가
                                있어요</p>
                    <button value="button" id="${idxArt}" class="btn transform hover:scale-110 animate-pulse mx-10 px-4 py-2 text-white hover:bg-blue-700 bg-blue-500">${p_titleArt}
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
      let time_H_Cook = pineapple[i]['time_H'];
      let nameCook = pineapple[i]['name'];
      let p_titleCook = pineapple[i]['p_title'];
      let detailCook = pineapple[i]['detail'];
      let idxCook = pineapple[i]['idx'];


      let temp_html03 = `<div class="transition duration-500 ease-in-out bg-white hover: transform hover:scale-90 w-full md:w-80 justify-center items-center bg-white shadow-lg rounded-lg flex flex-col swiper-slide">
                        <img src="${image01Cook}"
                             alt="img"
                             title="img" class="w-full h-80 object-cover rounded-t-lg flips">                             
  <div class="w-full p-4 justify-start flex flex-col swiper-lazy">
              <div class="swiper-lazy-preloader"></div>
                            <div class="pt-2">
                                <i class="far fa-heart cursor-pointer"></i>
                                <span class="italic text-sm text-gray-400 font-medium underline">1명이 수료했어요!</span>
                            </div>
                            <div class="flex">
                                <div class="rounded-full h-8 w-8 bg-gray-500 flex items-center justify-center overflow-hidden flex-shrink-0">
                                    <img src="https://user-images.githubusercontent.com/89088205/143687229-6dc5725b-cb98-47df-a56c-8eeeb1fe207c.gif"
                                         alt="profilepic">
                                </div>
                <span class="truncate mx-20 pt-1 ml-2 font-bold text-center text-sm lg:text-lg">${p_titleCook}</span>
                            </div>
                            <h4 class="truncate border-b-2 text-center text-blue-400">${detailCook}</h4>
                            <p class="truncate my-4">여기에 상세내용이 들어갑니다 수선화를 고르면 추가점수가 있어요! 매일매일 신선한 여기에
                                상세내용이 들어갑니다 수선화를 고르면 추가점수가 있어요! 매일매일 신선한여기에 상세내용이 들어갑니다 수선화를 고르면 추가점수가 있어요여기에 상세내용이 들어갑니다 수선화를 고르면 추가점수가
                                있어요</p>
                    <button value="button" id="${idxCook}" class="btn transform hover:scale-110 animate-pulse mx-10 px-4 py-2 text-white hover:bg-blue-700 bg-blue-500">${p_titleCook}
                    </button>
                        </div>
                    </div>`

  $('#cookslide').prepend(temp_html03);

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



