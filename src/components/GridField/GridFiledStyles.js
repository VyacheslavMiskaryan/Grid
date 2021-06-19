import { makeStyles } from '@material-ui/core/styles';

import colorSet from '../../colors';

const GridFieldStyles = makeStyles(() => ({
  field: {
    marginLeft: 10,
    width: '100%',
    maxWidth: 900,
    height: '100%',
    minHeight: 600,
    backgroundColor: colorSet.background,
    display: 'flex',
    flexWrap: 'wrap',
  },
  listItem: {
    width: 150,
    height: 200,
  },
  emptyItem: {
    margin: 5,
    width: 140,
    height: 180,
    backgroundColor: colorSet.secondBackground,
  },
}));

export default GridFieldStyles;
