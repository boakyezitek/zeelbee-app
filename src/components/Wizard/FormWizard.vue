<template>
  <div class="flex flex-col gap-5 w-full">
    <div id="tabIndicator" class="flex items-center gap-3 w-full">
      <!-- <div class="flex flex-col gap-3 flex-[1]">

               
            <div class="flex items-center gap-3 ">
                <div class="w-[60px] h-[60px]  border-zeel-gray-350 border-2 border-solid rounded-[100%] flex items-center justify-center">
                    <div class="w-[43px] h-[42px]  bg-zeel-green-400 rounded-[100%] flex items-center justify-center">
                        
                        <span class="material-symbols-outlined text-[16px] text-white">
done
</span>
                    </div>
                </div>
                <div class="h-[2px]  flex-[1] bg-zeel-green-400"></div>
            </div>
         

            <h4 class="text-zeel-dark-380 text-zeel-text-extra-small font-zeel-regular">STEP 1</h4>
            <h2 class="text-zeel-dark-500 text-zeel-text-small font-zeel-regular font-semibold">General Information</h2>
            </div> -->

      <!-- <div class="flex flex-col gap-3 flex-[1]">
          
                     <div class="flex items-center gap-3 ">
                <div class="w-[60px] h-[60px]  border-zeel-gray-350 border-2 border-solid rounded-[100%] flex items-center justify-center">
                    <div class="w-[43px] h-[42px]  bg-zeel-green-400 rounded-[100%] flex items-center justify-center">
                        <h4 class="text-[16px] text-zeel-warning font-semibold font-zeel-regular">2</h4>
                    </div>
                </div>
                <div class="h-[2px]  flex-[1] bg-zeel-gray-350"></div>
            </div>
   
            <h4 class="text-zeel-dark-380 text-zeel-text-extra-small font-zeel-regular">STEP 2</h4>
            <h2 class="text-zeel-dark-500 text-zeel-text-small font-zeel-regular font-semibold">Product Stock</h2>
        </div> -->

      <!-- <div class="group/tab flex flex-col gap-3"> -->
      <!-- is not active tab view -->
      <!-- <div class="flex items-center gap-3">
                <div class="w-[60px] h-[60px]  border-zeel-gray-350 border-2 border-solid rounded-[100%] flex items-center justify-center">
                    <div class="w-[43px] h-[42px]  bg-zeel-gray-350 rounded-[100%] flex items-center justify-center">
                        <h4 class="text-[16px] text-zeel-dark-350 font-semibold font-zeel-regular">3</h4>
                    </div>
                </div>
                <div class="group-last/tab:invisible h-[2px]  bg-zeel-gray-350 "></div>
            </div> -->
      <!-- end of is not active tab view -->
      <!-- <h4 class="text-zeel-dark-380 text-zeel-text-extra-small font-zeel-regular">STEP 3</h4>
            <h2 class="text-zeel-dark-500 text-zeel-text-small font-zeel-regular font-semibold">Customization</h2> -->
      <!-- </div> -->
    </div>

    <!-- content view -->
    <div class="flex-1">
      <div class="tab-content" data-title="General Information">
        <h1 class="text-[50px]">General Information</h1>
      </div>
      <div class="tab-content" data-title="Product Stock">
        <h1 class="text-[50px]">Product Stock</h1>
      </div>
      <div class="tab-content" data-title="Customization">
        <h1 class="text-[50px]">Customization</h1>
      </div>
      <div class="tab-content" data-title="Miscellaneous">
        <h1 class="text-[50px]">Miscellaneous</h1>
      </div>
      <div class="tab-content" data-title="Product Gallery">
        <h1 class="text-[50px]">Product Gallery</h1>
      </div>

      <Button color="#ffffff" label="Next" background="bg-zeel-green-400" class="next-button" @click="handleTabNext" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import Button from "../Button/Button.vue";

const currentTab = ref<number>(0);

function loadTabView() {
  const tabContent: NodeListOf<Element> =
    document.querySelectorAll(".tab-content");
  const tabIndicator = document.getElementById(
    "tabIndicator"
  ) as HTMLElement | null;


  let html = "";
  for (const [index, element] of tabContent.entries()) {
    const title = element.getAttribute("data-title");
    html += `
       <div class="flex flex-col gap-3  ${index === tabContent.length - 1 ? '' : 'flex-[1]'}">
            
              <div class="flex items-center gap-3">
                <div class="w-[60px] h-[60px]  border-zeel-gray-350 border-2 border-solid rounded-[100%] flex items-center justify-center">
                    <div id="wizard-view" class="w-[43px] h-[42px] ${currentTab.value === index
        ? "bg-zeel-green-400"
        : "bg-zeel-gray-350"
      }  rounded-[100%] flex items-center justify-center">
                        <h4 class="text-[16px] ${currentTab.value === index
        ? "text-zeel-warning"
        : "text-zeel-dark-350"
      }  font-semibold font-zeel-regular">${index + 1}</h4>
                    </div>
                </div>
                <div class="tab-line h-[2px] bg-zeel-gray-350 ${index === tabContent.length - 1 ? '' : 'flex-[1]'} "></div>
            </div>
           
            <h4 class="text-zeel-dark-380 text-zeel-text-extra-small font-zeel-regular">STEP ${index + 1
      }</h4>
            <h2 class="text-zeel-dark-500 text-zeel-text-small font-zeel-regular font-semibold">${title}</h2>
        </div>
       `;
    if (currentTab.value === index) {
      element.classList.add("block");
    } else {
      element.classList.add("hidden");
    }


  }

  if (tabIndicator) {
    tabIndicator.innerHTML = html;
  }


  const tabLine: NodeListOf<Element> = document.querySelectorAll(".tab-line");
  const lastCard = tabLine[tabLine.length - 1];

  lastCard.classList.add('hidden');
  lastCard.classList.remove('flex-[1]');
  console.log('...last card', lastCard)
}

function handleTabNext() {
  const wizardElements: NodeListOf<Element> =
    document.querySelectorAll("#wizard-view");
  const tabContent: NodeListOf<Element> =
    document.querySelectorAll(".tab-content");
  const tabLine: NodeListOf<Element> = document.querySelectorAll(".tab-line");

  if (currentTab.value === wizardElements.length) {
    return;
  } else {
    currentTab.value++;
    const getWizardElement = wizardElements[currentTab.value];
    const checkElementClass =
      getWizardElement?.classList.contains("bg-zeel-gray-350");
    if (checkElementClass) {
      getWizardElement.classList.remove("bg-zeel-gray-350");
      getWizardElement.classList.add("bg-zeel-green-400");
    }

    for (const [index, element] of tabContent.entries()) {
      if (index !== currentTab.value) {
        element?.classList.remove("block");
        element?.classList.add("hidden");
      } else {
        element?.classList.add("block");
        element?.classList.remove("hidden");
      }
    }
  }

  for (const [index, element] of wizardElements.entries()) {
    if (index < currentTab.value) {
      element.innerHTML = `<span class="material-symbols-outlined text-[16px] text-white">
done
</span>`;
    }
  }

  for (const [index, element] of tabLine.entries()) {
    if (index < currentTab.value) {

      if (element.classList.contains("bg-zeel-gray-350")) {
        element.classList.remove("bg-zeel-gray-350");
        element.classList.add("bg-zeel-green-400");
      }

    }
  }


}

onMounted(() => {
  loadTabView();
});
</script>

<style scoped></style>
