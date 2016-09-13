import React from "react";
import {
  Hero, HeroBody, HeroFoot,
  Container, Title,
  Tabs, TabGroup, Tab
} from "re-bulma";

export default props => (
  <div>
    <Hero color="isDark" size="isMedium" isBold>
      <HeroBody>
        <Container hasTextCentered>
          <Title>airtoxin</Title>
        </Container>
      </HeroBody>
    </Hero>
    <HeroFoot>
      <Tabs tabStyle="isBoxed" isFullwidth>
          <TabGroup>
            <Tab>#</Tab>
            <Tab>github</Tab>
            <Tab>soundcloud</Tab>
            <Tab>instagram</Tab>
          </TabGroup>
      </Tabs>
    </HeroFoot>
  </div>
);
