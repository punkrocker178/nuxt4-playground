<script setup lang="ts">
import type { Company } from '~/models/companies';
import type { DisplayStock } from '~/models/displayStock';

const stockState = useState<DisplayStock[]>('stocks', () => []);
const isLoading = ref(false);
const stockList = ref(['DGW', 'MWG', 'VGC', 'SSI', 'TCX', 'VHM', 'VNM', 'FUETCC50', 'FUEVFVND', 'E1VFVN30']);
const stockParameter = computed(() => stockList.value.join(';'));
const stockControl = ref('');

onServerPrefetch(async () => {
  await getStocks();
});

function addStock(symbol: string) {
  if (!symbol) {
    console.warn('Stock symbol is empty.');
    return;
  }

  const companies = useState<Company[]>('companies');

  if (companies.value.some((company: Company) => company.Symbol === symbol.toUpperCase())) {
    if (!stockList.value.includes(symbol)) {
      stockList.value.push(symbol);
      getStocks();
    } else {
      console.warn(`Stock ${symbol} is already in the list.`);
    }

    stockControl.value = '';
  } else {
    console.error(`Stock symbol ${symbol} not found in company list.`);
  }
}

async function getStocks() {
  isLoading.value = true;
  try {
    if (!stockParameter.value) {
      console.warn('No stock symbols to fetch.');
      stockState.value = [];
      return;
    }

    const data = await useStocks().fetchStockPrice(stockParameter.value);
    stockState.value = Object.entries(data).map(([symbol, stockData]) => ({
      symbol,
      price: stockData.Price,
      change: stockData.Price - stockData.RefPrice,
      changePercent: stockData.RefPrice !== 0 ? ((stockData.Price - stockData.RefPrice) / stockData.RefPrice) * 100 : undefined,
      date: useFormatDate(stockData.LastTradeDate),
    }));
  } catch (error) {
    console.error('Error fetching stock data:', error);
  } finally {
    isLoading.value = false;
  }
}

function removeStock(symbol: string) {
  stockList.value = stockList.value.filter((s) => s !== symbol);
  getStocks();
}
</script>
<template>
  <div>
    <h1>Stock Dashboard</h1>
    <div class="stocks-container">
      <div>
      <v-text-field v-model="stockControl" label="Stock to add"></v-text-field>
      <v-btn @click="addStock(stockControl)" color="primary">Add Stock</v-btn>
      </div>
      <div v-if="isLoading" class="text-center">
        <v-progress-circular indeterminate color="primary" class="my-3"/>
      </div>
      <StockCard v-for="stock in stockState" :key="stock.symbol" v-bind="stock" @delete="removeStock"/>
    </div>

    <div class="mt-5">
      <email-subscription v-if="stockState.length > 0" />
    </div>
  </div>
</template>