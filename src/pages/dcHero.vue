<template>

<div class="m-auto">
    <h1 class="text-2xl text-center mt-5">Hero List {{heroCount}}</h1>
    <ul>
    <li class="flex justify-between my-2" v-for="(hero,x) in heros" :key="hero.name">
        <div>{{ hero.name }}</div>
        <button @click="removeHero(x)">x</button> 
    </li>
    <br>
    <form class="mt-5" @submit.prevent="addHero">
        <input class="border rounded" v-model.trim="newHero" placeholder="type hero name here">
        <button class="border rounded bg-gradient-to-t from-red-700 to-pink-500 text-white" type="submit">Add Hero</button>
        <!-- <button @click="remove">Remove</button> -->
        <!-- <button @click="setName">Set Full Name</button> -->
    </form>
    <!-- <small>Total Hero {{heroCount}}</small> -->
    </ul>
</div>

</template>

<script>
export default {

  data(){
    return {
      fname: 'Arkar',
      lname: 'Mann Aung',
      isDisable: false,
      newHero: "",
      heros: [{name:'Fanny'},{name:'Zilong'},{name:'Miya'},{name:"Chang'e"},{name:"Tigeral"}],
    }
  },
  methods:{
    addHero() {
      if(this.newHero!==''){
      this.heros.unshift({name:this.newHero});
      this.newHero='';
      }
    },
    remove() {
      this.heros.shift();
    },
    randM(){
      return Math.random();
    },
    setName() {
      this.fullname='Nann Nawe Nase Oo';
    },
    removeHero(x){
      // this.heros.splice(x,1);
      // other way by using filter
      const filter = this.heros.filter((v,i)=>i!=x);
      // console.log(filter);
      this.heros=filter;
    },
  },
  computed:{
    heroCount(){
      return (
        this.heros.length
      )
    },
    randC(){
      return Math.random();
    },
    fullname:{
      get(){
        return `${this.fname} ${this.lname}`;
      },
      set(name){
        const values = name.split(" ");
        this.fname=values[0];
        this.lname=values[1];
      }
    }
  }
}
</script>

<style>

</style>