/**
 * @license
 *
 * Copyright IBM Corp. 2019
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import settings from 'carbon-components/es/globals/js/settings';
import { html, property, customElement } from 'lit-element';
import BXInlineNotification, { NOTIFICATION_TYPE } from './inline-notification';
import styles from './toast-notification.scss';

const { prefix } = settings;

/**
 * Toast notification.
 */
@customElement(`${prefix}-toast-notification`)
class BXToastNotification extends BXInlineNotification {
  protected _type = NOTIFICATION_TYPE.TOAST;

  protected _renderText() {
    const { caption, subtitle, title, _type: type } = this;
    return html`
      <div class="${prefix}--${type}-notification__details">
        <h3 class="${prefix}--${type}-notification__title">${title}<slot name="title"></slot></h3>
        <div class="${prefix}--${type}-notification__subtitle">${subtitle}<slot name="subtitle"></slot></div>
        <div class="${prefix}--${type}-notification__caption">${caption}<slot name="caption"></slot></div>
        <slot></slot>
      </div>
    `;
  }

  /**
   * The caption. Corresponds to the attribute with the same name.
   */
  @property()
  caption = '';

  render() {
    const { _type: type } = this;
    return html`
      ${this._renderIcon()}
      <div class="${prefix}--${type}-notification__details">
        ${this._renderText()}
      </div>
      ${this._renderButton()}
    `;
  }

  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}

export default BXToastNotification;
