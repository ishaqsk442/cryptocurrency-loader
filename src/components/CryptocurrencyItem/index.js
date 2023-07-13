// Write your JS code here

import './index.css'

const CryptocurrencyItem = props => {
  const {currencyItem} = props

  const {id, usdValue, euroValue, currencyName, currencyLogo} = currencyItem

  console.log(currencyName)

  return (
    <li key={id} className="each-list-header-list">
      <div className="logo-coin">
        <img className="logo" src={currencyLogo} alt={currencyName} />
        <p className="coin-name">{currencyName}</p>
      </div>

      <div className="usd-euro-coin">
        <p className="usd-rate">{usdValue}</p>
        <p className="euro-rate">{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
