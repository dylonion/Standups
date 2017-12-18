import React from 'react'
import Chart from './Chart'
import Standup from './Standup'
class Dashboard extends React.Component {
  constructor() {
    super()
    this.state = {
      standupHistory: {},
      apiDataLoaded: false
    }
  }

  componentDidMount() {
    fetch(`/api/standup/${this.props.user.id}`, {
      credentials: 'include'
      })
    .then(res => res.json())
    .then(res => {
      this.setState({
        standupHistory: res,
        apiDataLoaded: true
      })
    }).catch(err => console.log(err))
  }

  render () {
    return (
      <div className="dashboard">
        <Standup />
      </div>
    )
  }
}

export default Dashboard
