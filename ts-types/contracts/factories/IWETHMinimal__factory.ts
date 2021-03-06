/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IWETHMinimal } from "../IWETHMinimal";

export class IWETHMinimal__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IWETHMinimal {
    return new Contract(address, _abi, signerOrProvider) as IWETHMinimal;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
