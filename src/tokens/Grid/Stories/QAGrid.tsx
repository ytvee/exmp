import React from 'react';
import { Screen } from '../../../helpers/Screen';
import { SectionTitle } from '../../../helpers/SectionTitle';
import { Content } from '../../../helpers/Content';
import { Element } from '../../../helpers/Element';
import Grid from '../Grid';
import { StyledItem, GridWrapper } from './QAGrid.styles';

export const QAGrid = () => {
  return (
    <Screen>
      <SectionTitle>Grid QA</SectionTitle>

      <Content title="Default Grid">
        <Element description="Basic 4-column grid - responsive">
          <GridWrapper>
            <Grid>
              <StyledItem xs={3} sm={4} md={4} lg={3}>
                Item 1
              </StyledItem>
              <StyledItem xs={2} sm={4} md={4} lg={3}>
                Item 2
              </StyledItem>
              <StyledItem xs={3} sm={4} md={4} lg={3}>
                Item 3
              </StyledItem>
              <StyledItem xs={2} sm={4} md={4} lg={3}>
                Item 4
              </StyledItem>
              <StyledItem xs={5} sm={4} md={4} lg={3}>
                Item 5
              </StyledItem>
            </Grid>
          </GridWrapper>
        </Element>
      </Content>

      <Content title="Responsive Grid">
        <Element description="Basic 6-column grid - responsive">
          <GridWrapper>
            <Grid>
              <StyledItem xs={5} sm={4} md={4} lg={2}>
                Responsive 1
              </StyledItem>
              <StyledItem xs={5} sm={4} md={4} lg={2}>
                Responsive 2
              </StyledItem>
              <StyledItem xs={5} sm={4} md={4} lg={2}>
                Responsive 3
              </StyledItem>
              <StyledItem xs={5} sm={4} md={4} lg={2}>
                Responsive 4
              </StyledItem>
              <StyledItem xs={5} sm={4} md={4} lg={2}>
                Responsive 5
              </StyledItem>
              <StyledItem xs={5} sm={4} md={4} lg={2}>
                Responsive 6
              </StyledItem>
            </Grid>
          </GridWrapper>
        </Element>
      </Content>
    </Screen>
  );
};
