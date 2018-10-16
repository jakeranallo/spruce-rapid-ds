import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'srds-button',
  styleUrl: 'button.scss',
  shadow: true
})
export class Button {

  // Indicate that name should be a public property on the component
  @Prop() action: string;

  render() {
    return (
      <button>
        {this.action}
      </button>
    );
  }
}