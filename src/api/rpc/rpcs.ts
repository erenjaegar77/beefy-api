import { ChainId } from '../../../packages/address-book/address-book';

const rpcs: Record<ChainId, string[]> = {
  [ChainId.ethereum]: [
    'https://eth.llamarpc.com',
    'https://rpc.ankr.com/eth',
    'https://virginia.rpc.blxrbdn.com',
    'https://eth-mainnet.nodereal.io/v1/1659dfb40aa24bbb8153a677b98064d7',
    'https://uk.rpc.blxrbdn.com',
    'https://eth.rpc.blxrbdn.com',
    'https://singapore.rpc.blxrbdn.com',
    'https://ethereum.publicnode.com',
    'https://eth-pokt.nodies.app',
    'https://eth.merkle.io',
    'https://api.zmok.io/mainnet/oaen6dy8ff6hju9k',
    'https://gateway.tenderly.co/public/mainnet',
    'https://rpc.flashbots.net',
    'https://eth-mainnet.public.blastapi.io',
    'https://mainnet.gateway.tenderly.co',
    'https://rpc.flashbots.net/fast',
    'https://rpc.mevblocker.io',
    'https://api.securerpc.com/v1',
    'https://rpc.notadegen.com/eth',
    'https://go.getblock.io/d7dab8149ec04390aaa923ff2768f914',
    'https://rpc.mevblocker.io/fast',
    'https://cloudflare-eth.com',
    'https://rpc.mevblocker.io/noreverts',
    'https://eth.drpc.org',
    'https://rpc.mevblocker.io/fullprivacy',
  ],
  [ChainId.optimism]: [
    'https://optimism.llamarpc.com',
    'https://endpoints.omniatech.io/v1/op/mainnet/public',
    'https://rpc.ankr.com/optimism',
    'https://optimism.blockpi.network/v1/rpc/public',
    'https://op-pokt.nodies.app',
    'https://gateway.tenderly.co/public/optimism',
    'https://optimism.drpc.org',
    'https://rpc.optimism.gateway.fm',
    'https://optimism.meowrpc.com',
    'https://mainnet.optimism.io',
    'https://api.zan.top/node/v1/opt/mainnet/public',
    'https://optimism.publicnode.com',
    'https://optimism-mainnet.public.blastapi.io',
    'https://1rpc.io/op',
  ],
  [ChainId.bsc]: [
    'https://binance.llamarpc.com',
    'https://bsc-dataseed1.bnbchain.org',
    'https://bsc-dataseed2.bnbchain.org',
    'https://bsc-dataseed3.bnbchain.org',
    'https://bsc-dataseed4.bnbchain.org',
    'https://bsc-dataseed2.ninicoin.io',
    'https://bsc-mainnet.nodereal.io/v1/64a9df0874fb4a93b9d0a3849de012d3',
    'https://bsc-dataseed1.ninicoin.io',
    'https://bsc-dataseed2.defibit.io',
    'https://binance.nodereal.io',
    'https://bsc-dataseed.bnbchain.org',
    'https://bsc.rpc.blxrbdn.com',
    'https://bsc.blockpi.network/v1/rpc/public',
    'https://bsc-dataseed3.defibit.io',
    'https://bsc-dataseed4.defibit.io',
    'https://bsc-dataseed3.ninicoin.io',
    'https://bsc-dataseed1.defibit.io',
    'https://bsc-dataseed4.ninicoin.io',
    'https://bsc-pokt.nodies.app',
    'https://bsc.publicnode.com',
    'https://bsc-mainnet.public.blastapi.io',
    'https://bsc.meowrpc.com',
    'https://1rpc.io/bnb',
    'https://koge-rpc-bsc.48.club',
    'https://rpc-bsc.48.club',
    'https://api.zan.top/node/v1/bsc/mainnet/public',
  ],
  [ChainId.arbitrum]: [
    'https://arbitrum.llamarpc.com',
    'https://endpoints.omniatech.io/v1/arbitrum/one/public',
    'https://arbitrum-one.public.blastapi.io',
    'https://arb-mainnet-public.unifra.io',
    'https://arbitrum.drpc.org',
    'https://rpc.arb1.arbitrum.gateway.fm',
    'https://arbitrum-one.publicnode.com',
    'https://arbitrum.meowrpc.com',
    'https://arb-pokt.nodies.app',
    'https://arbitrum.blockpi.network/v1/rpc/public',
  ],
  [ChainId.fantom]: [
    'https://fantom.blockpi.network/v1/rpc/public',
    'https://fantom-pokt.nodies.app',
    'https://fantom-mainnet.public.blastapi.io',
    'https://fantom.publicnode.com',
    'https://rpcapi.fantom.network',
    'https://rpc.fantom.gateway.fm',
    'https://1rpc.io/ftm',
    'https://fantom.drpc.org',
    'https://rpc.ankr.com/fantom',
    'https://rpc.ftm.tools',
  ],
  [ChainId.polygon]: [
    'https://polygon.llamarpc.com',
    'https://polygon-rpc.com',
    'https://rpc.ankr.com/polygon',
    'https://polygon.rpc.blxrbdn.com',
    'https://polygon-mainnet.public.blastapi.io',
    'https://polygon-bor.publicnode.com',
    'https://rpc-mainnet.matic.quiknode.pro',
    'https://rpc-mainnet.maticvigil.com',
    'https://polygon-pokt.nodies.app',
    'https://polygon.blockpi.network/v1/rpc/public',
    'https://polygon.meowrpc.com',
    'https://1rpc.io/matic',
    'https://api.zan.top/node/v1/polygon/mainnet/public',
    'https://gateway.tenderly.co/public/polygon',
    'https://polygon.drpc.org',
    'https://polygon.api.onfinality.io/public',
  ],
  [ChainId.avax]: [
    'https://avalanche.public-rpc.com',
    'https://avalanche.blockpi.network/v1/rpc/public',
    'https://ava-mainnet.public.blastapi.io/ext/bc/C/rpc',
    'https://api.avax.network/ext/bc/C/rpc',
    'https://rpc.ankr.com/avalanche',
    'https://avax-pokt.nodies.app/ext/bc/C/rpc',
    'https://avax.meowrpc.com',
    'https://1rpc.io/avax/c',
    'https://api.zan.top/node/v1/avax/mainnet/public/ext/bc/C/rpc',
    'https://avalanche-c-chain.publicnode.com',
  ],
  [ChainId.cronos]: [
    'https://cronos.blockpi.network/v1/rpc/public',
    'https://evm.cronos.org',
    'https://cronos-evm.publicnode.com',
    'https://1rpc.io/cro',
  ],
  [ChainId.moonbeam]: [
    'https://rpc.ankr.com/moonbeam',
    'https://moonbeam.unitedbloc.com:3000',
    'https://moonbeam.public.blastapi.io',
    'https://rpc.api.moonbeam.network',
    'https://moonbeam-rpc.dwellir.com',
    'https://1rpc.io/glmr',
    'https://moonbeam.publicnode.com',
  ],
  [ChainId.moonriver]: [
    'https://moonriver.unitedbloc.com:2000',
    'https://moonriver.public.blastapi.io',
    'https://moonriver.publicnode.com',
    'https://rpc.api.moonriver.moonbeam.network',
    'https://moonriver-rpc.dwellir.com',
  ],
  [ChainId.metis]: [
    'https://andromeda.metis.io/?owner=1088',
    'https://metis-pokt.nodies.app',
    'https://metis-mainnet.public.blastapi.io',
  ],
  [ChainId.fuse]: [
    'https://rpc.fuse.io',
    'https://fuse.liquify.com',
    'https://fuse-pokt.nodies.app',
    'https://fuse.api.onfinality.io/public',
  ],
  [ChainId.kava]: [
    'https://kava.api.onfinality.io/public',
    'https://evm.kava.io',
    'https://kava-evm.publicnode.com',
    'https://kava-pokt.nodies.app',
  ],
  [ChainId.canto]: [
    'https://canto.gravitychain.io',
    'https://jsonrpc.canto.nodestake.top',
    'https://canto.slingshot.finance',
    'https://mainnode.plexnode.org:8545',
  ],
  [ChainId.zksync]: [
    'https://mainnet.era.zksync.io',
    'https://zksync.drpc.org',
    'https://zksync-era.blockpi.network/v1/rpc/public',
    'https://1rpc.io/zksync2-era',
    'https://zksync.meowrpc.com',
  ],
  [ChainId.zkevm]: [
    'https://rpc.ankr.com/polygon_zkevm',
    'https://polygon-zkevm-mainnet.public.blastapi.io',
    'https://rpc.polygon-zkevm.gateway.fm',
    'https://zkevm-rpc.com',
    'https://1rpc.io/polygon/zkevm',
    'https://polygon-zkevm.blockpi.network/v1/rpc/public',
    'https://polygon-zkevm.drpc.org',
  ],
  [ChainId.base]: [
    'https://endpoints.omniatech.io/v1/base/mainnet/public',
    'https://mainnet.base.org',
    'https://developer-access-mainnet.base.org',
    'https://base-pokt.nodies.app',
    'https://base.gateway.tenderly.co',
    'https://base.blockpi.network/v1/rpc/public',
    'https://base.meowrpc.com',
    'https://rpc.notadegen.com/base',
    'https://base.drpc.org',
    'https://base.publicnode.com',
    'https://1rpc.io/base',
    'https://base-mainnet.public.blastapi.io',
  ],
  [ChainId.gnosis]: [
    'https://rpc.ankr.com/gnosis',
    'https://gnosis.oat.farm',
    'https://gnosis-mainnet.public.blastapi.io',
    'https://gnosis.publicnode.com',
    'https://gnosis-pokt.nodies.app',
    'https://gnosis.drpc.org',
    'https://gnosis.blockpi.network/v1/rpc/public',
    'https://1rpc.io/gnosis',
    'https://rpc.ap-southeast-1.gateway.fm/v4/gnosis/non-archival/mainnet',
    'https://endpoints.omniatech.io/v1/gnosis/mainnet/public',
    'https://rpc.gnosischain.com',
  ],
  [ChainId.celo]: [
    'https://rpc.ankr.com/celo',
    'https://forno.celo.org',
    'https://1rpc.io/celo',
    'https://celo.api.onfinality.io/public',
  ],
  [ChainId.heco]: [
    'https://http-mainnet-node.huobichain.com',
    'https://http-mainnet.hecochain.com',
  ],
  [ChainId.linea]: [
    'https://linea.blockpi.network/v1/rpc/public',
    'https://1rpc.io/linea',
    'https://rpc.linea.build',
    'https://linea.drpc.org',
  ],
  [ChainId.emerald]: ['https://emerald.oasis.dev', 'https://1rpc.io/oasis/emerald'],
  [ChainId.one]: [
    'https://rpc.ankr.com/harmony',
    'https://api.harmony.one',
    'https://api.s0.t.hmny.io',
    'https://a.api.s0.t.hmny.io',
    'https://hmyone-pokt.nodies.app',
    'https://1rpc.io/one',
  ],
  [ChainId.aurora]: [
    'https://mainnet.aurora.dev',
    'https://aurora.drpc.org',
    'https://1rpc.io/aurora',
  ],
  // [ChainId.mantle]: [
  //   'https://rpc.mantle.xyz',
  //   'https://rpc.ankr.com/mantle',
  //   'https://1rpc.io/mantle',
  // ],
};

export const getChainRpcs = (chainId: ChainId): string[] => rpcs[chainId] ?? [];
