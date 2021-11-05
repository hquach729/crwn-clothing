import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { createStructuredSelector } from '@reduxjs/toolkit/node_modules/reselect';

const mapState = createStructuredSelector({});
const mapDispatch = (dispatch: Dispatch) => ({});

interface PropsFromRedux extends ConnectedProps<typeof connector> {}
export const connector = connect(mapState, mapDispatch);
export interface CheckoutPageProps extends PropsFromRedux {}
