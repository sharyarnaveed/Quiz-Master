<script setup>
import '../assets/startquiz.css';
import { onMounted, ref } from 'vue';

const thesearchstatus=ref(false);
const thesearchform=ref({
    searchcode:''
})

const searchcode=()=>
{
  thesearchstatus.value=true;
}







</script>

<script >


export default {
  name: "typeWiriter",
  data: () => {
    return {
      typeValue: "",
      typeStatus: false,
      displayTextArray: ["To Start ","To Begin"],
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
 <main v-if="thesearchstatus==true" :class="{thequizconatiner:thesearchstatus}"  >
 
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
   
  
  
  <main :class="{iftrue:thesearchstatus}" class="thequizcontainer">

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