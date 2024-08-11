<script setup>
import { ref } from 'vue';

// Array to manage the quiz elements with their content
const quizElements = ref([]);

// Function to add a new quiz element
const addMore = () => {
  quizElements.value.push({
    id: Date.now(), // Unique ID for each element
    textareaValue: '', // Initialize the textarea content
    inputs: ['', '', '', ''], // Initialize the input values
    selectedAnswers: [] // Array to store the values of checked inputs
  });
};

// Function to remove a quiz element by its ID
const remove = (id) => {
  quizElements.value = quizElements.value.filter((element) => element.id !== id);
};

// Function to handle checkbox changes
const handleCheckboxChange = (inputValue, isChecked, element) => {
    // inputvalue stores the nas in it 
    //is checked send the boolean value 


  if (isChecked) {
    element.selectedAnswers.push(inputValue); //pushes the the elected value in array slected answers
  } else {
    element.selectedAnswers = element.selectedAnswers.filter(value => value !== inputValue);
  }
};

// Function to handle form submission
const submitForm = () => {
    // loop through each quiz element and created a new array formData
  const formData = quizElements.value.map(element => ({
    textareaValue: element.textareaValue,
    inputs: [...element.inputs], // Copy the array
    selectedAnswers: [...element.selectedAnswers] // Copy selected answers array
  }));

  console.log('Form Data:', formData);

};


</script>
<template>
    <main class="thequemain">
      <section class="quizcon_inmain">
        <div class="top">
          <h1>Title</h1>
        </div>
  
        <div class="info">
          <div class="input-wrapper">
            <input disabled class="theinfo_input" type="text" required placeholder="Name" />
          </div>
          <div class="input-wrapper">
            <input disabled class="theinfo_input" type="text" id="input" required placeholder="Other Info" />
          </div>
        </div>
  
        <form id="innerdiv" class="quizque_conn" @submit.prevent="submitForm">
          <div v-for="(element, index) in quizElements" :key="element.id" class="quizque">
            <textarea required v-model="element.textareaValue" cols="30" rows="10"></textarea>
            <div class="optionofquiz">
              <p v-for="(input, i) in element.inputs" :key="i">
                <input required type="text" v-model="element.inputs[i]" />
                <input required type="checkbox" @change="handleCheckboxChange(element.inputs[i], $event.target.checked, element)" />
              </p>
            </div>
            <button type="button" @click="remove(element.id)">Remove</button>
          </div>
          <button type="submit">Submit</button>
        </form>
  
        <button @click="addMore">Add</button>
        
      </section>
    </main>
  </template>
  



<style >
body
{
  background-image: url("https://images.unsplash.com/photo-1722566351594-be51e61e1a4f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-size: contain;
  
}

.thequemain{
  /* border: 2px solid red; */
  height: auto;
  widows: 100vh;
  display: flex;
  justify-content: center;
  padding-top: 5%;
  
}
.quizcon_inmain{
  /* border: 2px solid red; */
  width: 80%;
  height: auto;
  background-color: white;
  /* border-radius: 10px; */
}
.top{
  /* border-top: 2px solid green; */
  height: 20vh;
  display: flex;
  align-items: center;
  padding: 0px 20px;
  /* border-top-left-radius: 8px; */
  /* border-top-right-radius: 8px; */
  background-color: rgb(12, 11, 11);
}
.top h1
{
  font-size: 4rem;
  margin: 2px 10px;
  color: white;
  font-family: var(--heading_font);
}
.quizque_conn{
  border:2px solid gold;
  background-color: white;
}
.info{
    /* border: 2px solid orange; */
    height: 100px;
    padding: 10px 10px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  
}
.info div
{
    /* border: 2px solid blue; */
    width: 35%;
    display: flex;
    align-items: center;
    padding: 5px 7px;
    height: 90%;
    /* background-color: white; */
    justify-content: space-evenly;
}

/* .info label input
{
   
} */

.input-wrapper {
    --padding: 16px;
    --focus-color: black;
    position: relative;
    display: flex;
    align-items: center;
  }
  
  .theinfo_input{
    padding: var(--padding);
    border: 2px solid gray;
    outline: none;
    width: 100%;
    height: 99%;
    padding: 0px 8px;
    font-size: 18px;
    outline: none;
    border-radius: 6px;
  }
  .placeholder {
    position: absolute;
    background-color: white;
    color: gray;
    font-family: var(--heading_font);
    left: var(--padding);
    font-size: 16px;
    padding: 0 4px;
    transition: all 0.2s ease-in;
  }
  
  .theinfo_input:is(:focus, :valid) {
    border: 2px solid var(--focus-color);
  }
  
  .theinfo_input:is(:focus, :valid) + .placeholder {
    transform: translatey(calc(-1 * var(--padding) - 12px));
    font-size: 16px;
    color: var(--focus-color);
    font-family: var(--heading_font);
  }

.quizque{
  /* border: 2px solid purple; */
  margin: 10px 5px;
  padding: 5px 3%;
  height: 200px;
  width: 98%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  /* margin: 10px 5px; */
}
.quizque textarea
{
  font-size: 16px;
  width: 100%;
  height: 80%;
  font-family: var(--heading_font);
}
.optionofquiz{
  /* border: 2px solid brown; */
  height: 60%;
  width: 95%;
  display: grid;
  grid-template-columns: repeat(2,auto);
  align-items: center;
}
.optionofquiz p
{
  font-size: 18px;
  font-family: var(--heading_font);
}
</style>