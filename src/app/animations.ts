import {
  trigger,
  transition,
  query,
  style,
  group,
  animate,
} from '@angular/animations';

// this allows us to set a priority list in the router for each animation
//  reflecting how "deep" we are in the hierarchy

export const slider = trigger('routeAnimations', [
  transition(':increment', slideTo('right')),
  transition(':decrement', slideTo('left')),
]);

function slideTo(direction: string) {
  const optional = { optional: true };
  return [
    query(
      ':enter, :leave',
      [
        style({
          position: 'relative',
          top: 0,
          [direction]: 0,
          width: '100%',
        }),
      ],
      optional
    ),
    query(':enter', [style({ [direction]: '-100%' })]),
    group([
      query(
        ':leave',
        [animate('300ms ease', style({ [direction]: '100%' }))],
        optional
      ),
      query(':enter', [animate('300ms ease', style({ [direction]: '0%' }))]),
    ]),
  ];
}
