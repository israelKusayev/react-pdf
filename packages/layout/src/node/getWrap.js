import * as P from '@react-pdf-18/primitives';
import { isNil } from '@react-pdf-18/fns';

const NON_WRAP_TYPES = [P.Svg, P.Note, P.Image, P.Canvas];

const getWrap = node => {
  if (NON_WRAP_TYPES.includes(node.type)) return false;

  return isNil(node.props?.wrap) ? true : node.props.wrap;
};

export default getWrap;
