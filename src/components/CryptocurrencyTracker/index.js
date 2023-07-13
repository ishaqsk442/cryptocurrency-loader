// Write your code here
import {Component} from 'react'

// import Loader from 'react-loader-spinner'

// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

import CryptocurrenciesList from '../CryptocurrenciesList'

class CryptocurrencyTracker extends Component {
  //   state = {time: 0, isLoading: true}

  //   componentDidMount() {
  //     this.showLoader()
  //   }

  //   checkTime = () => {
  //     const {time, isLoading} = this.state

  //     if (time !== 2) {
  //       this.setState(prevState => ({
  //         time: prevState.time + 1,
  //       }))
  //     } else {
  //       clearInterval(this.timerId)
  //       this.setState({isLoading: false})
  //     }
  //     console.log(time)
  //     console.log(isLoading)
  //   }

  //   showLoader = () => {
  //     this.timerId = setInterval(this.checkTime(), 1000)
  //   }

  //   render() {
  //     const {isloading} = this.state
  //     return (
  //       <div>
  //         {isloading ? (
  //           <Loader type="Rings" color="#ffffff" height={80} width={80} />
  //         ) : (
  //           <div className="main">
  //             <CryptocurrenciesList />
  //           </div>
  //         )}
  //       </div>
  //     )
  //   }

  render() {
    return (
      <div className="main">
        <CryptocurrenciesList />
      </div>
    )
  }
}
export default CryptocurrencyTracker
