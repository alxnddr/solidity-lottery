/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Lottery, LotteryInterface } from "../Lottery";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "enter",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getPlayers",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "manager",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pickWinner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "players",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610bbe806100606000396000f3fe60806040526004361061004a5760003560e01c8063481c6a751461004f5780635d495aea1461007a5780638b5b9ccc14610091578063e97dcb62146100bc578063f71d96cb146100c6575b600080fd5b34801561005b57600080fd5b50610064610103565b6040516100719190610802565b60405180910390f35b34801561008657600080fd5b5061008f610127565b005b34801561009d57600080fd5b506100a6610301565b6040516100b3919061081d565b60405180910390f35b6100c461041d565b005b3480156100d257600080fd5b506100ed60048036038101906100e891906105fc565b6104cb565b6040516100fa9190610802565b60405180910390f35b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146101b5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101ac9061083f565b60405180910390fd5b6001808054905010156101fd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101f49061085f565b60405180910390fd5b600060018054905061020d61050a565b61021791906109a1565b90506001818154811061022d5761022c610a01565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc479081150290604051600060405180830381858888f1935050505015801561029d573d6000803e3d6000fd5b50600067ffffffffffffffff8111156102b9576102b8610a30565b5b6040519080825280602002602001820160405280156102e75781602001602082028036833780820191505090505b50600190805190602001906102fd929190610540565b5050565b606060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610391576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103889061083f565b60405180910390fd5b600180548060200260200160405190810160405280929190818152602001828054801561041357602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116103c9575b5050505050905090565b662386f26fc100003411610466576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161045d9061087f565b60405180910390fd5b6001339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b600181815481106104db57600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600044426001604051602001610522939291906107c9565b6040516020818303038152906040528051906020012060001c905090565b8280548282559060005260206000209081019282156105b9579160200282015b828111156105b85782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555091602001919060010190610560565b5b5090506105c691906105ca565b5090565b5b808211156105e35760008160009055506001016105cb565b5090565b6000813590506105f681610b71565b92915050565b60006020828403121561061257610611610a72565b5b6000610620848285016105e7565b91505092915050565b60006106358383610659565b60208301905092915050565b600061064d8383610677565b60208301905092915050565b61066281610941565b82525050565b61067181610941565b82525050565b61068081610941565b82525050565b6000610691826108c4565b61069b81856108f4565b93506106a68361089f565b8060005b838110156106d75781516106be8882610629565b97506106c9836108da565b9250506001810190506106aa565b5085935050505092915050565b60006106ef826108cf565b6106f98185610905565b9350610704836108af565b8060005b8381101561073c5761071982610a5f565b6107238882610641565b975061072e836108e7565b925050600181019050610708565b5085935050505092915050565b6000610756602883610910565b915061076182610a84565b604082019050919050565b6000610779602a83610910565b915061078482610ad3565b604082019050919050565b600061079c602883610910565b91506107a782610b22565b604082019050919050565b6107c36107be82610973565b610997565b82525050565b60006107d582866107b2565b6020820191506107e582856107b2565b6020820191506107f582846106e4565b9150819050949350505050565b60006020820190506108176000830184610668565b92915050565b600060208201905081810360008301526108378184610686565b905092915050565b6000602082019050818103600083015261085881610749565b9050919050565b600060208201905081810360008301526108788161076c565b9050919050565b600060208201905081810360008301526108988161078f565b9050919050565b6000819050602082019050919050565b60008190508160005260206000209050919050565b600081519050919050565b600081549050919050565b6000602082019050919050565b6000600182019050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061094c82610953565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600061099061098b83610a77565b610921565b9050919050565b6000819050919050565b60006109ac82610973565b91506109b783610973565b9250826109c7576109c66109d2565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000610a6b825461097d565b9050919050565b600080fd5b60008160001c9050919050565b7f6f6e6c7920746865206d616e616765722063616e20706572666f726d2074686960008201527f7320616374696f6e000000000000000000000000000000000000000000000000602082015250565b7f6c6f7474657279207265717569726573206174206c656173742074776f20706160008201527f727469636970616e747300000000000000000000000000000000000000000000602082015250565b7f6d696e696d756d20616d6f756e74206f6620302e30312065746865722069732060008201527f7265717569726564000000000000000000000000000000000000000000000000602082015250565b610b7a81610973565b8114610b8557600080fd5b5056fea2646970667358221220ad58485e8eb7dd05892b640340013200e361a9ec243bc1e83c3e9b66cab4f4f464736f6c63430008070033";

export class Lottery__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Lottery> {
    return super.deploy(overrides || {}) as Promise<Lottery>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Lottery {
    return super.attach(address) as Lottery;
  }
  connect(signer: Signer): Lottery__factory {
    return super.connect(signer) as Lottery__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LotteryInterface {
    return new utils.Interface(_abi) as LotteryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Lottery {
    return new Contract(address, _abi, signerOrProvider) as Lottery;
  }
}
