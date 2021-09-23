require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give knife fortune shoulder name random rural uncover grid private fringe genuine'; 
let testAccounts = [
"0xe805fb2852cb6828ac58ad50b98a9c5a4a4d499163ce708f81c70cc103cc9b3e",
"0xad4952654a4af0aa3bf98d4d920379c5e5c96007a577cf94da83862668ddea32",
"0x64c17df18457f7e7804acd5a1dc5721c5c73f64518fc23c9931dbb39a747d2aa",
"0x16dd8bfcef4428f497d6e07a8c700d43b4697240144667a36fcb00a7eed08b49",
"0x6f22eadaf3c8a993841a5671424014f337df5d1033fc809e02e8e1de7606bd40",
"0x550a6fbd8392d1312086ee0cf438027525d485002375d0fd27f82b49c88d25ce",
"0xa298af86cbfb5afab58cd06116b65861998699836ccf33f55701483e977113ba",
"0xd3b85bfa1feaa7269abdd256a8ec7343737ab5070440910c17ae762ac0341a8c",
"0x152555998efa4a7430c1dd8b3653fa253a11064e6d8bf0478e5f5a4b89e62445",
"0x908fb99e563a2f56fbf772db6b86cb15e36c5f9b0c7214170ca5e3d24a3d04d9"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


