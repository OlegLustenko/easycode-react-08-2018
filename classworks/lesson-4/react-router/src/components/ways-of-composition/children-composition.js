import React, {Component} from 'react';

import './page-content.css';

class PageContent extends Component {
  render() {
    /*
    *
    * Презентационный компонент
    * */
    return (
      <div className="page-content">
        {this.props.children}
      </div>
    );
  }
}

export default PageContent;