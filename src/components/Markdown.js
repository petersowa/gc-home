import React from 'react';
import ReactMarkdown from 'react-markdown';

class MarkdownContent extends React.Component {
  state = {
    mdContent: '',
  };

  componentDidMount() {
    fetch(this.props.inputMarkdown)
      .then(res => res.text())
      .then(mdContent => this.setState({ mdContent }));
  }

  render = () => (
    <div>
      <ReactMarkdown
        source={this.state.mdContent}
        className="browser-default"
      />
    </div>
  );
}

export { MarkdownContent };
