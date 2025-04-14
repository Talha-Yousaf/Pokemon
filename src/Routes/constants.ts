export enum Routes {
  APP_ROUTES = 'appRoutes',
  APPINTRO = "appIntro",
  APPLOADING = "appLoading",
  HOME = "home",
  DETAIL = "detail",
}
export type RouteParams = {
  [Routes.APP_ROUTES]: {
    screen: Routes;
    params?: RouteParams[Routes];
  };
  [Routes.APPINTRO]: undefined;
  [Routes.APPLOADING]: undefined;
  [Routes.HOME]: undefined;
  [Routes.DETAIL]: {
    item: PokemonResult;
  };
};
