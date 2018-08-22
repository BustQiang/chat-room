import React from 'react'
import '@/components/cssModules/icons.scss'

class Icon extends React.Component {
  constructor () {
    super()
    this.state = {
      href: this.props.href
    }
  }
  render () {
    return (
      <svg className="icon" aria-hidden="true">
		    <use xlinkHref={``}></use>
	    </svg>	
    )
  }
}
 export {Icon}