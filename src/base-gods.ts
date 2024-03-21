import {
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  BatchMetadataUpdate as BatchMetadataUpdateEvent,
  ConsecutiveTransfer as ConsecutiveTransferEvent,
  ContractURIUpdated as ContractURIUpdatedEvent,
  MaxSupplyUpdated as MaxSupplyUpdatedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  PotentialOwnerUpdated as PotentialOwnerUpdatedEvent,
  ProvenanceHashUpdated as ProvenanceHashUpdatedEvent,
  RoyaltyInfoUpdated as RoyaltyInfoUpdatedEvent,
  SeaDropTokenDeployed as SeaDropTokenDeployedEvent,
  Transfer as TransferEvent
} from "../generated/BaseGods/BaseGods"
import {
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
  Transfer,
  Token,
  TokenMetadata,
  User
} from "../generated/schema"

import { TokenMetadata as TokenMetadataTemplate } from "../generated/templates";
import { json, Bytes, dataSource } from "@graphprotocol/graph-ts";


const ipfsHash = "bafybeicjp6ph5coohgmwjtehxrbptmeklxqhhtqobz447ma3qcvmyy6lwi"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.approved = event.params.approved
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.operator = event.params.operator
  entity.approved = event.params.approved

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBatchMetadataUpdate(
  event: BatchMetadataUpdateEvent
): void {
  let entity = new BatchMetadataUpdate(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._fromTokenId = event.params._fromTokenId
  entity._toTokenId = event.params._toTokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleConsecutiveTransfer(
  event: ConsecutiveTransferEvent
): void {
  let entity = new ConsecutiveTransfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.fromTokenId = event.params.fromTokenId
  entity.toTokenId = event.params.toTokenId
  entity.from = event.params.from
  entity.to = event.params.to

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleContractURIUpdated(event: ContractURIUpdatedEvent): void {
  let entity = new ContractURIUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newContractURI = event.params.newContractURI

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMaxSupplyUpdated(event: MaxSupplyUpdatedEvent): void {
  let entity = new MaxSupplyUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newMaxSupply = event.params.newMaxSupply

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePotentialOwnerUpdated(
  event: PotentialOwnerUpdatedEvent
): void {
  let entity = new PotentialOwnerUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newPotentialAdministrator = event.params.newPotentialAdministrator

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleProvenanceHashUpdated(
  event: ProvenanceHashUpdatedEvent
): void {
  let entity = new ProvenanceHashUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousHash = event.params.previousHash
  entity.newHash = event.params.newHash

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoyaltyInfoUpdated(event: RoyaltyInfoUpdatedEvent): void {
  let entity = new RoyaltyInfoUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.receiver = event.params.receiver
  entity.bps = event.params.bps

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSeaDropTokenDeployed(
  event: SeaDropTokenDeployedEvent
): void {
  let entity = new SeaDropTokenDeployed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()

  let token = Token.load(event.params.tokenId.toString())
  if (!token) {
    token = new Token(event.params.tokenId.toString())
    token.tokenID = event.params.tokenId
    
    token.tokenURI = "/" + event.params.tokenId.toString();
    const ipfsHashUri = ipfsHash + token.tokenURI;
    token.ipfsHashURI = ipfsHashUri;
   
    TokenMetadataTemplate.create(ipfsHashUri)
  }
  token.updatedAtTimestamp = event.block.timestamp
  token.owner = event.params.to.toHexString()
  token.save()

  let user = User.load(event.params.to.toHexString());
  if (!user) {
      user = new User(event.params.to.toHexString());
      user.save();
  }
}
export function handleMetadata(content: Bytes): void {
  let tokenMetadata = new TokenMetadata(dataSource.stringParam());
  // Create a new TokenMetadata entity and pass in the dataSource as its ID. This is the ipfsHashUri that we created in the handleTransfer function above.

  const value = json.fromBytes(content).toObject();
  // Create a value variable that will be used to store the json object that is passed in as the content parameter.
  if (value) {
      const image = value.get("image");
      const name = value.get("name");
      // Assemblyscript needs to have nullchecks. If the value exists, then we can proceed with the creating an image, name, and attributes variable gathered from the json object.

      if (name && image) {
          tokenMetadata.metadata = content.toString()
          tokenMetadata.name = name.toString();
          tokenMetadata.image = image.toString();
          tokenMetadata.save();
      }
  }
}