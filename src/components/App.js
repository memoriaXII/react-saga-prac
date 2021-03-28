import { useEffect } from "react"
import { connect } from "react-redux"
import { getUsersRequest } from "../actions/users"
import UserList from "./UserList"

function App(props) {
  useEffect(() => {
    props.getUsersRequest()
  }, [])
  return (
    <div style={{ margin: "0 auto", padding: "20px", maxWidth: "600px" }}>
      <h2>Users</h2>

      {!!props.users.items && !!props.users.items.length && (
        <UserList users={props.users.items} />
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  }
}

export default connect(mapStateToProps, {
  getUsersRequest,
})(App)

// import React, { Component } from "react"
// import { connect } from "react-redux"
// import { getUsersRequest } from "../actions/users"

// class App extends Component {
//   constructor(props) {
//     super(props)

//     this.props.getUsersRequest()
//   }

//   render() {
//     return (
//       <div
//         style={{ margin: "0 auto", padding: "20px", maxWidth: "600px" }}
//       ></div>
//     )
//   }
// }

// export default connect(({ users }) => ({ users }), {
//   getUsersRequest,
// })(App)
