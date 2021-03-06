/**
 * @license
 *
 * Copyright IBM Corp. 2019
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import * as knobs from '@storybook/addon-knobs';
// Below path will be there when an application installs `carbon-custom-elements` package.
// In our dev env, we auto-generate the file and re-map below path to to point to the genrated file.
// @ts-ignore
import BXTextarea from 'carbon-custom-elements/es/components-react/textarea/textarea';
// @ts-ignore
import BXFormItem from 'carbon-custom-elements/es/components-react/form/form-item';
import createProps from './stories/helpers';

storiesOf('Textarea', module)
  .addDecorator(knobs.withKnobs)
  .add('Default', () => {
    const { disabled, value, placeholder, invalid, onInput } = createProps(knobs);
    return <BXTextarea disabled={disabled} invalid={invalid} value={value} placeholder={placeholder} onInput={onInput} />;
  })
  .add('Form item', () => {
    const { disabled, value, placeholder, invalid, onInput } = createProps(knobs);
    return (
      <BXFormItem>
        <BXTextarea value={value} placeholder={placeholder} onInput={onInput} disabled={disabled} invalid={invalid}>
          <span slot="label-text">Label text</span>
          <span slot="helper-text">Optional helper text</span>
          <span slot="validity-message">Something isn't right</span>
        </BXTextarea>
      </BXFormItem>
    );
  })
  .add('Without form item wrapper', () => {
    const { disabled, value, placeholder, invalid, onInput } = createProps(knobs);
    return (
      <BXTextarea value={value} placeholder={placeholder} onInput={onInput} disabled={disabled} invalid={invalid}>
        <span slot="label-text">Label text</span>
        <span slot="helper-text">Optional helper text</span>
        <span slot="validity-message">Something isn't right</span>
      </BXTextarea>
    );
  });
