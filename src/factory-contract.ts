import {
  ImplementationAdded as ImplementationAddedEvent,
  ImplementationApproved as ImplementationApprovedEvent,
  ProxyDeployed as ProxyDeployedEvent,
} from "../generated/FactoryContract/FactoryContract";
import {ImplementationAdded, ProxyDeployed} from "../generated/schema";

export function handleImplementationAdded(event: ImplementationAddedEvent): void {
  let entity = new ImplementationAdded(event.transaction.hash.toHexString() + "-" + event.logIndex.toString());
  entity.implementation = event.params.implementation;
  entity.contractType = event.params.contractType;
  entity.version = event.params.version;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleImplementationApproved(event: ImplementationApprovedEvent): void {}

export function handleProxyDeployed(event: ProxyDeployedEvent): void {
  let entity = new ProxyDeployed(event.transaction.hash.toHexString() + "-" + event.logIndex.toString());
  entity.implementation = event.params.implementation;
  entity.proxy = event.params.proxy;
  entity.deployer = event.params.deployer;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
