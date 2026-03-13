export function parseChainhookEvent(event: any) {

  return {
    txid: event.txid,
    sender: event.sender,
    contract: event.contract_identifier,
    function: event.function_name,
    block: event.block_height
  }

}