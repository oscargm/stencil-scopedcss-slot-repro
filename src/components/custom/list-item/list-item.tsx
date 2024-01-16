import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'custom-list-item',
  styleUrl: 'list-item.css',
  shadow: false,
  scoped: false,
})
export class CustomListItem {
  /** Defines the value of the component to be used in form */
  @Prop({ reflect: true }) value?: string | number;

  /** Makes the list item selected only if it is leaf node */
  @Prop({ reflect: true }) selected?: boolean = false;

  /** Makes the list item expanded if it has children list items */
  @Prop({ reflect: true, mutable: true }) expanded?: boolean = false;

  /** Makes the list item multiple */
  @Prop({ reflect: true }) multiple?: boolean = false;

  private readonly internalListMarkup = () => (
    <div part="list-item" class="list-item--wrapper">
      <div class="list-item--prefix-slot">
        <slot name="prefix" />
      </div>
      <div class="list-item--default-slot">
        <slot />
      </div>
      <div class="list-item--suffix-slot">
        <slot name="suffix" />
      </div>
    </div>
  );

  render() {
    <Host class={'custom-list-item'}>{this.value ? <option value={this.value}>{this.internalListMarkup()}</option> : <li>{this.internalListMarkup()}</li>}</Host>;
  }
}
