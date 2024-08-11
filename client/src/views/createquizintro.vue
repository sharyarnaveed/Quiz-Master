<script>
export default {
  name: "typeWiriter",
  data: () => {
    return {
      typeValue: "",
      typeStatus: false,
      displayTextArray: ["Create a Quiz", "Start a Quiz"],
      typingSpeed: 70,
      erasingSpeed: 100,
      newTextDelay: 2000,
      displayTextArrayIndex: 0,
      charIndex: 0,
    };
  },
  props: {},
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
  methods: {
    typeText() {
      if (
        this.charIndex <
        this.displayTextArray[this.displayTextArrayIndex].length
      ) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.displayTextArray[
          this.displayTextArrayIndex
        ].charAt(this.charIndex);
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.displayTextArray[
          this.displayTextArrayIndex
        ].substring(0, this.charIndex - 1);
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.displayTextArrayIndex += 1;
        if (this.displayTextArrayIndex >= this.displayTextArray.length)
          this.displayTextArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
  },
};
</script>


<script setup>
import { ref, onMounted } from 'vue';

const name=ref('');

const tocreatequiz=()=>
{
  sessionStorage.setItem("name",name.value)
  window.location.href="/createquiz"
}

onMounted(() => {
  sessionStorage.removeItem("name");
})

</script>

<template>
  <section class="createquiz">
    <div class="createquiz_card">

      <div class="heading">
        <h1>
          Choose!
          <span class="typed-text">{{ typeValue }}</span>
          <span class="blinking-cursor">|</span>
          <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
        </h1>
      </div>

<form @submit.prevent="tocreatequiz"  class="createthequiz_conn">

<input type="text" autocomplete="off" v-model="name" placeholder="Enter Your Name"  name="" id="">
<input type="email" autocomplete="off" placeholder="Enter Your Email" name="" id="">
<!-- <br> -->
<button type="submit">Create Quiz</button>

</form>

    </div>
  </section>
</template>

<style scoped>
h1 {
  font-size: 2rem;
  font-weight: normal;
  letter-spacing: -2px;
  span.typed-text {
    color: #d62828;
  }
}

.blinking-cursor {
  font-size: 2.5rem;
  color: #2c3e50;
  -webkit-animation: 1s blink step-end infinite;
  -moz-animation: 1s blink step-end infinite;
  -ms-animation: 1s blink step-end infinite;
  -o-animation: 1s blink step-end infinite;
  animation: 1s blink step-end infinite;
}
@keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
@-moz-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
@-webkit-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
@-ms-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
@-o-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}

.createquiz {
  /* border: 2px solid red; */
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: end;
  padding-bottom: 1.5%;
  background-size: cover;
  background-image: url("https://images.unsplash.com/photo-1708844897353-649da595a3f2?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
}
.createquiz_card {
  /* border: 2px solid blue; */
  height: 65%;
  background-color: white;
  width: 55%;
}
.heading{
    /* border: 2px solid green; */
    height: 15%;
    justify-content: center;
    align-items: center;
    display: flex;
}
.createthequiz_conn{
 /* border: 2px solid blue; */
 height: 85%;   
 display: flex;
 flex-direction: column;
 align-items: center;
 gap: 2%;
 justify-content: space-evenly;
}

.createthequiz_conn input{
width: 60%;
height: 20%;
font-size: 16px;
padding: 0px 5px;
font-family: var(--heading_font);
outline-color: #d62828;
}

.createthequiz_conn button
{
  height: 18%;
  width: 30%;
  font-size: 18px;
  font-family: var(--heading_font);
background-color: #d62828;
border: none;
color: white;
cursor: pointer;
border-radius: 8px;

-webkit-box-shadow: 18px 14px 42px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 18px 14px 42px 0px rgba(0,0,0,0.75);
box-shadow: 18px 14px 30px 0px rgba(0, 0, 0, 0.363);

}

</style>
