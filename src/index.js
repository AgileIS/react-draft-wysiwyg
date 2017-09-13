/* @flow */

import Editor from './Editor';
import bold from '../images/bold.svg';
import italic from '../images/italic.svg';
import underline from '../images/underline.svg';
import strikethrough from '../images/strikethrough.svg';
import monospace from '../images/monospace.svg';
import fontSize from '../images/font-size.svg';
import indent from '../images/indent.svg';
import outdent from '../images/outdent.svg';
import ordered from '../images/list-ordered.svg';
import unordered from '../images/list-unordered.svg';
import left from '../images/align-left.svg';
import center from '../images/align-center.svg';
import right from '../images/align-right.svg';
import justify from '../images/align-justify.svg';
import color from '../images/color.svg';
import eraser from '../images/eraser.svg';
import link from '../images/link.svg';
import unlink from '../images/unlink.svg';
import emoji from '../images/emoji.svg';
import embedded from '../images/embedded.svg';
import image from '../images/image.svg';
import undo from '../images/undo.svg';
import redo from '../images/redo.svg';
import subscript from '../images/subscript.svg';
import superscript from '../images/superscript.svg';

module.exports = {
  Editor,
  Icons: {
    Bold: bold,
    Italic: italic,
    Underline: underline,
    Strikethrough: strikethrough,
    Monospace: monospace,
    FontSize: fontSize,
    Indent: indent,
    Outdent: outdent,
    Ordered: ordered,
    Unordered: unordered,
    Left: left,
    Center: center,
    Right: right,
    Justify: justify,
    Color: color,
    Eraser: eraser,
    Link: link,
    Unlink: unlink,
    Emoji: emoji,
    Embedded: embedded,
    Image: image,
    Undo: undo,
    Redo: redo,
    Subscript: subscript,
    Superscript: superscript,
  }
};