require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope area off tragic educate ranch remember history include knife boat slight'; 
let testAccounts = [
"0xd0fcdef84ccbcbbcfd1543ef90c8b28e367c17fa0b01638b6b2d2e76d28cd184",
"0x5caf1f3240437750ebc935795c47c6cc97317de02f8d21b3673a37942e6e98bf",
"0x405f910fc5d1a7ea33add2f00122228fc0abad99aa192579633af7c451fe6bf5",
"0xc25ff23d61b8e19ee89a16fe1fef0e6875106f97514f1f21777207250e44e630",
"0xb5514cb9b1f6846c2d1c496aad83235aa4f5ceff189bdf879bb25f176ece00e9",
"0x5121ba96fa88d6dc3424215d7067a2f0dd159ca43bd0a71d38ed0ba4e80e88e8",
"0x625ad234a9410f71f6a58c5ee90beb7efed4106f06335f6ae4a19388307d6e22",
"0x5ec2d373f9af6010854fc4e418f7b035ccaf4759eeee5ac62461873d371d8670",
"0xf7debbbc10c79c5d6ea67da21b3e3e2bdd4ade728a8a9e31dd43b916be4ecc43",
"0x391c3a465ec1987b04cb5c093cd3c2ec424d725f72126de462fc10cb6fc13005"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
