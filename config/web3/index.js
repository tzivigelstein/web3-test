import web3 from 'web3'
import { InjectedConnector } from '@web3-react/injected-connector'

const BINANCE_NETWORK = 56
const ETHEREUM_NETWORK = 1

export const connector = new InjectedConnector({
  supportedChainIds: [ETHEREUM_NETWORK, BINANCE_NETWORK]
})

export const getLibrary = provider => {
  const library = new web3(provider)
  return library
}
