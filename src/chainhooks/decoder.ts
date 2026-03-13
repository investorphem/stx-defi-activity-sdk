export function decodeClarityEvent(event: any) {

  if (event.type === "fungible_token_transfer") {

    return {
      asset: event.asset_identifier,
      sender: event.sender,
      recipient: event.recipient,
      amount: event.amount
    }

  }

  return event

}