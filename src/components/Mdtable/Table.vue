<script>

export default {
    props: ['assets']
}

</script>

<template>
<md-table>

  <md-table-header>
       <md-table-head>Name</md-table-head>
      <md-table-head>Price</md-table-head>
      <md-table-head>MarketCapUsd</md-table-head>
      <md-table-head>Volume (24Hr)</md-table-head>
    </md-table-row>
  </md-table-header>
  <md-table-body>

      <!-- Forech -->
    <md-table-row v-for="asset in assets" :key="asset.id">
    <md-table-cell >{{asset.name}}</md-table-cell>
    <md-table-cell >${{(asset.priceUsd)}}</md-table-cell>
     <md-table-cell>${{Math.ceil(asset.marketCapUsd)}}</md-table-cell>
      <md-table-cell>${{Math.ceil(asset.volumeUsd24Hr)}}</md-table-cell>
  </md-table-row>
  </md-table-body>
</md-table>
</template>

