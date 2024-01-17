import { Component, h } from '@stencil/core';

@Component({
  tag: 'scoped-list-item',
  styleUrl: 'list-item.css',
  scoped: true,
  shadow: false,
})
export class ScopedListItem {
  render() {
    return (
      <li>
        <div class="list-wrapper">
          <slot name="prefix" />
          <slot />
          <slot name="suffix" />
        </div>
      </li>
    );
  }
}
