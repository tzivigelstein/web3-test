import { useCallback, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import { useWeb3React } from '@web3-react/core'
import { connector } from '../config/web3'

export default function Home() {
  const { active, activate, deactivate, account, error, chainId } = useWeb3React()

  useEffect(() => {
    if (localStorage.getItem('previouslyConnected') === 'true') {
      connect()
    }
  }, [])

  const connect = useCallback(() => {
    activate(connector)

    localStorage.setItem('previouslyConnected', true)
  }, [activate])

  const disconnect = () => {
    deactivate()

    localStorage.removeItem('previouslyConnected')
  }

  return (
    <div className={styles.container}>
      {active ? (
        <button onClick={disconnect}>Disconnect</button>
      ) : (
        <button onClick={connect}>Login in with metamask</button>
      )}

      {error && <p>Something went wrong</p>}

      <>
        {active && (
          <div>
            <p>You are connected to {chainId}</p>
            <p>{account}</p>
          </div>
        )}
      </>
    </div>
  )
}
