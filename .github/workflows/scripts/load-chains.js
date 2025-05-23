#!/usr/bin/env node

// todo instead of hardcode the chains, get them from a source of truth
const mainnetChains = [
    'abstract-mainnet',
    'ape-mainnet',
    'arbitrum-mainnet',
    'aurora-mainnet',
    'avalanche-mainnet',
    'base-mainnet',
    'bera-mainnet',
    'bsc-mainnet',
    'codex-mainnet',
    'coredao-mainnet',
    'cronosevm-mainnet',
    'cronoszkevm-mainnet',
    'degen-mainnet',
    'ethereum-mainnet',
    'flare-mainnet',
    'flow-mainnet',
    'fuse-mainnet',
    'glue-mainnet',
    'gnosis-mainnet',
    'goat-mainnet',
    'gravity-mainnet',
    'hemi-mainnet',
    'ink-mainnet',
    'iota-mainnet',
    'islander-mainnet',
    'kava-mainnet',
    'klaytn-mainnet',
    'lightlink-mainnet',
    'manta-mainnet',
    'mantle-mainnet',
    'metis-mainnet',
    'nibiru-mainnet',
    'optimism-mainnet',
    'peaq-mainnet',
    'plume-mainnet',
    'plumephoenix-mainnet',
    'polygon-mainnet',
    'rarible-mainnet',
    'rootstock-mainnet',
    'scroll-mainnet',
    'sei-mainnet',
    'soneium-mainnet',
    'sonic-mainnet',
    'story-mainnet',
    'superposition-mainnet',
    'taiko-mainnet',
    'telos-mainnet',
    'unichain-mainnet',
    'xchain-mainnet',
    'xdc-mainnet',
    'zkconsensys-mainnet',
];

const testnetChains = [
    'avalanche-testnet',
    'arbsep-testnet',
    'bsc-testnet',
    'klaytn-testnet',
    'mantle-testnet',
    'monad-testnet',
    'odyssey-testnet',
    'opt-testnet',
    'sepolia-testnet',
];

// Get the network from environment variable or default to mainnet
const network = process.env.NETWORK || 'mainnet';

// Select the appropriate chain list based on the network
const chainList = network === 'mainnet' ? mainnetChains : testnetChains;

// Return the list of strings
console.log(JSON.stringify(chainList));
