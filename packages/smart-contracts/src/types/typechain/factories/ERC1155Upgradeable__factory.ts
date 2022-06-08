/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type {
  ERC1155Upgradeable,
  ERC1155UpgradeableInterface,
} from '../ERC1155Upgradeable';

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'approved',
        type: 'bool',
      },
    ],
    name: 'ApprovalForAll',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256[]',
        name: 'ids',
        type: 'uint256[]',
      },
      {
        indexed: false,
        internalType: 'uint256[]',
        name: 'values',
        type: 'uint256[]',
      },
    ],
    name: 'TransferBatch',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'TransferSingle',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'value',
        type: 'string',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
    ],
    name: 'URI',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: 'accounts',
        type: 'address[]',
      },
      {
        internalType: 'uint256[]',
        name: 'ids',
        type: 'uint256[]',
      },
    ],
    name: 'balanceOfBatch',
    outputs: [
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
    ],
    name: 'isApprovedForAll',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256[]',
        name: 'ids',
        type: 'uint256[]',
      },
      {
        internalType: 'uint256[]',
        name: 'amounts',
        type: 'uint256[]',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'safeBatchTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: 'approved',
        type: 'bool',
      },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'interfaceId',
        type: 'bytes4',
      },
    ],
    name: 'supportsInterface',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'uri',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

