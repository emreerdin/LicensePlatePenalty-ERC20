import { useAccount, useContractRead,useContractWrite, usePrepareContractWrite } from 'wagmi';

import contractAddress from "../contract/ContractAddress.json";
import contractABI from "../contract/ContractABI.json";

export function useAccountAddress() {
  const { address } = useAccount();
  return address;
}

export function useAccountPlates() {
  const address = useAccountAddress();
  const accountPlates = useContractRead({
    address: contractAddress.address,
    abi: contractABI.abi,
    functionName: "getAllPlates",
    args: [address]
  });
  return accountPlates;
}

export function useGetAllPenalties(plate){
  const address = useAccountAddress();
  const penalties = useContractRead({
    address: contractAddress.address,
    abi: contractABI.abi,
    functionName:"getPlatePenalties",
    args: [plate]
  });
  return penalties;
}