<script setup>
import '../assets/startquiz.css';
</script>


<template>
  <main    >
 
 <section class="quizcon_inmain">
   <div class="top">
     <h1>Title</h1>
   </div>
   <div class="info">
 
     <div class="input-wrapper">
       <input class="theinfo_input" type='text'  required ></input>
       <label 
              for='input' 
              class='placeholder'>
         Name
       </label>
     </div>
    
 
 
     <div class="input-wrapper">
       <input class="theinfo_input" type='text' id='input' required ></input>
       <label 
              for='input' 
              class='placeholder'>
         Email
       </label>
     </div>
 
 
   </div>
 <div class="quizque">
   que
 </div>
 </section>
    
 
 
 
 
   </main> 
</template>