<template>
 <div class=" flex items-center justify-center w-[100%] h-[100%]">
 
    <div class="w-[100%]" >
    <Card v-bind="{}" class="w-[40%] mx-auto">
      <template #body> 
       <div class=" flex flex-col gap-1   mb-7">
       <label for="email">Email</label>
       <Input type="email" v-model="email"/>
       </div>
            
       <div class=" flex flex-col gap-1 mb-7">
       <label for="email">Password</label>
       <PasswordInput v-model="password" />
       </div>
         
   <div class=" flex items-center justify-end">
   
    <Button
    color="#ffffff"
    label="Submit"
    background="bg-zeel-green-400"
  />
   </div>


      </template>
    </Card>
  </div>
 
 </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Card from "../../../components/Card/Card.vue";
import  Input from "../../../components/Form/FormsBox/Input.vue";
import PasswordInput from "../../../components/Form/passwordinput/passwordinput.vue";
import Button  from "../../../components/Button/Button.vue";

const email = ref<string>("")

const password = ref<string>("")
</script>

<style scoped></style>
