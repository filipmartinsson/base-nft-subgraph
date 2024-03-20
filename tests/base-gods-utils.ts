import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  AllowedSeaDropUpdated,
  Approval,
  ApprovalForAll,
  BatchMetadataUpdate,
  ConsecutiveTransfer,
  ContractURIUpdated,
  MaxSupplyUpdated,
  OwnershipTransferred,
  PotentialOwnerUpdated,
  ProvenanceHashUpdated,
  RoyaltyInfoUpdated,
  SeaDropTokenDeployed,
  Transfer
} from "../generated/BaseGods/BaseGods"

export function createAllowedSeaDropUpdatedEvent(
  allowedSeaDrop: Array<Address>
): AllowedSeaDropUpdated {
  let allowedSeaDropUpdatedEvent = changetype<AllowedSeaDropUpdated>(
    newMockEvent()
  )

  allowedSeaDropUpdatedEvent.parameters = new Array()

  allowedSeaDropUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "allowedSeaDrop",
      ethereum.Value.fromAddressArray(allowedSeaDrop)
    )
  )

  return allowedSeaDropUpdatedEvent
}

export function createApprovalEvent(
  owner: Address,
  approved: Address,
  tokenId: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromAddress(approved))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return approvalEvent
}

export function createApprovalForAllEvent(
  owner: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createBatchMetadataUpdateEvent(
  _fromTokenId: BigInt,
  _toTokenId: BigInt
): BatchMetadataUpdate {
  let batchMetadataUpdateEvent = changetype<BatchMetadataUpdate>(newMockEvent())

  batchMetadataUpdateEvent.parameters = new Array()

  batchMetadataUpdateEvent.parameters.push(
    new ethereum.EventParam(
      "_fromTokenId",
      ethereum.Value.fromUnsignedBigInt(_fromTokenId)
    )
  )
  batchMetadataUpdateEvent.parameters.push(
    new ethereum.EventParam(
      "_toTokenId",
      ethereum.Value.fromUnsignedBigInt(_toTokenId)
    )
  )

  return batchMetadataUpdateEvent
}

export function createConsecutiveTransferEvent(
  fromTokenId: BigInt,
  toTokenId: BigInt,
  from: Address,
  to: Address
): ConsecutiveTransfer {
  let consecutiveTransferEvent = changetype<ConsecutiveTransfer>(newMockEvent())

  consecutiveTransferEvent.parameters = new Array()

  consecutiveTransferEvent.parameters.push(
    new ethereum.EventParam(
      "fromTokenId",
      ethereum.Value.fromUnsignedBigInt(fromTokenId)
    )
  )
  consecutiveTransferEvent.parameters.push(
    new ethereum.EventParam(
      "toTokenId",
      ethereum.Value.fromUnsignedBigInt(toTokenId)
    )
  )
  consecutiveTransferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  consecutiveTransferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )

  return consecutiveTransferEvent
}

export function createContractURIUpdatedEvent(
  newContractURI: string
): ContractURIUpdated {
  let contractUriUpdatedEvent = changetype<ContractURIUpdated>(newMockEvent())

  contractUriUpdatedEvent.parameters = new Array()

  contractUriUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newContractURI",
      ethereum.Value.fromString(newContractURI)
    )
  )

  return contractUriUpdatedEvent
}

export function createMaxSupplyUpdatedEvent(
  newMaxSupply: BigInt
): MaxSupplyUpdated {
  let maxSupplyUpdatedEvent = changetype<MaxSupplyUpdated>(newMockEvent())

  maxSupplyUpdatedEvent.parameters = new Array()

  maxSupplyUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newMaxSupply",
      ethereum.Value.fromUnsignedBigInt(newMaxSupply)
    )
  )

  return maxSupplyUpdatedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createPotentialOwnerUpdatedEvent(
  newPotentialAdministrator: Address
): PotentialOwnerUpdated {
  let potentialOwnerUpdatedEvent = changetype<PotentialOwnerUpdated>(
    newMockEvent()
  )

  potentialOwnerUpdatedEvent.parameters = new Array()

  potentialOwnerUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newPotentialAdministrator",
      ethereum.Value.fromAddress(newPotentialAdministrator)
    )
  )

  return potentialOwnerUpdatedEvent
}

export function createProvenanceHashUpdatedEvent(
  previousHash: Bytes,
  newHash: Bytes
): ProvenanceHashUpdated {
  let provenanceHashUpdatedEvent = changetype<ProvenanceHashUpdated>(
    newMockEvent()
  )

  provenanceHashUpdatedEvent.parameters = new Array()

  provenanceHashUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "previousHash",
      ethereum.Value.fromFixedBytes(previousHash)
    )
  )
  provenanceHashUpdatedEvent.parameters.push(
    new ethereum.EventParam("newHash", ethereum.Value.fromFixedBytes(newHash))
  )

  return provenanceHashUpdatedEvent
}

export function createRoyaltyInfoUpdatedEvent(
  receiver: Address,
  bps: BigInt
): RoyaltyInfoUpdated {
  let royaltyInfoUpdatedEvent = changetype<RoyaltyInfoUpdated>(newMockEvent())

  royaltyInfoUpdatedEvent.parameters = new Array()

  royaltyInfoUpdatedEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )
  royaltyInfoUpdatedEvent.parameters.push(
    new ethereum.EventParam("bps", ethereum.Value.fromUnsignedBigInt(bps))
  )

  return royaltyInfoUpdatedEvent
}

export function createSeaDropTokenDeployedEvent(): SeaDropTokenDeployed {
  let seaDropTokenDeployedEvent = changetype<SeaDropTokenDeployed>(
    newMockEvent()
  )

  seaDropTokenDeployedEvent.parameters = new Array()

  return seaDropTokenDeployedEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  tokenId: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return transferEvent
}
