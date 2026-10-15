import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Statischer Export nach out/ für Firebase Hosting (keine Server-Teile).
  output: "export",
  images: { unoptimized: true },
  // Arbeitsregeln stehen nur in der CLAUDE.md des Repos, kein AGENTS.md hier.
  agentRules: false,
  turbopack: {
    rules: {
      '*.md': {
        loaders: ['raw-loader'],
        as: '*.js',
      },
    },
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      type: "asset/source",
    });
    return config;
  },
};

export default nextConfig;
