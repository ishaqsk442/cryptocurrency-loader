// Write your JS code here

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

// import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  state = {isLoading: true, listData: []}

  componentDidMount() {
    this.getList()
  }

  //   checkTime = () => {
  //     const {time, isLoading} = this.state

  //     if (time !== 1) {
  //       this.setState(prevState => ({
  //         time: prevState.time + 1,
  //       }))
  //     } else {
  //       clearInterval(this.timerId)
  //       this.setState({isLoading: false})
  //       //   this.getList()
  //     }
  //     console.log(time)
  //     console.log(isLoading)
  //   }

  //   showLoader = () => {
  //     this.timerId = setInterval(this.checkTime(), 1000)
  //   }

  // 333333333333333333333333333333333333333333
  //   state = {listData: []}

  //   componentDidMount() {
  //     this.getList()
  //   }

  getList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )

    const data = await response.json()

    console.log(data)

    const updatedData = data.map(each => ({
      currencyLogo: each.currency_logo,
      currencyName: each.currency_name,
      euroValue: each.euro_value,
      id: each.id,
      usdValue: each.usd_value,
    }))

    this.setState({listData: updatedData, isLoading: false})
  }

  render() {
    const {listData, isLoading} = this.state
    console.log(listData)
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className="main-2">
            <h1 className="heading">Cryptocurrency Tracker</h1>
            <img
              className="img"
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
            />

            <ul className="list-cont">
              <li className="each-list-header">
                <div className="inner-head">
                  <di>
                    <h1 className="coin-type">Coin Type</h1>
                  </di>

                  <div className="usd-euro">
                    <p className="usd">USD</p>
                    <p className="euro">EURO</p>
                  </div>
                </div>
              </li>

              {listData.map(each => (
                <CryptocurrencyItem currencyItem={each} key={each.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default CryptocurrenciesList
