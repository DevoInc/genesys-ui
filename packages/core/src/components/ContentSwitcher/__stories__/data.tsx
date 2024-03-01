import * as React from 'react';
import { Link } from '../../Link';
import {
  GIActivity,
  GIFingerprintScanSecurityAccess,
  GIGaugeDashboardFullFuel,
} from '@devoinc/genesys-icons';

export const storiesData = [
  {
    icon: <GIActivity />,
    id: 'first',
    label: 'First content',
    content:
      'Tesseract great turbulent clouds globular star cluster trillion citizens of distant epochs Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
  },
  {
    icon: <GIGaugeDashboardFullFuel />,
    id: 'second',
    label: 'Second large content',
    content: (
      <>
        Venture science paroxysm of global death tesseract galaxies corpus
        callosum. Billions upon billions{' '}
        <Link underlined href="#">
          inconspicuous motes of rock
        </Link>{' '}
        and gas finite but unbounded dream of the eye something incredible is
        waiting to be known sed quia non numquam eius modi tempora incidunt ut
        labore et dolore magnam aliquam quaerat voluptatem.
      </>
    ),
  },
  {
    icon: <GIFingerprintScanSecurityAccess />,
    id: 'third',
    label: 'Third content',
    content:
      "A very small stage in a vast cosmic arena culture Tunguska event colonies dream of the mind's eye a billion trillion.",
  },
];
