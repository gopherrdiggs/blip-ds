/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  ButtonSize,
  ButtonVariant,
} from './components/button/button';
import {
  IconSize,
  IconTheme,
} from './components/icon/icon';
import {
  InputAutocapitalize,
  InputAutoComplete,
  InputType,
} from './components/input/inputs';
import {
  Bold,
  FontLineHeight,
  FontSize,
  Tag,
} from './components/typo/typo';

export namespace Components {
  interface BdsButton {
    /**
    * The arrow button
    */
    'arrow'?: boolean;
    /**
    * If true, the base button will be disabled.
    */
    'disabled'?: boolean;
    /**
    * The icon name
    */
    'icon'?: string;
    /**
    * Size. Entered as one of the size. Can be one of:  'tall', 'standard', 'short';
    */
    'size'?: ButtonSize;
    /**
    * Variant. Entered as one of the variant. Can be one of:  'primary', 'second', 'ghost', 'dashed';
    */
    'variant'?: ButtonVariant;
  }
  interface BdsCardColor {
    /**
    * Specifies HEX color, use Figma docs in Blip DS.
    */
    'hex'?: string;
    /**
    * Specifies name color, use Figma docs in Blip DS.
    */
    'name': string;
    /**
    * Specifies variabel sass color, _variables.scss.
    */
    'variable': string;
  }
  interface BdsCheckbox {
    /**
    * If `true`, the checkbox is selected.
    */
    'checked': boolean;
    /**
    * If `true`, the user cannot interact with the checkbox.
    */
    'disabled': boolean;
    'getInputElement': () => Promise<HTMLInputElement>;
    'getValue': () => Promise<boolean>;
    'label': string;
    /**
    * The name of the control, which is submitted with the form data.
    */
    'name': string;
    'refer': string;
  }
  interface BdsIcon {
    /**
    * Specifies the label to use for accessibility. Defaults to the icon name.
    */
    'ariaLabel'?: string;
    /**
    * Specifies the color to use.Specifies a color to use. The default is svg.
    */
    'color'?: string;
    /**
    * Specifies which icon to use from the built-in set of icons.
    */
    'name': string;
    /**
    * Icon size. Entered as one of the icon size design tokens. Can be one of:  "xxx-small", "xx-small", "x-small", "small", "medium", "large", "x-large", "xx-large", "xxx-large".
    */
    'size'?: IconSize;
    /**
    * Specifies the theme to use outline or solid icons. Defaults to outline.
    */
    'theme': IconTheme;
  }
  interface BdsInput {
    /**
    * Capitalizes every word's second character.
    */
    'autoCapitalize'?: InputAutocapitalize;
    /**
    * Hint for form autofill feature
    */
    'autoComplete'?: InputAutoComplete;
    /**
    * Add state danger on input, use for use feedback.
    */
    'danger'?: boolean;
    /**
    * Disabled input.
    */
    'disabled'?: boolean;
    /**
    * Indicated to pass an feeback to user.
    */
    'errorMessage'?: string;
    /**
    * Returns the native `<input>` element used under the hood.
    */
    'getInputElement': () => Promise<HTMLInputElement>;
    /**
    * Indicated to pass a help the user in complex filling.
    */
    'helperMessage'?: string;
    /**
    * used for add icon in input left. Uses the bds-icon component.
    */
    'icon'?: string;
    /**
    * Input Id
    */
    'inputId': string;
    /**
    * Input Name
    */
    'inputName'?: string;
    /**
    * label in input, with he the input size increases.
    */
    'label'?: string;
    /**
    * A tip for the user who can enter no controls.
    */
    'placeholder'?: string;
    /**
    * Sets focus on the specified `ion-input`. Use this method instead of the global `input.focus()`.
    */
    'setFocus': () => Promise<void>;
    /**
    * Input type. Can be one of: "text" or "password".
    */
    'type'?: InputType;
    /**
    * The value of the input.
    */
    'value'?: string | null;
  }
  interface BdsRadio {
    /**
    * If `true`, the checkbox is selected.
    */
    'checked': boolean;
    /**
    * If `true`, the user cannot interact with the checkbox.
    */
    'disabled': boolean;
    'getInputElement': () => Promise<HTMLInputElement>;
    'getValue': () => Promise<boolean>;
    'label': string;
    /**
    * The name of the control, which is submitted with the form data.
    */
    'name': string;
    'refer': string;
    'value': string;
  }
  interface BdsTypo {
    /**
    * Bold. Entered as one of the bold. Can be one of:  'regular', 'semi-bold', 'bold', 'extra-bold';
    */
    'bold'?: Bold;
    /**
    * Added font style italic
    */
    'italic'?: boolean;
    /**
    * Line Height. Entered as one of the line hieght. Can be one of:  'none', 'small', 'simple', 'plus', 'double'
    */
    'lineHeight'?: FontLineHeight;
    /**
    * Added style no wrap
    */
    'noWrap'?: boolean;
    /**
    * Tranform text in paragraph
    */
    'paragraph'?: boolean;
    /**
    * Define element tag, must be used for acessibilty
    */
    'tag'?: Tag;
    /**
    * Variant. Entered as one of the font size variant. Can be one of:  'fs-10' ,'fs-12' ,'fs-14' ,'fs-16' ,'fs-20' ,'fs-24' ,'fs-32' ,'fs-40';
    */
    'variant'?: FontSize;
  }
}

