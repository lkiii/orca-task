<template>
    <div class="graph">
        <GChart v-if="chartData.length > 1" type="LineChart" :data="chartData" :options="chartOptions" />
        <div v-else>
            Need more data to draw Graph
        </div>
    </div>
</template>
