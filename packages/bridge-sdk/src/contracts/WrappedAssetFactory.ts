/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, ContractFactory, Signer } from 'ethers';
import { Provider } from 'ethers/providers';
import { UnsignedTransaction } from 'ethers/utils/transaction';

import { TransactionOverrides } from '.';
import { WrappedAsset } from './WrappedAsset';

export class WrappedAssetFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: TransactionOverrides): Promise<WrappedAsset> {
    return super.deploy(overrides) as Promise<WrappedAsset>;
  }
  getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction {
    return super.getDeployTransaction(overrides);
  }
  attach(address: string): WrappedAsset {
    return super.attach(address) as WrappedAsset;
  }
  connect(signer: Signer): WrappedAssetFactory {
    return super.connect(signer) as WrappedAssetFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): WrappedAsset {
    return new Contract(address, _abi, signerOrProvider) as WrappedAsset;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
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
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    inputs: [],
    name: 'assetAddress',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'assetChain',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'bridge',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'initialized',
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
        internalType: 'uint8',
        name: '_assetChain',
        type: 'uint8',
      },
      {
        internalType: 'bytes32',
        name: '_assetAddress',
        type: 'bytes32',
      },
      {
        internalType: 'uint8',
        name: 'decimals',
        type: 'uint8',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
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
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
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
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'burn',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
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
  {
    inputs: [],
    name: 'symbol',
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
  {
    inputs: [],
    name: 'decimals',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalSupply',
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
        internalType: 'address',
        name: 'account',
        type: 'address',
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
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transfer',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
    ],
    name: 'allowance',
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
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'approve',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transferFrom',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'addedValue',
        type: 'uint256',
      },
    ],
    name: 'increaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'subtractedValue',
        type: 'uint256',
      },
    ],
    name: 'decreaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

