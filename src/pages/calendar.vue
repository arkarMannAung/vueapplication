<template>
    <div class="m-auto">
        <h1 class="text-2xl my-2 text-center">Vue Calendar</h1>
        <!-- <h2>{{currentDate}}</h2> -->
        <section class="mx-2 flex justify-between">
            <h2 class="font-bold">{{currentMonthName}}</h2>
            <h2 class="font-bold">{{currentYear}}</h2>
        </section>        
        <section class="flex">
            <p class="text-center py-2" style="width: 14.28%" v-for="day in days" :key="day">{{day}}</p>
        </section>
        <section class="flex flex-wrap" >
            <p class="text-center"  style="width: 14.28%" v-for="num in startDay()" :key="num"></p>
            <p
                class="text-center"
                style="width: 14.28%" 
                v-for="num in dayInMonth()"
                :class="currentDateClass(num)"
                :key="num">{{num}}
            </p>
        </section>
        <section class="flex justify-between my-4">
            <button class="px-2 border rounded" @click="prev">Prev</button>
            <button class="px-2 border rounded" @click="next">Next</button>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentDate: new Date().getUTCDate(),
            // currentMonthReal: new Date().getMonth()+1,
            currentMonth: new Date().getMonth()+1,
            currentYear: new Date().getFullYear(),
            days: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
        };
    },
    methods: {
        dayInMonth() {
            return new Date(this.currentYear,this.currentMonth,0).getDate();
        },
        startDay() {
            return new Date(this.currentYear,this.currentMonth-1,1).getDay();
        },
        next() {
            if (this.currentMonth==12){
                this.currentYear++;
                this.currentMonth=1;
            }else{
                this.currentMonth++;
            }
        },        
        prev() {
            if (this.currentMonth===1){
                this.currentYear--;
                this.currentMonth=12;
            }else{
                this.currentMonth--;
            }
        },
        currentDateClass(num){
            if (num===this.currentDate&&this.currentMonth===(new Date().getMonth()+1)){
                return 'text-blue-600 font-bold';
            }else{
                return '';
            }
        },
    },
    computed: {
        currentMonthName(){
            return new Date(this.currentYear,this.currentMonth-1).toLocaleString("default",{month: "long"});
        }, 
    }
}
</script>

<style>

</style>