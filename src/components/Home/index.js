import {Component} from 'react'
import Loader from 'react-loader-spinner'
import FailureView from '../FailureView'
import SuccessView from '../SuccessView'
import './index.css'

const pageActions = {
  Initial: 'initial',
  loading: 'load',
  success: 'success',
  failure: 'fail',
}

class Home extends Component {
  state = {
    usersList: [],
    pageStatus: pageActions.Initial,
  }

  componentDidMount() {
    this.getUsersDetails()
  }

  getUsersDetails = async () => {
    this.setState({pageStatus: pageActions.loading})
    const m = 10
    const o = 0
    const fetchUsersList = await fetch(
      `https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json?limit=${m}&offset=${o}`,
    )
    if (fetchUsersList.ok === true) {
      const paredUsersList = await fetchUsersList.json()
      console.log(paredUsersList.length)
      this.setState({
        usersList: paredUsersList,
        pageStatus: pageActions.success,
      })
    } else {
      this.setState({pageStatus: pageActions.failure})
    }
  }

  renderLoadingView = () => (
    <div className="loader-container">
      <Loader type="TailSpin" color="#00BFFF" height={60} width={60} />
    </div>
  )

  retry = () => {
    console.log('retry clicked')
    this.getUsersDetails()
  }

  renderSuccessView = () => {
    const {usersList} = this.state
    return <SuccessView allUserList={usersList} />
  }

  checkPageStatus = () => {
    const {pageStatus} = this.state
    switch (pageStatus) {
      case pageActions.success:
        return this.renderSuccessView()
      case pageActions.failure:
        return <FailureView retryAgain={this.retry} />
      case pageActions.loading:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return <div className="background-container">{this.checkPageStatus()}</div>
  }
}

export default Home
