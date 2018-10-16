import { Component } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
})
export class AppHome {

  render() {
    return (
      <div>
        <h3>
          Welcome to the Stencil App Starter.
        </h3>
        <p>
          You can use this starter to build entire apps all with
          web components using Stencil!
          Check out our docs on <a href='https://stenciljs.com'>stenciljs.com</a> to get started.
        </p>

        <stencil-route-link url='/profile/stencil'>
          <srds-button action="Call to Action"/>
        </stencil-route-link>
      </div>
    );
  }
}