const _bytecode =
  '0x60806040526012600760006101000a81548160ff021916908360ff16021790555034801561002c57600080fd5b50611e998061003c6000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c806340c10f19116100a2578063a457c2d711610071578063a457c2d7146104ff578063a7a2d3fb14610563578063a9059cbb146105ab578063dd62ed3e1461060f578063e78cea921461068757610116565b806340c10f191461038857806370a08231146103d657806395d89b411461042e5780639dc29fac146104b157610116565b806318160ddd116100e957806318160ddd146102435780631ba46cfd1461026157806323b872dd1461027f578063313ce56714610303578063395093511461032457610116565b8063026b05391461011b57806306fdde031461013c578063095ea7b3146101bf578063158ef93e14610223575b600080fd5b6101236106bb565b604051808260ff16815260200191505060405180910390f35b6101446106cc565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610184578082015181840152602081019050610169565b50505050905090810190601f1680156101b15780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61020b600480360360408110156101d557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610800565b60405180821515815260200191505060405180910390f35b61022b61081e565b60405180821515815260200191505060405180910390f35b61024b610831565b6040518082815260200191505060405180910390f35b61026961083b565b6040518082815260200191505060405180910390f35b6102eb6004803603606081101561029557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610841565b60405180821515815260200191505060405180910390f35b61030b61091a565b604051808260ff16815260200191505060405180910390f35b6103706004803603604081101561033a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610931565b60405180821515815260200191505060405180910390f35b6103d46004803603604081101561039e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506109e4565b005b610418600480360360208110156103ec57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610a98565b6040518082815260200191505060405180910390f35b610436610ae1565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561047657808201518184015260208101905061045b565b50505050905090810190601f1680156104a35780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6104fd600480360360408110156104c757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610b83565b005b61054b6004803603604081101561051557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610c37565b60405180821515815260200191505060405180910390f35b6105a96004803603606081101561057957600080fd5b81019080803560ff16906020019092919080359060200190929190803560ff169060200190929190505050610d04565b005b6105f7600480360360408110156105c157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610e70565b60405180821515815260200191505060405180910390f35b6106716004803603604081101561062557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610e8e565b6040518082815260200191505060405180910390f35b61068f610f15565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b60008054906101000a900460ff1681565b60606106e760008054906101000a900460ff1660ff16610f3b565b6106ef61107f565b60405160200180807f576f726d686f6c652057726170706564202d200000000000000000000000000081525060130183805190602001908083835b6020831061074d578051825260208201915060208101905060208303925061072a565b6001836020036101000a038019825116818451168082178552505050505050905001807f2d0000000000000000000000000000000000000000000000000000000000000081525060010182805190602001908083835b602083106107c657805182526020820191506020810190506020830392506107a3565b6001836020036101000a03801982511681845116808217855250505050505090500192505050604051602081830303815290604052905090565b600061081461080d611243565b848461124b565b6001905092915050565b600260009054906101000a900460ff1681565b6000600554905090565b60015481565b600061084e848484611442565b61090f8461085a611243565b61090a85604051806060016040528060288152602001611d6360289139600460008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006108c0611243565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546116fc9092919063ffffffff16565b61124b565b600190509392505050565b6000600760009054906101000a900460ff16905090565b60006109da61093e611243565b846109d5856004600061094f611243565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546117b690919063ffffffff16565b61124b565b6001905092915050565b600260019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610a8a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526025815260200180611e1a6025913960400191505060405180910390fd5b610a94828261183e565b5050565b6000600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b606060068054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610b795780601f10610b4e57610100808354040283529160200191610b79565b820191906000526020600020905b815481529060010190602001808311610b5c57829003601f168201915b5050505050905090565b600260019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610c29576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526025815260200180611dd16025913960400191505060405180910390fd5b610c3382826119fb565b5050565b6000610cfa610c44611243565b84610cf585604051806060016040528060258152602001611e3f6025913960046000610c6e611243565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546116fc9092919063ffffffff16565b61124b565b6001905092915050565b600260009054906101000a900460ff1615610d87576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260138152602001807f616c726561647920696e697469616c697a65640000000000000000000000000081525060200191505060405180910390fd5b826000806101000a81548160ff021916908360ff1602179055508160018190555033600260016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600260006101000a81548160ff0219169083151502179055506040518060400160405280600381526020017f575754000000000000000000000000000000000000000000000000000000000081525060069080519060200190610e4f929190611c38565b5080600760006101000a81548160ff021916908360ff160217905550505050565b6000610e84610e7d611243565b8484611442565b6001905092915050565b6000600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600260019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60606000821415610f83576040518060400160405280600181526020017f3000000000000000000000000000000000000000000000000000000000000000815250905061107a565b600082905060005b60008214610fad578080600101915050600a8281610fa557fe5b049150610f8b565b60608167ffffffffffffffff81118015610fc657600080fd5b506040519080825280601f01601f191660200182016040528015610ff95781602001600182028036833780820191505090505b50905060006001830390505b6000861461107257600a868161101757fe5b0660300160f81b8282806001900393508151811061103157fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a868161106a57fe5b049550611005565b819450505050505b919050565b6060806040518060400160405280601081526020017f30313233343536373839616263646566000000000000000000000000000000008152509050600060015490506060600260200260020160ff1667ffffffffffffffff811180156110e457600080fd5b506040519080825280601f01601f1916602001820160405280156111175781602001600182028036833780820191505090505b50905060005b602060ff168110156112395783600484836020811061113857fe5b1a60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916901c60f81c60ff168151811061117057fe5b602001015160f81c60f81b82600283028151811061118a57fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535083600f60f81b8483602081106111cb57fe5b1a60f81b1660f81c60ff16815181106111e057fe5b602001015160f81c60f81b8260028302600101815181106111fd57fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350808060010191505061111d565b5080935050505090565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156112d1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526024815260200180611df66024913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611357576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180611d1b6022913960400191505060405180910390fd5b80600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156114c8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526025815260200180611dac6025913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561154e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526023815260200180611cd66023913960400191505060405180910390fd5b6115ba81604051806060016040528060268152602001611d3d60269139600360008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546116fc9092919063ffffffff16565b600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061164f81600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546117b690919063ffffffff16565b600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a3505050565b60008383111582906117a9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561176e578082015181840152602081019050611753565b50505050905090810190601f16801561179b5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5082840390509392505050565b600080828401905083811015611834576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156118e1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f45524332303a206d696e7420746f20746865207a65726f20616464726573730081525060200191505060405180910390fd5b6118f6816005546117b690919063ffffffff16565b60058190555061194e81600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546117b690919063ffffffff16565b600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611a81576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180611d8b6021913960400191505060405180910390fd5b611aed81604051806060016040528060228152602001611cf960229139600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546116fc9092919063ffffffff16565b600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611b4581600554611bb590919063ffffffff16565b600581905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b600082821115611c2d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525060200191505060405180910390fd5b818303905092915050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10611c7957805160ff1916838001178555611ca7565b82800160010185558215611ca7579182015b82811115611ca6578251825591602001919060010190611c8b565b5b509050611cb49190611cb8565b5090565b5b80821115611cd1576000816000905550600101611cb9565b509056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f20616464726573736275726e2063616e206f6e6c792062652063616c6c6564206279207468652062726964676545524332303a20617070726f76652066726f6d20746865207a65726f20616464726573736d696e742063616e206f6e6c792062652063616c6c6564206279207468652062726964676545524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa2646970667358221220b3a2ff5f0503f2258e143f986f075a1cf9f8ce968a2954f3953e79c45d383ede64736f6c634300060c0033';