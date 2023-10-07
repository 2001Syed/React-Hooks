import React from 'react'
import { ChannelContext, UserContext } from '../../App'

function ComponentF() {
  return (
    <div>
      <UserContext.Consumer>
        {
            user => {
                return (
                    <ChannelContext.Consumer>
                        {
                            channel => {
                                return <div>User Context value: <b>{user}</b>, Channel Context value: <b>{channel}</b></div>
                            }
                        }
                    </ChannelContext.Consumer>
                )
            }
        }
      </UserContext.Consumer>
    </div>
  )
}

export default ComponentF
