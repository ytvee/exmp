import React from 'react';
import Typography from '../Typography';

import { Screen } from '@helpers/Screen';
import { Element } from '@helpers/Element';
import { Content } from '@helpers/Content';
import { SectionTitle } from '@helpers/SectionTitle';

export const QAStory = () => {
  return (
    <Screen>
      <SectionTitle>Q&A - Typography</SectionTitle>
      <Content title="Headers">
        <Element description="Headline 1">
          <Typography variant="h1">Token Migration Guide</Typography>
        </Element>
        <Element description="Headline 2">
          <Typography variant="h2">Token Migration Guide</Typography>
        </Element>
        <Element description="Headline 3">
          <Typography variant="h3">Token Migration Guide</Typography>
        </Element>
        <Element description="Headline 4">
          <Typography variant="h4">Token Migration Guide</Typography>
        </Element>
        <Element description="Headline 5">
          <Typography variant="h5">Token Migration Guide</Typography>
        </Element>
      </Content>
      <Content title="Body Text">
        <Element description="Body 1">
          <Typography variant="body1">
            Thank you to the entire ASI community for supporting and accepting
            the CUDOS merger proposal!{' '}
          </Typography>
        </Element>
        <Element description="Body 2">
          <Typography variant="body2">
            Thank you to the entire ASI community for supporting and accepting
            the CUDOS merger proposal!{' '}
          </Typography>
        </Element>
        <Element description="Body 3">
          <Typography variant="body3">
            Thank you to the entire ASI community for supporting and accepting
            the CUDOS merger proposal!{' '}
          </Typography>
        </Element>
        <Element description="Body 4">
          <Typography variant="body4">
            Thank you to the entire ASI community for supporting and accepting
            the CUDOS merger proposal!{' '}
          </Typography>
        </Element>
      </Content>
    </Screen>
  );
};
