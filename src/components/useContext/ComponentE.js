import React, { useContext } from 'react'
import { ChannelContext, UserContext } from '../../App';

function ComponentE() {
    // const user = useContext(UserContext);
    // const channel = useContext(ChannelContext);
  return (
    <div>
        <h2>
            ------------------
            useContext Hook
            ------------------
        </h2>
        <b>
            {/* {user} - {channel} */}
        </b>
    </div>
  )
}

export default ComponentE
