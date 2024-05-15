import * as React from 'react';
import type { HeadFC } from 'gatsby';
import { Button, Flex, Text, Heading, Divider } from '@chakra-ui/react';
import { CollecticonArrowUpRight } from '@devseed-ui/collecticons-chakra';

import PageLayout from '$components/page-layout';
import HomeHero from '$components/home/page-hero';
import { Fold, FoldProse } from '$components/fold';
import Seo from '$components/seo';
import { ChakraFade } from '$components/reveal';

export default function IndexPage() {
  return (
    <PageLayout>
      <HomeHero />
      <Flex
        flexFlow='column'
        gap='8'
        py={{ base: '8', md: '12', lg: '20' }}
        px={{ base: '4', md: '8', lg: '12' }}
        position='relative'
        zIndex='30'
        mt={{ base: '0', md: '-16', lg: '-32' }}
      >
        <Fold alignItems='end'>
          <ChakraFade
            direction='up'
            triggerOnce
            gridColumn={{ base: '1/-1', md: '1/ span 4', lg: '2/ span 5' }}
          >
            <FoldProse
              display='flex'
              flexFlow='column'
              gap={{ base: '4', lg: '8' }}
            >
              <Heading size='2xl'>About</Heading>
              <Text>
                <strong>SatSummit</strong> convenes leaders in the satellite
                industry and experts in global development for 2 days of
                presentations and in-depth conversations on solving the
                world&apos;s most critical development challenges with satellite
                data.
              </Text>
            </FoldProse>
          </ChakraFade>

          <ChakraFade
            direction='up'
            triggerOnce
            gridColumn='1/-1'
            display={{ md: 'none' }}
          >
            <Divider borderColor='base.200a' size='md' />
          </ChakraFade>

          <ChakraFade
            direction='up'
            triggerOnce
            gridColumn={{ base: '1/-1', md: '5/ span 4', lg: '7/ span 5' }}
          >
            <FoldProse
              display='flex'
              flexFlow='column'
              gap={{ base: '4', lg: '8' }}
            >
              <Heading size='2xl'>Stay tuned</Heading>
              <Text>
                From climate change to population growth to natural resource
                availability, earth observation data offers insights into
                today&apos;s biggest global issues.
              </Text>
              <Text>
                Stay tuned for more information on <strong>SatSummit</strong>{' '}
                going to <strong>Lisbon, Portugal</strong>!
              </Text>
              <Button
                as='a'
                href='https://23425005.hs-sites.com/satsummit-2024'
                colorScheme='primary'
                alignSelf='start'
                rightIcon={<CollecticonArrowUpRight />}
                size={{ base: 'md', lg: 'lg' }}
              >
                Get the newsletter
              </Button>
            </FoldProse>
          </ChakraFade>
        </Fold>
      </Flex>
    </PageLayout>
  );
}

export const Head: HeadFC = () => <Seo title='Save the Date' />;
