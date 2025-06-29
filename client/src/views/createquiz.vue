<script setup>
import { onMounted, ref } from "vue";


const quizElements = ref([]);
const username=ref("")
const email=ref("")

const quizTitle = ref("");


const addMore = () => {
  quizElements.value.push({
    id: Date.now(),
    textareaValue: "",
    inputs: ["", "", "", ""], 
    selectedAnswers: [],
  });
};


const remove = (id) => {
  quizElements.value = quizElements.value.filter(
    (element) => element.id !== id
  );
};


const handleCheckboxChange = (inputValue, isChecked, element) => {


  if (isChecked) {
    element.selectedAnswers.push(inputValue); 
  } else {
    element.selectedAnswers = element.selectedAnswers.filter(
      (value) => value !== inputValue
    );
  }
};


const submitForm = () => {

  const formData = quizElements.value.map((element) => ({
    textareaValue: element.textareaValue,
    inputs: [...element.inputs], 
    selectedAnswers: [...element.selectedAnswers], 
  }));


  const completeFormData = {
    title: quizTitle.value,
    questions: formData
  };

  console.log("Form Data:", completeFormData);
};



onMounted(() => {
  addMore();

username.value=sessionStorage.getItem("name")
email.value=sessionStorage.getItem("email")
});
</script>

<template>
  <main class="thequemain">
    <section class="quizcon_inmain">
      <div class="top">
        <input 
          type="text" 
          v-model="quizTitle"
          placeholder="Enter Quiz Title..."
          class="quiz-title-input"
        >
      </div>

      <div class="info">
        <div class="input-wrapper">
          <input
            disabled
            class="theinfo_input"
            type="text"
            :value="username"
            required
            placeholder="Name"
          />
        </div>
        <div class="input-wrapper">
          <input
            disabled
            class="theinfo_input"
            type="text"
            id="input"
            :value="email"

            required
            placeholder="Other Info"
          />
        </div>
      </div>

      <form id="innerdiv" class="quizque_conn" @submit.prevent="submitForm">
        <div
          v-for="(element, index) in quizElements"
          :key="element.id"
          class="quizque"
        >
          <textarea
            required
            v-model="element.textareaValue"
            cols="30"
            rows="10"
            placeholder="Enter your question here..."
          ></textarea>
          <div class="optionofquiz">
            <p v-for="(input, i) in element.inputs" :key="i">
              <input 
                required 
                type="text" 
                v-model="element.inputs[i]" 
                :placeholder="`Option ${i+1}`"
              />
              <input
                type="checkbox"
                @change="
                  handleCheckboxChange(
                    element.inputs[i],
                    $event.target.checked,
                    element
                  )
                "
                title="Check correct answer"
              />
            </p>
          </div>
          <div class="question-number">Question {{index + 1}}</div>
          <button type="button" @click="remove(element.id)">Remove</button>
        </div>
        <button type="submit">Submit</button>
      </form>

      <button @click="addMore">Add Question</button>
    </section>
  </main>
</template>

<style>
body {
  background-color: #1a1a1a;
  margin: 0;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
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
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 0;
}

.quizcon_inmain {
  width: 80%;
  max-width: 1200px;
  height: auto;
  background-color: #121212;
  border-radius: 16px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.6);
  overflow: hidden;
  z-index: 1;
  position: relative;
  border: 1px solid #333;
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.top {
  height: 20vh;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  background-color: #000;
  position: relative;
  border-bottom: 4px solid #e50914;
  background-image: linear-gradient(to right, #000, #1a1a1a);
}

.top h1 {
  font-size: 3.5rem;
  margin: 0;
  color: #e50914;
  font-weight: 800;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  letter-spacing: 1px;
}

.info {
  height: 100px;
  padding: 1.5rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #1d1d1d;
  border-bottom: 1px solid #333;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1) inset;
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
  transition: all 0.3s ease;
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
  box-shadow: 0 0 10px rgba(229, 9, 20, 0.3);
}

.theinfo_input:is(:focus, :valid) + .placeholder {
  transform: translatey(calc(-1 * var(--padding) - 12px));
  font-size: 16px;
  color: var(--focus-color);
}

.quizque_conn {
  background-color: #121212;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.quizque {
  margin: 0.5rem 0;
  padding: 1.8rem;
  width: 95%;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  background-color: #1a1a1a;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease;
  border: 1px solid #333;
  position: relative;
}

.quizque:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
  border-color: #e50914;
}

