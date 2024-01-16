import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'shadow-list-item',
  styleUrl: 'list-item.css',
  shadow: true,
})
export class ShadowListItem {
  /** Defines the value of the component to be used in form */
  @Prop({ reflect: true }) value?: string | number;

  /** Makes the list item selected only if it is leaf node */
  @Prop({ reflect: true }) selected?: boolean = false;

  /** Makes the list item expanded if it has children list items */
  @Prop({ reflect: true, mutable: true }) expanded?: boolean = false;

  /** Makes the list item multiple */
  @Prop({ reflect: true }) multiple?: boolean = false;

  private readonly internalListMarkup = () => (
    <div class="list-wrapper">
      <slot name="prefix" />
      <slot />
      <slot name="suffix" />
    </div>
  );

  render() {
    if (this.value) {
      return <option value={this.value}>{this.internalListMarkup()}</option>;
    } else {
      return <li>{this.internalListMarkup()}</li>;
    }
  }
}
