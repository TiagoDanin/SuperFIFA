/* eslint-disable no-unused-expressions */

import {
  createNavigationContainerRef,
  DrawerActions,
} from '@react-navigation/native';

export const navigationReference = createNavigationContainerRef();

export const replace = (name, parameters = {}) => {
  if (!navigationReference.isReady()) {
    return;
  }

  navigationReference.resetRoot({
    index: 0,
    routes: [
      {
        name,
        params: parameters,
      },
    ],
  });
};

export const navigate = (name, parameters = {}) => {
  if (!navigationReference.isReady()) {
    return;
  }

  navigationReference.navigate(name, parameters, {
    key: Math.random().toString(),
  });
};

export const reset = routes => {
  if (!navigationReference.isReady()) {
    return;
  }

  navigationReference.reset(routes);
};

export const goBack = () => {
  if (!navigationReference.isReady()) {
    return;
  }

  navigationReference.goBack();
};

export const toggleDrawer = () => {
  if (!navigationReference.isReady()) {
    return;
  }

  navigationReference.dispatch(DrawerActions.toggleDrawer());
};