declare global {


  interface HTMLBdsButtonElement extends Components.BdsButton, HTMLStencilElement {}
  var HTMLBdsButtonElement: {
    prototype: HTMLBdsButtonElement;
    new (): HTMLBdsButtonElement;
  };

  interface HTMLBdsCardColorElement extends Components.BdsCardColor, HTMLStencilElement {}
  var HTMLBdsCardColorElement: {
    prototype: HTMLBdsCardColorElement;
    new (): HTMLBdsCardColorElement;
  };

  interface HTMLBdsCheckboxElement extends Components.BdsCheckbox, HTMLStencilElement {}
  var HTMLBdsCheckboxElement: {
    prototype: HTMLBdsCheckboxElement;
    new (): HTMLBdsCheckboxElement;
  };

  interface HTMLBdsIconElement extends Components.BdsIcon, HTMLStencilElement {}
  var HTMLBdsIconElement: {
    prototype: HTMLBdsIconElement;
    new (): HTMLBdsIconElement;
  };

  interface HTMLBdsInputElement extends Components.BdsInput, HTMLStencilElement {}
  var HTMLBdsInputElement: {
    prototype: HTMLBdsInputElement;
    new (): HTMLBdsInputElement;
  };

  interface HTMLBdsRadioElement extends Components.BdsRadio, HTMLStencilElement {}
  var HTMLBdsRadioElement: {
    prototype: HTMLBdsRadioElement;
    new (): HTMLBdsRadioElement;
  };

  interface HTMLBdsTypoElement extends Components.BdsTypo, HTMLStencilElement {}
  var HTMLBdsTypoElement: {
    prototype: HTMLBdsTypoElement;
    new (): HTMLBdsTypoElement;
  };
  interface HTMLElementTagNameMap {
    'bds-button': HTMLBdsButtonElement;
    'bds-card-color': HTMLBdsCardColorElement;
    'bds-checkbox': HTMLBdsCheckboxElement;
    'bds-icon': HTMLBdsIconElement;
    'bds-input': HTMLBdsInputElement;
    'bds-radio': HTMLBdsRadioElement;
    'bds-typo': HTMLBdsTypoElement;
  }
}

