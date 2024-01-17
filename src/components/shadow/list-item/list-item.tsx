import { Component, h } from '@stencil/core';

@Component({
  tag: 'shadow-list-item',
  styleUrl: 'list-item.css',
  shadow: true,
})
export class ShadowListItem {
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
