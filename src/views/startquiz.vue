<script setup>
import '../assets/startquiz.css';
import { RouterLink, RouterView } from 'vue-router'
import { onMounted, ref } from 'vue';
import router from '@/router';

const found=ref();
const thesearchform=ref({
    searchcode:''
})

const searchcode=()=>
{
 found.value=true;

}







</script>

<script >


export default {
  name: "typeWiriter",
  data: () => {
    return {
      typeValue: "",
      typeStatus: false,
      displayTextArray: ["To Start"],
      typingSpeed: 75,
      erasingSpeed: 100,
      newTextDelay: 1000,
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
      if (this.charIndex < this.displayTextArray[this.displayTextArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.displayTextArray[this.displayTextArrayIndex].charAt(
          this.charIndex
        );
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
        this.typeValue = this.displayTextArray[this.displayTextArrayIndex].substring(
          0,
          this.charIndex - 1
        );
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

<template>

   
  
  <main  class="thequizcontainer">

<div class="thestartcardc">
  
<div class="startheading">
        <h1>
 Write Quiz Code!
  <span class="typed-text">{{ typeValue }}</span>
  <span class="blinking-cursor">|</span>
  <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
</h1>

    </div>
    <form @submit.prevent="searchcode" class="thesearchform">
      
      <div class="theform">
        <input type="text" v-model="thesearchform.searchcode" placeholder="Code">
        <button type="submit">Search</button>
    </div>
    </form>
    <h4 class="therefh4">Code: {{ thesearchform.searchcode }}</h4>
   <div class="found_quiz">
    <router-link style=" color: black;" v-if="found" to="/thequiz">Click to Continue</router-link>
    <h4 v-else-if="!found">Quiz Not Found</h4>
    <slot v-else></slot>
  </div>
</div>



</main>


</template>

<style scoped>
h1 {
  font-size: 2.5rem;
  color: black;
  font-family: var(--heading_font);
  font-weight: normal;
  letter-spacing:-4px ;
  span.typed-text {
    color: #d62828;
  }
}


.blinking-cursor {
  font-size: 3rem;
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
</style>