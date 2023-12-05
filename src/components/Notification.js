import React from 'react'
import { CheckCircleFill } from "react-bootstrap-icons";

export default function Notification(props) {
  return (
    <div style={{height: "50px"}}>
      {props.notification && <div className={`alert alert-${props.notification.type} rounded-0 d-flex align-items-center`} role="alert">
        <CheckCircleFill />
        <div className="fw-medium">&nbsp;{props.notification.message}</div>
      </div>}
    </div>
  )
}
