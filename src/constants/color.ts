export const COLOR = {
  bar: (isSelectedRegion: boolean) =>
    isSelectedRegion ? COLOR_CODE.hightlightRed : COLOR_CODE.red,

  area: (isSelectedRegion: boolean) =>
    isSelectedRegion ? COLOR_CODE.hightlightBlue : COLOR_CODE.blue,
} as const;

export const COLOR_CODE = {
  hightlightRed: 'rgb(255, 52, 96, 1)',
  red: 'rgba(255, 52, 96, 0.4)',
  hightlightBlue: 'rgb(53, 162, 235, 1)',
  blue: 'rgba(53, 162, 235, 0.4)',
} as const;
