'use strict';

const HEXLIST_DIRECTORY = 'hexlist';

const HEXLIST_NAMES = [
  'Momcode-209_Hus',
  'Momcode-test',
  'Momcode-empty-set',
];

const HEXLIST_ADDITIONAL_PROPS = ['name', 'author', 'comment'];


const APP_DEFAULT_MODE = 'HEX';


const ABSENT_SYMBOL_CHAR = '\u2639';
const ABSENT_SYMBOL_TEXT = '{' + ABSENT_SYMBOL_CHAR + '}';
const ABSENT_SYMBOL_HTML = '<strong>' + ABSENT_SYMBOL_CHAR + '</strong>';

const ABSENT_SYMBOL_COLOR = 'x';


const NUMBER_OF_RANDOM_BYTES_TO_GENERATE = 20;


const SYMBOL_STYLE_DELIMITER = '-';


const HEXLIST_URL_SYMBOL_DELIMITER = '\x00';


const HEXLIST_URL_ENCODE_COLOR_MAP = {
  'gray': 'z',
  'orange': 'a',
  'black': 'k',
};

const HEXLIST_URL_DECODE_COLOR_MAP = {
  'z': 'gray',
  'a': 'orange',
  'k': 'black',
};


const HEXLIST_URL_ENCODE_STYLE_MAP = {
  'special': 'p',
  'small': 'm',
  'bold': 'l',
};

const HEXLIST_URL_DECODE_STYLE_MAP = {
  'p': 'special',
  'm': 'small',
  'l': 'bold',
};
