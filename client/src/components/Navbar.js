import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav className="flex sm:justify-center space-x-4">
        {[
          ['Home', '/dashboard'],
          ['Team', '/team'],
          ['Projects', '/projects'],
          ['Reports', '/reports']
        ].map(([title, url]) => (
          <a
            key={title}
            href={url}
            className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">
            {title}
          </a>
        ))}
      </nav>
    );
  }
}
export default Navbar;
// <span id="account">{this.props.account}</span>
// "eslint-config-airbnb": "^19.0.4",
// "eslint-config-prettier": "^8.8.0",
// "eslint-plugin-import": "^2.27.5",
// "eslint-plugin-jsx-a11y": "^6.7.1",
// "eslint-plugin-prettier": "^5.0.0",
// "eslint-plugin-react": "^7.32.2",
// "eslint-plugin-react-hooks": "^4.6.0",