declare namespace LocalJSX {
  interface BdsButton {
    /**
    * The arrow button
    */
    'arrow'?: boolean;
    /**
    * If true, the base button will be disabled.
    */
    'disabled'?: boolean;
    /**
    * The icon name
    */
    'icon'?: string;
    /**
    * Size. Entered as one of the size. Can be one of:  'tall', 'standard', 'short';
    */
    'size'?: ButtonSize;
    /**
    * Variant. Entered as one of the variant. Can be one of:  'primary', 'second', 'ghost', 'dashed';
    */
    'variant'?: ButtonVariant;
  }
  interface BdsCardColor {
    /**
    * Specifies HEX color, use Figma docs in Blip DS.
    */
    'hex'?: string;
    /**
    * Specifies name color, use Figma docs in Blip DS.
    */
    'name': string;
    /**
    * Specifies variabel sass color, _variables.scss.
    */
    'variable': string;
  }
  interface BdsCheckbox {
    /**
    * If `true`, the checkbox is selected.
    */
    'checked'?: boolean;
    /**
    * If `true`, the user cannot interact with the checkbox.
    */
    'disabled'?: boolean;
    'label': string;
    /**
    * The name of the control, which is submitted with the form data.
    */
    'name': string;
    /**
    * Emitted when the value has changed.
    */
    'onBdsChange'?: (event: CustomEvent<any>) => void;
    /**
    * Emitted when the input has changed.
    */
    'onBdsInput'?: (event: CustomEvent<KeyboardEvent>) => void;
    'refer': string;
  }
  interface BdsIcon {
    /**
    * Specifies the label to use for accessibility. Defaults to the icon name.
    */
    'ariaLabel'?: string;
    /**
    * Specifies the color to use.Specifies a color to use. The default is svg.
    */
    'color'?: string;
    /**
    * Specifies which icon to use from the built-in set of icons.
    */
    'name': string;
    /**
    * Icon size. Entered as one of the icon size design tokens. Can be one of:  "xxx-small", "xx-small", "x-small", "small", "medium", "large", "x-large", "xx-large", "xxx-large".
    */
    'size'?: IconSize;
    /**
    * Specifies the theme to use outline or solid icons. Defaults to outline.
    */
    'theme'?: IconTheme;
  }
  interface BdsInput {
    /**
    * Capitalizes every word's second character.
    */
    'autoCapitalize'?: InputAutocapitalize;
    /**
    * Hint for form autofill feature
    */
    'autoComplete'?: InputAutoComplete;
    /**
    * Add state danger on input, use for use feedback.
    */
    'danger'?: boolean;
    /**
    * Disabled input.
    */
    'disabled'?: boolean;
    /**
    * Indicated to pass an feeback to user.
    */
    'errorMessage'?: string;
    /**
    * Indicated to pass a help the user in complex filling.
    */
    'helperMessage'?: string;
    /**
    * used for add icon in input left. Uses the bds-icon component.
    */
    'icon'?: string;
    /**
    * Input Id
    */
    'inputId': string;
    /**
    * Input Name
    */
    'inputName'?: string;
    /**
    * label in input, with he the input size increases.
    */
    'label'?: string;
    /**
    * Emitted when the value has changed.
    */
    'onBdsChange'?: (event: CustomEvent<any>) => void;
    /**
    * Emitted when the input has changed.
    */
    'onBdsInput'?: (event: CustomEvent<KeyboardEvent>) => void;
    /**
    * A tip for the user who can enter no controls.
    */
    'placeholder'?: string;
    /**
    * Input type. Can be one of: "text" or "password".
    */
    'type'?: InputType;
    /**
    * The value of the input.
    */
    'value'?: string | null;
  }
  interface BdsRadio {
    /**
    * If `true`, the checkbox is selected.
    */
    'checked'?: boolean;
    /**
    * If `true`, the user cannot interact with the checkbox.
    */
    'disabled'?: boolean;
    'label': string;
    /**
    * The name of the control, which is submitted with the form data.
    */
    'name': string;
    /**
    * Emitted when the value has changed.
    */
    'onBdsChange'?: (event: CustomEvent<any>) => void;
    /**
    * Emitted when the input has changed.
    */
    'onBdsInput'?: (event: CustomEvent<KeyboardEvent>) => void;
    'refer': string;
    'value': string;
  }
  interface BdsTypo {
    /**
    * Bold. Entered as one of the bold. Can be one of:  'regular', 'semi-bold', 'bold', 'extra-bold';
    */
    'bold'?: Bold;
    /**
    * Added font style italic
    */
    'italic'?: boolean;
    /**
    * Line Height. Entered as one of the line hieght. Can be one of:  'none', 'small', 'simple', 'plus', 'double'
    */
    'lineHeight'?: FontLineHeight;
    /**
    * Added style no wrap
    */
    'noWrap'?: boolean;
    /**
    * Tranform text in paragraph
    */
    'paragraph'?: boolean;
    /**
    * Define element tag, must be used for acessibilty
    */
    'tag'?: Tag;
    /**
    * Variant. Entered as one of the font size variant. Can be one of:  'fs-10' ,'fs-12' ,'fs-14' ,'fs-16' ,'fs-20' ,'fs-24' ,'fs-32' ,'fs-40';
    */
    'variant'?: FontSize;
  }

  interface IntrinsicElements {
    'bds-button': BdsButton;
    'bds-card-color': BdsCardColor;
    'bds-checkbox': BdsCheckbox;
    'bds-icon': BdsIcon;
    'bds-input': BdsInput;
    'bds-radio': BdsRadio;
    'bds-typo': BdsTypo;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'bds-button': LocalJSX.BdsButton & JSXBase.HTMLAttributes<HTMLBdsButtonElement>;
      'bds-card-color': LocalJSX.BdsCardColor & JSXBase.HTMLAttributes<HTMLBdsCardColorElement>;
      'bds-checkbox': LocalJSX.BdsCheckbox & JSXBase.HTMLAttributes<HTMLBdsCheckboxElement>;
      'bds-icon': LocalJSX.BdsIcon & JSXBase.HTMLAttributes<HTMLBdsIconElement>;
      'bds-input': LocalJSX.BdsInput & JSXBase.HTMLAttributes<HTMLBdsInputElement>;
      'bds-radio': LocalJSX.BdsRadio & JSXBase.HTMLAttributes<HTMLBdsRadioElement>;
      'bds-typo': LocalJSX.BdsTypo & JSXBase.HTMLAttributes<HTMLBdsTypoElement>;
    }
  }
}


