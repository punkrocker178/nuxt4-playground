<script setup lang="ts">
import type { DisplayStock } from '~/models/displayStock';
const stocks = ref<DisplayStock[]>([]);
const stockState = useState('stocks', () => stocks.value);

onMounted(async () => {
  console.log('StockDashboard component mounted');
  await getStocks();
});

async function getStocks() {
  const data = await useStocks().fetchStockPrice('DGW;MWG;VGC;SSI;TCX;VHM;VNM;FUETCC50;FUEVFVND;E1VFVN30');
  Object.entries(data).forEach(([symbol, stockData]) => {
    stocks.value.push({
      symbol,
      price: stockData.Price,
      change: stockData.Price - stockData.RefPrice,
      changePercent: stockData.RefPrice !== 0 ? ((stockData.Price - stockData.RefPrice) / stockData.RefPrice) * 100 : undefined,
      date: useFormatDate(stockData.LastTradeDate),
    });
  });
  stockState.value = stocks.value;
}
</script>
<template>
  <div>
    <h1>Stock Dashboard</h1>
    <div class="stocks-container">
      <StockCard v-for="stock in stocks" :key="stock.symbol" v-bind="stock" />
    </div>

    <email-subscription v-if="stocks.length > 0"></email-subscription>
  </div>
</template>