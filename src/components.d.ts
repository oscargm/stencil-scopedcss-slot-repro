/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ScopedListItem {
    }
    interface ShadowListItem {
    }
}
declare global {
    interface HTMLScopedListItemElement extends Components.ScopedListItem, HTMLStencilElement {
    }
    var HTMLScopedListItemElement: {
        prototype: HTMLScopedListItemElement;
        new (): HTMLScopedListItemElement;
    };
    interface HTMLShadowListItemElement extends Components.ShadowListItem, HTMLStencilElement {
    }
    var HTMLShadowListItemElement: {
        prototype: HTMLShadowListItemElement;
        new (): HTMLShadowListItemElement;
    };
    interface HTMLElementTagNameMap {
        "scoped-list-item": HTMLScopedListItemElement;
        "shadow-list-item": HTMLShadowListItemElement;
    }
}
declare namespace LocalJSX {
    interface ScopedListItem {
    }
    interface ShadowListItem {
    }
    interface IntrinsicElements {
        "scoped-list-item": ScopedListItem;
        "shadow-list-item": ShadowListItem;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "scoped-list-item": LocalJSX.ScopedListItem & JSXBase.HTMLAttributes<HTMLScopedListItemElement>;
            "shadow-list-item": LocalJSX.ShadowListItem & JSXBase.HTMLAttributes<HTMLShadowListItemElement>;
        }
    }
}