.quizque::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 5px;
  height: 100%;
  background-color: #e50914;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.quizque:hover::before {
  opacity: 1;
}

.quizque textarea {
  font-size: 16px;
  width: 100%;
  height: 120px;
  padding: 15px;
  border: 1px solid #333;
  border-radius: 8px;
  resize: none;
  transition: border 0.3s ease, box-shadow 0.3s ease;
  background-color: #252525;
  color: #f5f5f5;
  line-height: 1.5;
}

.quizque textarea:focus {
  border-color: #e50914;
  box-shadow: 0 0 10px rgba(229, 9, 20, 0.3);
  outline: none;
}

.optionofquiz {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.2rem;
}

.optionofquiz p {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 0;
  padding: 10px;
  background-color: #252525;
  border-radius: 8px;
  transition: background-color 0.2s ease;
}

.optionofquiz p:hover {
  background-color: #2a2a2a;
}

.optionofquiz input[type="text"] {
  flex: 1;
  padding: 12px;
  border: 1px solid #333;
  border-radius: 6px;
  font-size: 16px;
  background-color: #1d1d1d;
  color: #f5f5f5;
  transition: all 0.3s ease;
}

.optionofquiz input[type="text"]:focus {
  border-color: #e50914;
  box-shadow: 0 0 10px rgba(229, 9, 20, 0.3);
  outline: none;
  background-color: #252525;
}

.optionofquiz input[type="checkbox"] {
  width: 22px;
  height: 22px;
  cursor: pointer;
  accent-color: #e50914;
  transition: transform 0.2s ease;
}

.optionofquiz input[type="checkbox"]:hover {
  transform: scale(1.1);
}

button {
  background-color: #e50914;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 14px 28px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 1rem 0;
  position: relative;
  overflow: hidden;
  letter-spacing: 0.5px;
}

button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: 0.5s;
}

button:hover {
  background-color: #b70710;
  box-shadow: 0 0 15px rgba(229, 9, 20, 0.6);
  transform: translateY(-2px);
}

button:hover::before {
  left: 100%;
}

button:active {
  transform: scale(0.97);
}

button[type="button"] {
  background-color: #333;
  color: #f5f5f5;
}

button[type="button"]:hover {
  background-color: #444;
  box-shadow: 0 0 15px rgba(68, 68, 68, 0.6);
}

button[type="submit"] {
  min-width: 150px;
  font-weight: 700;
  text-transform: uppercase;
  background-image: linear-gradient(to right, #e50914, #ff2c36);
}

button[type="submit"]:hover {
  background-image: linear-gradient(to right, #b70710, #e50914);
}

.question-number {
  position: absolute;
  top: 10px;
  right: 15px;
  background-color: #e50914;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}

/* Improve placeholder styling */
::placeholder {
  color: #888;
  opacity: 0.7;
}

textarea::placeholder,
input::placeholder {
  color: #777;
}

/* Improve the Add Question button */
button[type="button"] + button {
  margin-top: 20px;
  background-color: #444;
  color: #fff;
  transition: all 0.3s ease;
}

button[type="button"] + button:hover {
  background-color: #555;
  box-shadow: 0 0 15px rgba(85, 85, 85, 0.6);
}

/* Style tooltip/title on checkbox */
input[type="checkbox"] {
  cursor: help;
}

input[type="checkbox"]::before {
  content: '';
  position: absolute;
  display: none;
}

.quiz-title-input {
  width: 100%;
  max-width: 600px;
  padding: 15px 20px;
  font-size: 2rem;
  font-weight: 600;
  border: 2px solid #333;
  border-radius: 12px;
  background-color: rgba(37, 37, 37, 0.9);
  color: #f5f5f5;
  text-align: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.quiz-title-input:focus {
  border-color: #e50914;
  box-shadow: 0 0 20px rgba(229, 9, 20, 0.4);
  outline: none;
  background-color: rgba(37, 37, 37, 1);
}

.quiz-title-input::placeholder {
  color: #888;
  opacity: 0.8;
}
</style>
