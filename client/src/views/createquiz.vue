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
                <input  type="checkbox" @change="handleCheckboxChange(element.inputs[i], $event.target.checked, element)" />
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
  



<style>
body {
  background-color: #1a1a1a;
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #f5f5f5;
}

.thequemain {
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 3rem 0;
  background-image: url("https://images.unsplash.com/photo-1722566351594-be51e61e1a4f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-size: cover;
  background-attachment: fixed;
  position: relative;
}

.thequemain::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 0;
}

.quizcon_inmain {
  width: 80%;
  max-width: 1200px;
  height: auto;
  background-color: #121212;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  z-index: 1;
  position: relative;
  border: 1px solid #333;
}

.top {
  height: 20vh;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  background-color: #000;
  position: relative;
  border-bottom: 3px solid #e50914;
}

.top h1 {
  font-size: 3.5rem;
  margin: 0;
  color: #e50914;
  font-weight: 800;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.info {
  height: 100px;
  padding: 1rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #1d1d1d;
  border-bottom: 1px solid #333;
}

.info div {
  width: 35%;
  display: flex;
  align-items: center;
  padding: 5px 7px;
  height: 90%;
  justify-content: space-evenly;
}

.input-wrapper {
  --padding: 16px;
  --focus-color: #e50914;
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
}

.theinfo_input {
  padding: var(--padding);
  border: 2px solid #333;
  outline: none;
  width: 100%;
  height: 45px;
  padding: 0 15px;
  font-size: 16px;
  border-radius: 8px;
  transition: all 0.2s ease;
  background-color: #252525;
  color: #f5f5f5;
}

.theinfo_input:disabled {
  background-color: #1d1d1d;
  color: #999;
  cursor: not-allowed;
  border-color: #222;
}

.placeholder {
  position: absolute;
  background-color: #1d1d1d;
  color: #999;
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
}

.quizque_conn {
  background-color: #121212;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.quizque {
  margin: 1.5rem 0;
  padding: 1.5rem;
  width: 95%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #1a1a1a;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border: 1px solid #333;
}

.quizque:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
  border-color: #e50914;
}

.quizque textarea {
  font-size: 16px;
  width: 100%;
  height: 120px;
  padding: 12px;
  border: 1px solid #333;
  border-radius: 8px;
  resize: none;
  transition: border 0.2s ease;
  background-color: #252525;
  color: #f5f5f5;
}

.quizque textarea:focus {
  border-color: #e50914;
  outline: none;
}

.optionofquiz {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.optionofquiz p {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0;
}

.optionofquiz input[type="text"] {
  flex: 1;
  padding: 10px;
  border: 1px solid #333;
  border-radius: 6px;
  font-size: 16px;
  background-color: #252525;
  color: #f5f5f5;
}

.optionofquiz input[type="text"]:focus {
  border-color: #e50914;
  outline: none;
}

.optionofquiz input[type="checkbox"] {
  width: 20px;
  height: 20px;
  cursor: pointer;
  accent-color: #e50914;
}

button {
  background-color: #e50914;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.1s ease;
  margin: 1rem 0;
}

button:hover {
  background-color: #b70710;
  box-shadow: 0 0 10px rgba(229, 9, 20, 0.5);
}

button:active {
  transform: scale(0.98);
}

button[type="button"] {
  background-color: #333;
  color: #f5f5f5;
}

button[type="button"]:hover {
  background-color: #444;
  box-shadow: 0 0 10px rgba(68, 68, 68, 0.5);
}

button[type="submit"] {
  min-width: 120px;
}

@media (max-width: 768px) {
  .quizcon_inmain {
    width: 95%;
  }
  
  .top h1 {
    font-size: 2.5rem;
  }
  
  .info {
    flex-direction: column;
    height: auto;
    gap: 1rem;
  }
  
  .info div {
    width: 90%;
  }
  
  .optionofquiz {
    grid-template-columns: 1fr;
  }
}
</style>