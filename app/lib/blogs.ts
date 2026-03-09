export const blogs = [
  {
    slug: 'building-cross-platform-apps-with-react-native',
    title: 'Building Cross-Platform Apps with React Native',
    label: 'TUTORIAL',
    description: 'A deep dive into how React Native enables teams to ship high-quality iOS and Android apps from a single codebase.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800',
    date: 'Mar 01, 2025',
    readTime: '8 min read',
    author: {
      name: 'Ejaz Shaikh',
      image: 'https://i.pravatar.cc/150?img=11',
    },
    content: `
React Native has changed the way mobile apps are built. Instead of maintaining two separate codebases for iOS and Android, teams can now write once and deploy everywhere.

## Getting Started

First, set up your environment:

\`\`\`bash
npx create-expo-app my-app
cd my-app
npx expo start
\`\`\`

## Core Concepts

React Native maps JavaScript components directly to native UI elements. A \`<View>\` becomes a \`UIView\` on iOS and an \`android.view.View\` on Android.

## Performance Tips

- Use \`FlatList\` instead of \`ScrollView\` for long lists
- Avoid anonymous functions in render
- Use \`useCallback\` and \`useMemo\` aggressively

React Native is production-ready and powers apps at Meta, Shopify, and Microsoft.
    `,
  },
  {
    slug: 'why-we-switched-to-supabase',
    title: 'Why We Switched to Supabase from Firebase',
    label: 'ENGINEERING',
    description: 'After years of using Firebase, we made the switch to Supabase. Here is what we learned.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800',
    date: 'Feb 18, 2025',
    readTime: '6 min read',
    author: {
      name: 'Ejaz Shaikh',
      image: 'https://i.pravatar.cc/150?img=11',
    },
    content: `
Supabase is an open-source Firebase alternative built on PostgreSQL. After hitting scaling limits with Firestore, we decided to make the switch.

## What We Gained

- Full SQL support with joins, views, and functions
- Row-level security out of the box
- Real-time subscriptions via PostgreSQL triggers
- Auto-generated REST and GraphQL APIs

## Migration

\`\`\`ts
// Firebase
const doc = await getDoc(doc(db, 'users', uid))

// Supabase
const { data } = await supabase
  .from('users')
  .select('*')
  .eq('id', uid)
  .single()
\`\`\`

The migration took two weeks and we have not looked back since.
    `,
  },
  {
    slug: 'tailwind-css-v4-what-changed',
    title: 'Tailwind CSS v4 — What Changed and Why It Matters',
    label: 'DESIGN',
    description: 'Tailwind v4 is a ground-up rewrite. Here is everything new and how to migrate your project.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800',
    date: 'Feb 05, 2025',
    readTime: '5 min read',
    author: {
      name: 'Ejaz Shaikh',
      image: 'https://i.pravatar.cc/150?img=11',
    },
    content: `
Tailwind CSS v4 is a complete rewrite powered by a new high-performance engine called Oxide. It is dramatically faster and ships with a new CSS-first configuration system.

## Key Changes

- No more \`tailwind.config.js\` — configure via CSS
- 10x faster builds using the new Rust-based engine
- Native CSS cascade layers
- New \`@theme\` directive for design tokens

## CSS-First Config

\`\`\`css
@import "tailwindcss";

@theme {
  --color-primary: #3DDB87;
  --font-sans: "Space Grotesk", sans-serif;
}
\`\`\`

This is a massive improvement in developer experience.
    `,
  },
  {
    slug: 'next-js-app-router-patterns',
    title: 'Next.js App Router Patterns We Use in Production',
    label: 'TUTORIAL',
    description: 'Real-world patterns for layouts, loading states, error boundaries, and data fetching with the App Router.',
    image: 'https://images.unsplash.com/photo-1647166545674-ce28ce93bdca?w=800',
    date: 'Jan 22, 2025',
    readTime: '10 min read',
    author: {
      name: 'Ejaz Shaikh',
      image: 'https://i.pravatar.cc/150?img=11',
    },
    content: `
The Next.js App Router introduced a new mental model for building React apps. Here are the patterns we use in every project.

## Parallel Routes

Use parallel routes for modals that need their own URL:

\`\`\`
app/
  @modal/
    (.)photo/[id]/
      page.tsx
  layout.tsx
\`\`\`

## Streaming with Suspense

\`\`\`tsx
<Suspense fallback={<Skeleton />}>
  <SlowComponent />
</Suspense>
\`\`\`

## Server Actions

\`\`\`ts
'use server'

export async function createPost(data: FormData) {
  await db.insert(posts).values({ title: data.get('title') })
  revalidatePath('/blog')
}
\`\`\`

These patterns have dramatically improved our codebase quality.
    `,
  },
  {
    slug: 'designing-for-dark-mode',
    title: 'Designing for Dark Mode with Material Design 3',
    label: 'DESIGN',
    description: 'How to build a proper dark mode system using MD3 color tokens instead of hardcoded hex values.',
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800',
    date: 'Jan 10, 2025',
    readTime: '7 min read',
    author: {
      name: 'Ejaz Shaikh',
      image: 'https://i.pravatar.cc/150?img=11',
    },
    content: `
Dark mode is no longer optional. Here is how we implement it properly using Material Design 3 color tokens.

## The Problem with Hardcoded Colors

Most developers do this:

\`\`\`css
.card { background: #1e1e1e; }
\`\`\`

This breaks immediately when you need a light mode or want to tweak your palette.

## The MD3 Way

\`\`\`css
.card { background: var(--md-sys-color-surface-container); }
\`\`\`

Define your tokens once, switch themes by swapping token values. This is the foundation of the Oxbit design system.
    `,
  },
  {
    slug: 'electron-vs-tauri',
    title: 'Electron vs Tauri: Which Should You Use in 2025?',
    label: 'ENGINEERING',
    description: 'A practical comparison of Electron and Tauri for building desktop apps, with real benchmark data.',
    image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800',
    date: 'Dec 28, 2024',
    readTime: '9 min read',
    author: {
      name: 'Ejaz Shaikh',
      image: 'https://i.pravatar.cc/150?img=11',
    },
    content: `
Both Electron and Tauri let you build desktop apps with web technologies. But they take very different approaches.

## Electron

- Ships Chromium + Node.js — large bundle size (~150MB)
- Mature ecosystem, used by VS Code, Slack, Figma
- Easy to get started

## Tauri

- Uses the OS webview — bundle size ~3MB
- Backend in Rust — much better performance and security
- Steeper learning curve

## Our Recommendation

For internal tools or when you need maximum compatibility, use Electron. For consumer apps where bundle size and performance matter, use Tauri.
    `,
  },
]