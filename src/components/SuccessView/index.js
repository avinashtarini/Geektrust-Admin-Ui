import {Component} from 'react'

class SuccessView extends Component {
  render() {
    const {allUserList} = this.props

    console.log(allUserList)
    return (
      <div className="list-container">
        <input
          type="search"
          placeholder="enter or name or role"
          className="search-style"
        />
        <table>
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>Name</th>
              <th>Email </th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {allUserList.map(eachList => (
              <tr key={eachList.id}>
                <td>
                  <input type="checkbox" value={eachList.id} />
                </td>
                <td>{eachList.name}</td>
                <td>{eachList.email}</td>
                <td>{eachList.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default SuccessView
