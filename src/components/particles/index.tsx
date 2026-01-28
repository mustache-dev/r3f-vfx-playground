import { Dodge } from './dodge'
import { EnemyDeath } from './enemyDeath'
import { Energy } from './energy'
import { Impact } from './impact'
import { Slash } from './slash'
import { Spawn } from './spawn'
import { VFXParticles } from '@/components/vfx/r3f-vfx/src'

export const Particles = () => {
  return (
    <>
      <Slash />
      <Dodge />
      <Impact />
      <Spawn />
      <EnemyDeath />
      {/* <VFXParticles
      debug
        curveTexturePath="/vfx/blood.bin"
        position={[0, 0, 0]}
        size={[0.1, 0.3]}
        fadeSize={[1, 0]}
        colorStart={['#ff0000', '#000000']}
        fadeOpacity={[1, 1]}
        gravity={[0, 0, 0]}
        speed={[2.06, 2.06]}
        lifetime={[1, 2]}
        direction={[
          [-1, 1],
          [0, 1],
          [-1, 1],
        ]}
        startPosition={[
          [0, 0],
          [0, 0],
          [0, 0],
        ]}
        rotation={[0, 0]}
        rotationSpeed={[0, 0]}
        appearance="gradient"
        blending={1}
        lighting="standard"
        emitterShape={1}
        emitterRadius={[0, 1]}
        emitterAngle={0.7853981633974483}
        emitterHeight={[0, 1]}
        emitterDirection={[0, 1, 0]}
      /> */}
      <VFXParticles
        curveTexturePath="/vfx/blood.bin"
        colorStart={['#ff0000', '#000000']}
        speed={[1.57, 1.57]}
        appearance="gradient"
        lighting="standard"
        emitterShape={1}
      />
    </>
  )
}
