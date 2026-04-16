import type React from 'react';
import { interpolate, random, useCurrentFrame, useVideoConfig } from 'remotion';

interface Node {
  id: number;
  baseX: number;
  baseY: number;
  radius: number;
  speed: number;
  amplitude: number;
  phase: number;
  color: string;
}

interface Connection {
  from: number;
  to: number;
}

const NODE_COUNT = 40;

function generateNodes(width: number, height: number): Node[] {
  const nodes: Node[] = [];
  const colors = [
    'rgba(26, 107, 122, 0.8)', // ocean-teal
    'rgba(19, 78, 94, 0.7)', // ocean-deep-teal
    'rgba(232, 120, 58, 0.6)', // sunset-orange
    'rgba(240, 152, 86, 0.5)', // sunset-warm
    'rgba(212, 169, 76, 0.4)', // sand-gold
  ];

  for (let i = 0; i < NODE_COUNT; i++) {
    nodes.push({
      id: i,
      baseX: random(`x-${i}`) * width,
      baseY: random(`y-${i}`) * height,
      radius: 2 + random(`r-${i}`) * 4,
      speed: 0.02 + random(`s-${i}`) * 0.04,
      amplitude: 15 + random(`a-${i}`) * 35,
      phase: random(`p-${i}`) * Math.PI * 2,
      color: colors[Math.floor(random(`c-${i}`) * colors.length)],
    });
  }
  return nodes;
}

function generateConnections(nodes: Node[]): Connection[] {
  const connections: Connection[] = [];
  const maxDist = 220;

  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i].baseX - nodes[j].baseX;
      const dy = nodes[i].baseY - nodes[j].baseY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < maxDist && random(`conn-${i}-${j}`) > 0.3) {
        connections.push({ from: i, to: j });
      }
    }
  }
  return connections;
}

const nodes = generateNodes(1920, 1080);
const connections = generateConnections(nodes);

export const OceanWave: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height, durationInFrames } = useVideoConfig();

  // Seamless loop: use angle that wraps at exactly the total frames
  const loopAngle = (frame / durationInFrames) * Math.PI * 2;

  // Global fade in/out for the whole composition
  const globalOpacity = interpolate(frame, [0, 15, durationInFrames - 15, durationInFrames], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <div
      style={{
        width,
        height,
        background: 'linear-gradient(180deg, #0a1628 0%, #0f1f3a 50%, #0a1628 100%)',
        position: 'relative',
        overflow: 'hidden',
        opacity: globalOpacity,
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: `radial-gradient(circle, rgba(232,120,58,${0.06 + Math.sin(loopAngle) * 0.03}) 0%, transparent 70%)`,
        }}
      />

      {/* Connection lines */}
      <svg width={width} height={height} style={{ position: 'absolute', top: 0, left: 0 }} aria-hidden="true">
        {connections.map((conn) => {
          const n1 = nodes[conn.from];
          const n2 = nodes[conn.to];

          const x1 = n1.baseX + Math.sin(loopAngle * (n1.speed * 50) + n1.phase) * n1.amplitude;
          const y1 = n1.baseY + Math.cos(loopAngle * (n1.speed * 30) + n1.phase * 0.7) * n1.amplitude * 0.6;
          const x2 = n2.baseX + Math.sin(loopAngle * (n2.speed * 50) + n2.phase) * n2.amplitude;
          const y2 = n2.baseY + Math.cos(loopAngle * (n2.speed * 30) + n2.phase * 0.7) * n2.amplitude * 0.6;

          const dx = x2 - x1;
          const dy = y2 - y1;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const opacity = interpolate(dist, [0, 200], [0.25, 0.02], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          });

          return (
            <line
              key={`${conn.from}-${conn.to}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="rgba(26, 107, 122, 0.3)"
              strokeWidth={1}
              opacity={opacity}
            />
          );
        })}
      </svg>

      {/* Nodes */}
      {nodes.map((node) => {
        const x = node.baseX + Math.sin(loopAngle * (node.speed * 50) + node.phase) * node.amplitude;
        const y = node.baseY + Math.cos(loopAngle * (node.speed * 30) + node.phase * 0.7) * node.amplitude * 0.6;

        // Pulsing glow
        const glowScale = 1 + Math.sin(loopAngle * 3 + node.phase) * 0.3;

        return (
          <div
            key={node.id}
            style={{
              position: 'absolute',
              left: x - node.radius,
              top: y - node.radius,
              width: node.radius * 2,
              height: node.radius * 2,
              borderRadius: '50%',
              background: node.color,
              boxShadow: `0 0 ${node.radius * glowScale * 3}px ${node.color}`,
            }}
          />
        );
      })}
    </div>
  );
};
