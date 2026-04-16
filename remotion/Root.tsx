import type React from 'react';
import { Composition } from 'remotion';
import { OceanWave } from './OceanWave';

export const RemotionRoot: React.FC = () => {
  return (
    <Composition id="OceanWave" component={OceanWave} durationInFrames={150} fps={30} width={1920} height={1080} />
  );
};
