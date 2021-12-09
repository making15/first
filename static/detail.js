function is_detail() {

$('#detail').empty();

$.ajax({
    type: "GET",
    url: "/test",
    data: {},
    async:false,
    success: function(response){
    let rows = response;
    console.log(rows)

let apples = rows.filter(element => element.idx === idx_n);
console.log(apples[0]['product'])

      let product = apples[0]['product'];
      let p_title = apples[0]['p_title'];
      let category01 = apples[0]['category01'];
      let category02 = apples[0]['category02'];
      let name = apples[0]['name'];
      let time_H = apples[0]['time_H'];
      let date01 = apples[0]['date'][0];
      let date02 = apples[0]['date'][1];
      let date03 = apples[0]['date'][2];
      let date04 = apples[0]['date'][3];
      let price = apples[0]['price'];
      let phone = apples[0]['phone'];
      let place = apples[0]['place'];
      let detail = apples[0]['detail'];
      let dec = apples[0]['dec'];
      let image01 = apples[0]['image01'];
      let image02 = apples[0]['image02'];
      let image03 = apples[0]['image03'];
      let image04 = apples[0]['image04'];

console.log(place)

      let temp_html = `
  <div id="11" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center space-x-2 text-gray-400 text-sm">
      <a href="#" class="hover:underline hover:text-gray-600">${product}</a>
      <span>
        <svg class="h-5 w-5 leading-none text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </span>
      <a href="#" class="hover:underline hover:text-gray-600">${category01}</a>
      <span>
        <svg class="h-5 w-5 leading-none text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </span>
      <span>${category02}</span>
    </div>
  </div>
  
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
    <div class="flex flex-col md:flex-row -mx-4">
      <div class="md:flex-1 px-4">
        <div x-data="{ image: 1 }" x-cloak>
          <div class="h-64 md:h-80 rounded-lg bg-gray-100 mb-4">
            <div x-show="image === 1" class="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
              <span class="text-5xl"><img src="${image01}"
                     alt="img" class=" w-full h-80 bg-cover flex-auto"></span>
            </div>

            <div x-show="image === 2" class="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
              <span class="text-5xl"><img src="${image02}"
                     alt="img" class=" w-full h-80 bg-cover flex-auto"></span>
            </div>

            <div x-show="image === 3" class="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
              <span class="text-5xl"><img src="${image03}"
                     alt="img" class=" w-full h-80 bg-cover flex-auto"></span>
            </div>

            <div x-show="image === 4" class="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
              <span class="text-5xl"><img src="${image04}"
                     alt="img" class=" w-full h-80 bg-cover flex-auto"></span>
            </div>
          </div>

          <div class="flex -mx-2 mb-4">
            <template x-for="i in 4">
              <div class="flex-1 px-2">
                <button x-on:click="image = i" :class="{ 'ring-2 ring-indigo-300 ring-inset': image === i }" class="focus:outline-none w-full rounded-lg h-20 md:h-12 bg-blue-400 flex items-center justify-center transform hover:scale-110">
                  <span x-text="i" class="text-2xl"></span>
                </button>
              </div>
            </template>
          </div>
        </div>
      </div>
      
      <div class="md:flex-1 px-4">
        <h2 class="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">${p_title}</h2>
        <p class="text-gray-500 text-sm">By <a href="#" class="text-indigo-600 hover:underline">${name}</a></p>

        <div class="flex items-center space-x-4 my-4">
          <div>
            <div class="rounded-lg bg-gray-100 flex py-2 px-3">

              <span class="font-bold pl-1 text-blue-600 text-3xl">${price}</span>
                            <span class="text-indigo-400 ml-1 mt-1">원</span>
            </div>
          </div>
          <div class="flex-1">
            <p class="text-blue-500 text-xl font-semibold"><span id="logo" class="text-3xl">${time_H}</span>시간 클래스</p>
            <p class="text-gray-400 text-sm">부가세 포함, *contact : ${phone}</p>
          </div>
        </div>
        <p class="text-blue-500">${detail}</p>
        <p class="text-gray-500 mt-2">${dec}</p>

        <div class="flex py-4 space-x-4">
          <div class="relative">
            <div class="text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold">개강일</div>
            <select class="cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-8 h-14 flex items-end pb-1">
              <option>${date01}</option>
              <option>${date02}</option>
              <option>${date03}</option>
              <option>${date04}</option>
            </select>

            <svg class="w-5 h-5 text-gray-400 absolute right-0 bottom-0 mb-2 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
            </svg>
          </div>

          <button type="button" class="h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white">
            수강신청하기
          </button>
        </div>
      </div>
    </div>
    
    </div>`

  $('#detail').append(temp_html);
  


    }
  })
}