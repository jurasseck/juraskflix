import React, { Component } from 'react'

const ButtonLink = class ButtonLink extends Component {
    render() {
        return (
            <a className={this.props.className} href={this.props.href}>
                {this.props.children}
            </a>
        )
    }
}

export default ButtonLink