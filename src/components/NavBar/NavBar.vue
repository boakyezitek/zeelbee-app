<template>
  <div class="h-[70px] bg-[#fff] shadow-lg shadow-slate-200 py-[15px] px-[40px]">
    <div class="flex items-center justify-between">
      <div class=" h-[40px] w-[440px]  bg-[#F3F4F7] rounded-[8px] py-[12px]  px-[23px]  flex  items-center">
        <div><span class="material-symbols-outlined text-[#C3C9D5] pt-3">search</span></div>
        <div class=" ml-[12px]"><input
            class=" w-[100%] placeholder:text-[#C3C9D5] placeholder:text-[12px]   placeholder:font-zeel-regular placeholder:font-[500] outline-none border-none  bg-[#F3F4F7]  "
            type="text" placeholder="search something"></div>
      </div>
      <div class=" flex  items-center relative  ">
        <div
          class="group/notify  w-[20px] h-[20px] rounded-full bg-[#A8B3CA] flex items-center justify-center cursor- relative cursor-pointer     ">
          <span class="  material-symbols-outlined text-[14px] text-white ">question_mark</span>
          <div
            class=" absolute  left-0  top-0 invisible animate-fade-out-down transition-all duration-300 ease-in-out group-hover/notify:visible  group-hover/notify:animate-fade-in-up">
            <div class=" w-[196px] h-[141px] mt-[55px] p-[30px] ml-[-140px] bg-white shadow-xl shadow-slate-200  rounded-[10px] ">
              <h1 class=" text-[15px]  text-[#323B4E] font-[500] font-zeel-regular mb-[33px]">Help Center</h1>
              <h1 class=" text-[15px]  text-[#323B4E] font-[500] font-zeel-regular ">Create Ticket</h1>
            </div>
          </div>
        </div>


        <div class=" group/notifyca flex  items-center relative  justify-center ml-[31px] w-[17px] h-[20px]">
        <span class="material-symbols-outlined cursor-pointer ">notifications</span>
              <div v-if="isActive" class=" w-[10px]  h-[10px] right-[-1px] rounded-full bg-[#FA8100] absolute top-[-5px] "></div>
              <div class=" absolute  top-0  z-[9999]  invisible animate-fade-out-down transition-all duration-300 ease-in-out group-hover/notifyca:visible  group-hover/notifyca:animate-fade-in-up ">
                <div class=" w-[416px] h-[443px] bg-white shadow-xl shadow-slate-200  mt-[55px] flex  flex-col ">
                <div class=" h-[16%] border border-b-2 border-solid  border-b-zeel-gray-200 p-[30px] flex items-center justify-between"> 
                <h1 class=" text-[#323B4E] text[18px] font-zeel-regular font-[600] cursor-pointer">Notification</h1>
                <h1 class=" text-[#008F5F] text-[15px] font-[500] font-zeel-regular cursor-pointer">Marl all as read</h1>
                </div>
                <div class="h-[84%] overflow-x-hidden overflow-y-auto p-[30px] ">
                <div class="flex items-center justify-between mb-[28px] cursor-pointer ">
                  <h1  class="text-[15px] font-[500] font-zeel-regular text-[#323B4E] ">A new invoice has been created</h1>
                  <h1 class="text-[12px] font-[500] font-zeel-regular text-[#8392AF] ">5 Minutes ago</h1>
                </div>
                <div class="flex items-center justify-between mb-[28px] cursor-pointer">
                  <h1  class="text-[15px] font-[500] font-zeel-regular text-[#323B4E] ">You have made a new sale</h1>
                  <h1 class="text-[12px] font-[500] font-zeel-regular text-[#8392AF] ">2 Hours  ago</h1>
                </div> 
                <div class="flex items-center justify-between mb-[28px] cursor-pointer">

                  <h1  class="text-[15px] font-[500] font-zeel-regular text-[#323B4E] ">A new invoice has been created</h1>
                  <h1 class="text-[12px] font-[500] font-zeel-regular text-[#8392AF] ">4 Hours  ago</h1>
                </div>
                 <div class="flex items-center justify-between mb-[28px] cursor-pointer">

                  <h1  class="text-[15px] font-[500] font-zeel-regular text-[#323B4E] ">You have made a new sale</h1>
                  <h1 class="text-[12px] font-[500] font-zeel-regular text-[#8392AF] ">8 Hours  ago</h1>
                </div> 
                <div class="flex items-center justify-between mb-[28px] cursor-pointer">

                  <h1  class="text-[15px] font-[500] font-zeel-regular text-[#323B4E] ">You have made a new sale</h1>
                  <h1 class="text-[12px] font-[500] font-zeel-regular text-[#8392AF] ">12 Hours  ago</h1>
                </div>
                 <div class="flex items-center justify-between mb-[28px] cursor-pointer">

                  <h1  class="text-[15px] font-[500] font-zeel-regular text-[#323B4E] ">You have made a new sale</h1>
                  <h1 class="text-[12px] font-[500] font-zeel-regular text-[#8392AF] ">2 Days ago</h1>
                </div>
                 <div class="flex items-center justify-between mb-[28px ]cursor-pointer">

                  <h1  class="text-[15px] font-[500] font-zeel-regular text-[#323B4E] ">A new invoice has been created</h1>
                  <h1 class="text-[12px] font-[500] font-zeel-regular text-[#8392AF] ">3 Days ago</h1>
                </div>

                </div>
                </div>
              </div>
        </div>

        <div class="group/menu relative flex items-center gap-1 cursor-pointer">
          <div class=" flex  items-center ml-[30px]">
            <img class=" w-[33px] h-[33px] rounded-[33px]  object-cover cursor-pointer" :src="image" alt="">
          </div>
          <div
            class="flex  items-center ml-[18px] cursor-pointer text-[15px] text-[#3C475D] font-[500] font-zeel-regular capitalize">
            {{ name }}</div>
          <div class="flex  items-center justify-center ml-[21px]"><span
              class="material-symbols-outlined cursor-pointer text-[#A8B3CA] ">expand_more</span></div>
          <div
            class="absolute  left-0  top-0  invisible animate-fade-out-down transition-all duration-300 ease-in-out group-hover/menu:visible pt-[60px] group-hover/menu:animate-fade-in-up">
            <div class="w-[285px] h-[auto] bg-[#fff]  shadow-xl shadow-slate-200  rounded-[10px] p-[37px]">
              <div class=" flex items-center cursor-pointer mb-[33px] hover:ml-[10px]  transition-all   ease-in-out ">
                <span class=" material-symbols-outlined text-[#3C475D]">grid_view</span>
                <h1 class=" ml-[20px] text-[#3C475D]  text-[15px] font-[500] font-zeel-regular">Dashboard</h1>
              </div>

              <div class=" flex items-center cursor-pointer mb-[33px] hover:ml-[10px]  transition-all   ease-in-out">
                <span class=" material-symbols-outlined text-[#3C475D]">shopping_cart</span>
                <h1 class=" ml-[20px] text-[#3C475D]  text-[15px] font-[500] font-zeel-regular">Your Shop</h1>
              </div>

              <div class=" flex items-center cursor-pointer mb-[33px] hover:ml-[10px] transition-all   ease-in-out">
                <span class=" material-symbols-outlined text-[#3C475D]">payments</span>
                <h1 class=" ml-[20px] text-[#3C475D]  text-[15px] font-[500] font-zeel-regular">Payments</h1>
              </div>

              <div class=" flex items-center cursor-pointer mb-[33px] hover:ml-[10px] transition-all ease-in-out">
                <span class=" material-symbols-outlined text-[#3C475D]">settings</span>
                <h1 class=" ml-[20px] text-[#3C475D]  text-[15px] font-[500] font-zeel-regular">Settings</h1>
              </div>

              <div class=" flex items-center cursor-pointer hover:ml-[10px] transition-all   ease-in-out">
                <span class=" material-symbols-outlined text-[#3C475D]">logout</span>
                <h1 class=" ml-[20px] text-[#3C475D]  text-[15px] font-[500] font-zeel-regular">Sign Out</h1>
              </div>

            </div>
          </div>


        </div>




      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import eclips from "../NavBar/images/eclips.png";
const image = ref<string>(eclips);
const props = withDefaults(defineProps<{
  isActive: boolean,
  name: string,

}>(), {
  isActive: true,
  name: "Salung Prastyo",
});


</script>


<style scoped></style>
