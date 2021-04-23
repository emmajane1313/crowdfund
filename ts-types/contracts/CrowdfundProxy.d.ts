/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface CrowdfundProxyInterface extends ethers.utils.Interface {
  functions: {
    "WETH()": FunctionFragment;
    "allowance(address,address)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "decimals()": FunctionFragment;
    "fundingCap()": FunctionFragment;
    "logic()": FunctionFragment;
    "mediaAddress()": FunctionFragment;
    "name()": FunctionFragment;
    "nonces(address)": FunctionFragment;
    "operator()": FunctionFragment;
    "operatorPercent()": FunctionFragment;
    "status()": FunctionFragment;
    "symbol()": FunctionFragment;
    "totalSupply()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "WETH", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "allowance",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "fundingCap",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "logic", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "mediaAddress",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(functionFragment: "nonces", values: [string]): string;
  encodeFunctionData(functionFragment: "operator", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "operatorPercent",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "status", values?: undefined): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "WETH", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "fundingCap", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "logic", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "mediaAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "operator", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "operatorPercent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "status", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;

  events: {};
}

export class CrowdfundProxy extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: CrowdfundProxyInterface;

  functions: {
    WETH(overrides?: CallOverrides): Promise<[string]>;

    "WETH()"(overrides?: CallOverrides): Promise<[string]>;

    allowance(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "allowance(address,address)"(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    balanceOf(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    "balanceOf(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    decimals(overrides?: CallOverrides): Promise<[number]>;

    "decimals()"(overrides?: CallOverrides): Promise<[number]>;

    fundingCap(overrides?: CallOverrides): Promise<[BigNumber]>;

    "fundingCap()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    logic(overrides?: CallOverrides): Promise<[string]>;

    "logic()"(overrides?: CallOverrides): Promise<[string]>;

    mediaAddress(overrides?: CallOverrides): Promise<[string]>;

    "mediaAddress()"(overrides?: CallOverrides): Promise<[string]>;

    name(overrides?: CallOverrides): Promise<[string]>;

    "name()"(overrides?: CallOverrides): Promise<[string]>;

    nonces(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    "nonces(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    operator(overrides?: CallOverrides): Promise<[string]>;

    "operator()"(overrides?: CallOverrides): Promise<[string]>;

    operatorPercent(overrides?: CallOverrides): Promise<[BigNumber]>;

    "operatorPercent()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    status(overrides?: CallOverrides): Promise<[number]>;

    "status()"(overrides?: CallOverrides): Promise<[number]>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    "symbol()"(overrides?: CallOverrides): Promise<[string]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    "totalSupply()"(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  WETH(overrides?: CallOverrides): Promise<string>;

  "WETH()"(overrides?: CallOverrides): Promise<string>;

  allowance(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "allowance(address,address)"(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  balanceOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  "balanceOf(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  decimals(overrides?: CallOverrides): Promise<number>;

  "decimals()"(overrides?: CallOverrides): Promise<number>;

  fundingCap(overrides?: CallOverrides): Promise<BigNumber>;

  "fundingCap()"(overrides?: CallOverrides): Promise<BigNumber>;

  logic(overrides?: CallOverrides): Promise<string>;

  "logic()"(overrides?: CallOverrides): Promise<string>;

  mediaAddress(overrides?: CallOverrides): Promise<string>;

  "mediaAddress()"(overrides?: CallOverrides): Promise<string>;

  name(overrides?: CallOverrides): Promise<string>;

  "name()"(overrides?: CallOverrides): Promise<string>;

  nonces(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  "nonces(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  operator(overrides?: CallOverrides): Promise<string>;

  "operator()"(overrides?: CallOverrides): Promise<string>;

  operatorPercent(overrides?: CallOverrides): Promise<BigNumber>;

  "operatorPercent()"(overrides?: CallOverrides): Promise<BigNumber>;

  status(overrides?: CallOverrides): Promise<number>;

  "status()"(overrides?: CallOverrides): Promise<number>;

  symbol(overrides?: CallOverrides): Promise<string>;

  "symbol()"(overrides?: CallOverrides): Promise<string>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  "totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    WETH(overrides?: CallOverrides): Promise<string>;

    "WETH()"(overrides?: CallOverrides): Promise<string>;

    allowance(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "allowance(address,address)"(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balanceOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "balanceOf(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<number>;

    "decimals()"(overrides?: CallOverrides): Promise<number>;

    fundingCap(overrides?: CallOverrides): Promise<BigNumber>;

    "fundingCap()"(overrides?: CallOverrides): Promise<BigNumber>;

    logic(overrides?: CallOverrides): Promise<string>;

    "logic()"(overrides?: CallOverrides): Promise<string>;

    mediaAddress(overrides?: CallOverrides): Promise<string>;

    "mediaAddress()"(overrides?: CallOverrides): Promise<string>;

    name(overrides?: CallOverrides): Promise<string>;

    "name()"(overrides?: CallOverrides): Promise<string>;

    nonces(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "nonces(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    operator(overrides?: CallOverrides): Promise<string>;

    "operator()"(overrides?: CallOverrides): Promise<string>;

    operatorPercent(overrides?: CallOverrides): Promise<BigNumber>;

    "operatorPercent()"(overrides?: CallOverrides): Promise<BigNumber>;

    status(overrides?: CallOverrides): Promise<number>;

    "status()"(overrides?: CallOverrides): Promise<number>;

    symbol(overrides?: CallOverrides): Promise<string>;

    "symbol()"(overrides?: CallOverrides): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    "totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    WETH(overrides?: CallOverrides): Promise<BigNumber>;

    "WETH()"(overrides?: CallOverrides): Promise<BigNumber>;

    allowance(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "allowance(address,address)"(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balanceOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "balanceOf(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    "decimals()"(overrides?: CallOverrides): Promise<BigNumber>;

    fundingCap(overrides?: CallOverrides): Promise<BigNumber>;

    "fundingCap()"(overrides?: CallOverrides): Promise<BigNumber>;

    logic(overrides?: CallOverrides): Promise<BigNumber>;

    "logic()"(overrides?: CallOverrides): Promise<BigNumber>;

    mediaAddress(overrides?: CallOverrides): Promise<BigNumber>;

    "mediaAddress()"(overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    "name()"(overrides?: CallOverrides): Promise<BigNumber>;

    nonces(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "nonces(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    operator(overrides?: CallOverrides): Promise<BigNumber>;

    "operator()"(overrides?: CallOverrides): Promise<BigNumber>;

    operatorPercent(overrides?: CallOverrides): Promise<BigNumber>;

    "operatorPercent()"(overrides?: CallOverrides): Promise<BigNumber>;

    status(overrides?: CallOverrides): Promise<BigNumber>;

    "status()"(overrides?: CallOverrides): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    "symbol()"(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    "totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    WETH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "WETH()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    allowance(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "allowance(address,address)"(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    balanceOf(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "balanceOf(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "decimals()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    fundingCap(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "fundingCap()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    logic(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "logic()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mediaAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "mediaAddress()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "name()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nonces(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "nonces(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    operator(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "operator()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    operatorPercent(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "operatorPercent()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    status(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "status()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "symbol()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "totalSupply()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
