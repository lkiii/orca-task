<template>
    <div class="main">
        <h1>Coin Rates Graph</h1>
        <div>
            <h2>Controls</h2>
            <a class="button" @click="getRates">Get Rates</a>
            <a class="button" @click="clearHistory">Clear history</a>
        </div>
        <div>
            <h2>Graph</h2>
            <div class="currencies" v-for="c in currencies" v-bind:key="c.name">
                <label>{{c.name}}</label>
                <input v-model="c.checked" type="checkbox"/>
            </div>
            </div>
            <graph :chartData="chartData" />
        </div>
</template>
