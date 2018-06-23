import React from 'react';
import { shallow } from 'enzyme';

import AssetItemList from '../';

describe('AssetItemList Component', () => {
  let wrapper;

  it('renders the AssetItemList component', () => {
    wrapper = shallow(<AssetItemList assetList={[]} loading={false} />);
    expect(wrapper.length).toEqual(1);
  });

  it('provides props ok', () => {
    const assetList = [
      {
        data: [
          {
            description:
              'As spring progresses at the south pole, the surface reacts to the change of season. This image from NASA 2001 Mars Odyssey spacecraft shows a region of the south pole that is monitored throughout spring, summer, and fall at the south pole.',
            title: 'South Pole',
            date_created: '2012-11-02T15:30:37Z',
            keywords: ['Mars', '2001 Mars Odyssey'],
            secondary_creator: 'NASA/JPL/ASU',
            nasa_id: 'PIA16338',
            center: 'JPL',
            media_type: 'image',
            description_508:
              'As spring progresses at the south pole, the surface reacts to the change of season. This image from NASA 2001 Mars Odyssey spacecraft shows a region of the south pole that is monitored throughout spring, summer, and fall at the south pole.',
          },
        ],
        links: [
          {
            rel: 'preview',
            href:
              'https://images-assets.nasa.gov/image/PIA16338/PIA16338~thumb.jpg',
            render: 'image',
          },
        ],
        href: 'https://images-assets.nasa.gov/image/PIA16338/collection.json',
      },
      {
        data: [
          {
            description:
              "Maryland School for the Blind students Andrea Washington, right, reacts to fellow student Nino Jacobs, left, after he donned a Space suit during a visit to NASA Headquarters in Washington, Thursday, Oct. 29, 2009.  Seven students from the Maryland School for the Blind visited NASA and participated in activities to learn about NASA'smission, functions, and careers. Student Kuassi Kouhiko is in the background. Photo Credit: (NASA/Paul E. Alers)",
            title: 'Disability Awareness Activity',
            date_created: '2009-10-28T00:00:00Z',
            keywords: [
              'Andrea Washington',
              'Disability Awareness',
              'Kuassi Kouhiko',
              'Maryland School for the Blind',
              'NASA Headquarters',
              'Nino Jacobs',
              'Washington, DC',
            ],
            nasa_id: '200910290015HQ',
            center: 'HQ',
            media_type: 'image',
            photographer: 'NASA/Paul E. Alers',
          },
        ],
        links: [
          {
            rel: 'preview',
            href:
              'https://images-assets.nasa.gov/image/200910290015HQ/200910290015HQ~thumb.jpg',
            render: 'image',
          },
        ],
        href:
          'https://images-assets.nasa.gov/image/200910290015HQ/collection.json',
      },
    ];
    const loading = false;
    wrapper = shallow(
      <AssetItemList assetList={assetList} loading={loading} />
    );
    expect(wrapper.props().assetList).toBe(assetList);
    expect(wrapper.props().loading).toBe(false);
  });
});
