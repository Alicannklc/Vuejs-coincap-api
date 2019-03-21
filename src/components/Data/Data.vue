
<script>

import MdTable from '../Mdtable/Table.vue';

export default {
    data() {
        return {
            assets: []
        }
    },
    async created() {
        await fetch('https://api.coincap.io/v2/assets?limit=15')
            .then(res => res.json())
            .then(data => this.setAssets(data.data));
   
    },
    methods: {
        setAssets(data) {
            this.assets = data;
            this.getNames(this.assets);
        },
        getNames(assets) {
            const result = assets.map(a => a.name.toLowerCase()).join(',');
            this.getPrices(result);
        },
        getPrices(result) {
            const pricesWs = new WebSocket(`wss://ws.coincap.io/prices?assets=${result}`);

            pricesWs.onmessage = (msg) => {
                this.Gunceltut(msg.data);
            }
        },
        Gunceltut(data) {
            const parsedData = JSON.parse(data);

            for(let asset of this.assets) {
                for(let k in parsedData) {
                    if(asset.name.toLowerCase() === k) {
                        asset.priceUsd = parsedData[k];
                    }
                }
            }
        }
    },
    components: {
        'table-component': MdTable
    }
}
</script>

<template>
    <table-component v-if="assets.length" :assets="assets"></table-component>
</template>
