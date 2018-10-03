<template>
    <div class="main">
        <h1>Home {{ test }}</h1>
        <div>
            <button @click="getRates">Get Rates</button>
            <button @click="clearHistory">Clear history</button>
        </div>
        <div>
            <div v-for="c in currencies" v-bind:key="c.name">
                {{c.name}} <input v-model="c.checked" type="checkbox"/>
            </div>
            </div>
            <graph :chartData="chartData" />
        </div>
</template>
