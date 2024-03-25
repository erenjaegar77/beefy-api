import { getKey, setKey } from '../../utils/cache';

let cowData;

const CACHE_KEY = 'COWCENTRATED_DATA';
const INIT_DELAY = 5000;

const addressToVaultIdMapping = {
  ['0x9A864CAa21515D85C64323c5670C6a5b776D0e39'.toLowerCase()]: 'uniswap-cow-op-susd-usdc-t2',
  ['0xB8FB18a0F06a2Fd4c65B4168F561618Aab0768E7'.toLowerCase()]: 'uniswap-cow-op-op-eth-t2',
  ['0x44EF0a7023e7B19619F29C09db690fA3DA655453'.toLowerCase()]: 'uniswap-cow-op-moobifi-eth-t2',
};

const updateCowcentratedData = async () => {
  try {
    const a: any = await fetch('https://api.0xgraph.xyz/subgraphs/name/beefyfinance/clm-optimism', {
      headers: {
        accept: 'application/graphql-response+json, application/json, multipart/mixed',
        'accept-language': 'en-US,en;q=0.9',
        'content-type': 'application/json',
      },
      body: '{"query":"query BeefyCLss {\\n  beefyCLVaults {\\n    id\\n    priceRangeMinUSD\\n    currentPriceOfToken0InToken1\\n    priceRangeMaxUSD\\n    priceRangeMin1\\n    priceRangeMax1\\n  }\\n}","operationName":"BeefyCLss","extensions":{}}',
      method: 'POST',
    }).then(response => response.json());
    a.data.beefyCLVaults.forEach((vault: any) => {
      if (addressToVaultIdMapping[vault.id.toLowerCase()]) {
        cowData[addressToVaultIdMapping[vault.id.toLowerCase()]] = {
          currentPrice: vault.currentPriceOfToken0InToken1,
          priceRangeMin: vault.priceRangeMin1,
          priceRangeMax: vault.priceRangeMax1,
        };
      }
    });
    await saveToRedis();
  } catch (err) {
    console.log(err.message);
  }

  console.log('> Cowcentrated data updated');
};

export const getCowcentratedData = () => cowData;

export const initCowDataService = async () => {
  const cachedTvl = await getKey(CACHE_KEY);
  cowData = cachedTvl ?? {};

  setTimeout(updateCowcentratedData, INIT_DELAY);
};

const saveToRedis = async () => {
  await setKey(CACHE_KEY, cowData);
};