const _bytecode =
  '0x608060405234801561001057600080fd5b50611405806100206000396000f3fe608060405234801561001057600080fd5b50600436106100775760003560e01c8062fdd58e1461007c57806301ffc9a7146100a25780630e89341c146100c55780632eb2c2d6146100e55780634e1273f4146100fa578063a22cb4651461011a578063e985e9c51461012d578063f242432a14610169575b600080fd5b61008f61008a366004610e8f565b61017c565b6040519081526020015b60405180910390f35b6100b56100b0366004610f82565b610215565b6040519015158152602001610099565b6100d86100d3366004610fc1565b610267565b6040516100999190611142565b6100f86100f3366004610d4e565b6102fb565b005b61010d610108366004610eb8565b610392565b6040516100999190611101565b6100f8610128366004610e55565b6104f3565b6100b561013b366004610d1c565b6001600160a01b03918216600090815260666020908152604080832093909416825291909152205460ff1690565b6100f8610177366004610df3565b610502565b60006001600160a01b0383166101ed5760405162461bcd60e51b815260206004820152602b60248201527f455243313135353a2062616c616e636520717565727920666f7220746865207a60448201526a65726f206164647265737360a81b60648201526084015b60405180910390fd5b5060009081526065602090815260408083206001600160a01b03949094168352929052205490565b60006001600160e01b03198216636cdb3d1360e11b148061024657506001600160e01b031982166303a24d0760e21b145b8061026157506301ffc9a760e01b6001600160e01b03198316145b92915050565b60606067805461027690611267565b80601f01602080910402602001604051908101604052809291908181526020018280546102a290611267565b80156102ef5780601f106102c4576101008083540402835291602001916102ef565b820191906000526020600020905b8154815290600101906020018083116102d257829003601f168201915b50505050509050919050565b6001600160a01b0385163314806103175750610317853361013b565b61037e5760405162461bcd60e51b815260206004820152603260248201527f455243313135353a207472616e736665722063616c6c6572206973206e6f74206044820152711bdddb995c881b9bdc88185c1c1c9bdd995960721b60648201526084016101e4565b61038b8585858585610589565b5050505050565b606081518351146103f75760405162461bcd60e51b815260206004820152602960248201527f455243313135353a206163636f756e747320616e6420696473206c656e677468604482015268040dad2e6dac2e8c6d60bb1b60648201526084016101e4565b600083516001600160401b0381111561042057634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015610449578160200160208202803683370190505b50905060005b84518110156104eb576104b085828151811061047b57634e487b7160e01b600052603260045260246000fd5b60200260200101518583815181106104a357634e487b7160e01b600052603260045260246000fd5b602002602001015161017c565b8282815181106104d057634e487b7160e01b600052603260045260246000fd5b60209081029190910101526104e4816112ce565b905061044f565b509392505050565b6104fe338383610785565b5050565b6001600160a01b03851633148061051e575061051e853361013b565b61057c5760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2063616c6c6572206973206e6f74206f776e6572206e6f7260448201526808185c1c1c9bdd995960ba1b60648201526084016101e4565b61038b8585858585610866565b81518351146105eb5760405162461bcd60e51b815260206004820152602860248201527f455243313135353a2069647320616e6420616d6f756e7473206c656e677468206044820152670dad2e6dac2e8c6d60c31b60648201526084016101e4565b6001600160a01b0384166106115760405162461bcd60e51b81526004016101e49061119d565b3360005b845181101561071757600085828151811061064057634e487b7160e01b600052603260045260246000fd5b60200260200101519050600085838151811061066c57634e487b7160e01b600052603260045260246000fd5b60209081029190910181015160008481526065835260408082206001600160a01b038e1683529093529190912054909150818110156106bd5760405162461bcd60e51b81526004016101e4906111e2565b60008381526065602090815260408083206001600160a01b038e8116855292528083208585039055908b168252812080548492906106fc90849061124f565b9250508190555050505080610710906112ce565b9050610615565b50846001600160a01b0316866001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051610767929190611114565b60405180910390a461077d818787878787610990565b505050505050565b816001600160a01b0316836001600160a01b031614156107f95760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2073657474696e6720617070726f76616c20737461747573604482015268103337b91039b2b63360b91b60648201526084016101e4565b6001600160a01b03838116600081815260666020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b03841661088c5760405162461bcd60e51b81526004016101e49061119d565b336108a581878761089c88610afb565b61038b88610afb565b60008481526065602090815260408083206001600160a01b038a168452909152902054838110156108e85760405162461bcd60e51b81526004016101e4906111e2565b60008581526065602090815260408083206001600160a01b038b811685529252808320878503905590881682528120805486929061092790849061124f565b909155505060408051868152602081018690526001600160a01b03808916928a821692918616917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4610987828888888888610b54565b50505050505050565b6001600160a01b0384163b1561077d5760405163bc197c8160e01b81526001600160a01b0385169063bc197c81906109d4908990899088908890889060040161105e565b602060405180830381600087803b1580156109ee57600080fd5b505af1925050508015610a1e575060408051601f3d908101601f19168201909252610a1b91810190610fa5565b60015b610acb57610a2a611315565b806308c379a01415610a645750610a3f61132d565b80610a4a5750610a66565b8060405162461bcd60e51b81526004016101e49190611142565b505b60405162461bcd60e51b815260206004820152603460248201527f455243313135353a207472616e7366657220746f206e6f6e20455243313135356044820152732932b1b2b4bb32b91034b6b83632b6b2b73a32b960611b60648201526084016101e4565b6001600160e01b0319811663bc197c8160e01b146109875760405162461bcd60e51b81526004016101e490611155565b60408051600180825281830190925260609160009190602080830190803683370190505090508281600081518110610b4357634e487b7160e01b600052603260045260246000fd5b602090810291909101015292915050565b6001600160a01b0384163b1561077d5760405163f23a6e6160e01b81526001600160a01b0385169063f23a6e6190610b9890899089908890889088906004016110bc565b602060405180830381600087803b158015610bb257600080fd5b505af1925050508015610be2575060408051601f3d908101601f19168201909252610bdf91810190610fa5565b60015b610bee57610a2a611315565b6001600160e01b0319811663f23a6e6160e01b146109875760405162461bcd60e51b81526004016101e490611155565b80356001600160a01b0381168114610c3557600080fd5b919050565b600082601f830112610c4a578081fd5b81356020610c578261122c565b604051610c6482826112a2565b8381528281019150858301600585901b87018401881015610c83578586fd5b855b85811015610ca157813584529284019290840190600101610c85565b5090979650505050505050565b600082601f830112610cbe578081fd5b81356001600160401b03811115610cd757610cd76112ff565b604051610cee601f8301601f1916602001826112a2565b818152846020838601011115610d02578283fd5b816020850160208301379081016020019190915292915050565b60008060408385031215610d2e578182fd5b610d3783610c1e565b9150610d4560208401610c1e565b90509250929050565b600080600080600060a08688031215610d65578081fd5b610d6e86610c1e565b9450610d7c60208701610c1e565b935060408601356001600160401b0380821115610d97578283fd5b610da389838a01610c3a565b94506060880135915080821115610db8578283fd5b610dc489838a01610c3a565b93506080880135915080821115610dd9578283fd5b50610de688828901610cae565b9150509295509295909350565b600080600080600060a08688031215610e0a578081fd5b610e1386610c1e565b9450610e2160208701610c1e565b9350604086013592506060860135915060808601356001600160401b03811115610e49578182fd5b610de688828901610cae565b60008060408385031215610e67578182fd5b610e7083610c1e565b915060208301358015158114610e84578182fd5b809150509250929050565b60008060408385031215610ea1578182fd5b610eaa83610c1e565b946020939093013593505050565b60008060408385031215610eca578182fd5b82356001600160401b0380821115610ee0578384fd5b818501915085601f830112610ef3578384fd5b81356020610f008261122c565b604051610f0d82826112a2565b8381528281019150858301600585901b870184018b1015610f2c578889fd5b8896505b84871015610f5557610f4181610c1e565b835260019690960195918301918301610f30565b5096505086013592505080821115610f6b578283fd5b50610f7885828601610c3a565b9150509250929050565b600060208284031215610f93578081fd5b8135610f9e816113b6565b9392505050565b600060208284031215610fb6578081fd5b8151610f9e816113b6565b600060208284031215610fd2578081fd5b5035919050565b6000815180845260208085019450808401835b8381101561100857815187529582019590820190600101610fec565b509495945050505050565b60008151808452815b818110156110385760208185018101518683018201520161101c565b818111156110495782602083870101525b50601f01601f19169290920160200192915050565b6001600160a01b0386811682528516602082015260a06040820181905260009061108a90830186610fd9565b828103606084015261109c8186610fd9565b905082810360808401526110b08185611013565b98975050505050505050565b6001600160a01b03868116825285166020820152604081018490526060810183905260a0608082018190526000906110f690830184611013565b979650505050505050565b602081526000610f9e6020830184610fd9565b6040815260006111276040830185610fd9565b82810360208401526111398185610fd9565b95945050505050565b602081526000610f9e6020830184611013565b60208082526028908201527f455243313135353a204552433131353552656365697665722072656a656374656040820152676420746f6b656e7360c01b606082015260800190565b60208082526025908201527f455243313135353a207472616e7366657220746f20746865207a65726f206164604082015264647265737360d81b606082015260800190565b6020808252602a908201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60408201526939103a3930b739b332b960b11b606082015260800190565b60006001600160401b03821115611245576112456112ff565b5060051b60200190565b60008219821115611262576112626112e9565b500190565b600181811c9082168061127b57607f821691505b6020821081141561129c57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8201601f191681016001600160401b03811182821017156112c7576112c76112ff565b6040525050565b60006000198214156112e2576112e26112e9565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b600060033d111561132a57600481823e5160e01c5b90565b600060443d101561133b5790565b6040516003193d81016004833e81513d6001600160401b03816024840111818411171561136a57505050505090565b82850191508151818111156113825750505050505090565b843d870101602082850101111561139c5750505050505090565b6113ab602082860101876112a2565b509095945050505050565b6001600160e01b0319811681146113cc57600080fd5b5056fea26469706673582212208ef1ec21ff27c785d045a30bdd6bb75c2a7a1a18fbf944fe37ce1c2dcac1780564736f6c63430008040033';

export class ERC1155Upgradeable__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ERC1155Upgradeable> {
    return super.deploy(overrides || {}) as Promise<ERC1155Upgradeable>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC1155Upgradeable {
    return super.attach(address) as ERC1155Upgradeable;
  }
  connect(signer: Signer): ERC1155Upgradeable__factory {
    return super.connect(signer) as ERC1155Upgradeable__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC1155UpgradeableInterface {
    return new utils.Interface(_abi) as ERC1155UpgradeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): ERC1155Upgradeable {
    return new Contract(address, _abi, signerOrProvider) as ERC1155Upgradeable;
  }
}
