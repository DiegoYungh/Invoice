
// Default options

interface DefaultOptionsInterface {
  forceUpdate: boolean;
  selector: string;
  labelFormatter: string;
  valid: any;
  invalid: any
}

declare var defaultOptions: DefaultOptionsInterface;

// Formatting functions used for formatting error messages

interface FormatFunctionsInterface {
  formatLabel: (attrName: string, model: any) => string;
  format: () => string;
}

declare var formatFunctions: FormatFunctionsInterface;

// Flattens an object

declare function flatten(obj: any, into: any, key: string): any;

// Validation

interface ValidationObjectCreatorInterface {
  getValidatedAttrs: (model: any, attrs: any) => any;
  getOptionsAttrs: (options: any, view: any) => any;
  getValidators: (model: any, attr: any) => any;
  validateAttr: (model: any, attr: any, value: any, computed: any) => any;
  validateModel: (model: any, attrs: any, validatedAttrs: any) => any;
  mixin: (view: any, options: any) => any;
  bindModel: (view: any, model: any, options: any) => any;
  unbindModel: (model: any, view: any) => any;
  collectionAdd: (model: any) => void;
  collectionRemove: (model: any) => void;
}

interface ValidationMixinObject {
  preValidate: (attr: any, value: any) => any;
  isValid: (option: any) => boolean;
  validate: (attrs: any, setOptions: any) => any;
}

interface ValidationInterface {
  version: string;
  configure: (options: any) => void;
  bind: (view: any, options: any) => void;
  unbind: (view: any, options: any) => void;
  mixin: ValidationMixinObject;
  callbacks: ValidationCallbacksInterface;
  patterns: ValidationPatternsInterface;
  messages: ValidationMessagesInterface;
  labelFormatters: ValidationLabelFormattersInterface;
  attributeLoaders: ValidationAttributeLoadersInterface;
  validators: ValidationValidatorsInterface;
}

declare var Validation: ValidationInterface;

// Callbacks

interface ValidationCallbacksInterface {
  valid: (view: any, attr: string, selector: string) => void;
  invalid: (view: any, attr: string, error: any, selector: string) => void;
}

declare var defaultCallbacks: ValidationCallbacksInterface;

// Patterns

interface ValidationPatternsInterface {
  digits: RegExp;
  number: RegExp;
  email: RegExp;
  url: RegExp;
}

declare var defaultPatterns: ValidationPatternsInterface;

// Error messages

interface ValidationMessagesInterface {
  required: string;
  acceptance: string;
  min: string;
  max: string;
  range: string;
  length: string;
  minLength: string;
  maxLength: string;
  rangeLength: string;
  oneOf: string;
  equalTo: string;
  digits: string;
  number: string;
  email: string;
  url: string;
  inlinePattern: string;
}

declare var defaultMessages: ValidationMessagesInterface;

// Label formatters

interface ValidationLabelFormattersInterface {
  none: (attrName: string) => string;
  sentenceCase: (attrName: string) => string;
  label: (attrName: string, model: any) => any;
}

declare var defaultLabelFormatters: ValidationLabelFormattersInterface;

// AttributeLoaders

interface ValidationAttributeLoadersInterface {
  inputNames: (view: any) => any;
}

declare var defaultAttributeLoaders: ValidationAttributeLoadersInterface;

// Built in validators

interface ValidationValidatorsInterface{
  fn: (value: any, attr: any, fn: any, model: any, computed: any) => any;
  required: (value: any, attr: any, required: any, model: any, computed: any) => any;
  acceptance: (value: any, attr: any, accept: any, model: any) => any;
  min: (value: number, attr: any, minValue: number, model: any) => any;
  max: (value: number, attr: any, maxValue: number, model: any) => any;
  range: (value: number, attr: any, range: number[], model: any) => any;
  length: (value: string, attr: any, length: number, model: any) => any;
  minLength: (value: string, attr: any, minLength: number, model: any) => any;
  maxLength: (value: string, attr: any, maxLength: number, model: any) => any;
  rangeLength: (value: string, attr: any, range: number[], model: any) => any;
  oneOf: (value: any, attr: any, values: any, model: any) => any;
  equalTo: (value: any, attr: any, equalTo: any, model: any, computed: any) => any;
  pattern: (value: any, attr: any, pattern: RegExp, model: any) => any;
}

declare var defaultValidators: ValidationValidatorsInterface;