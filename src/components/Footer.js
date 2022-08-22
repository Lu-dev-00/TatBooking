import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
        <footer className="bg-light text-center text-lg-start">
        <div className="text-center p-3 bg-dark text-white">
            © 2020 Copyright: 
            <a className="text-white" href="https://mdbootstrap.com/">Tatoo Booking</a>
        </div>
        </footer>
    )
  }
}
