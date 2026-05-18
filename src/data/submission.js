// Submission Hub · placeholders editables en un solo lugar
// Mariano: cuando tengas las URLs finales, reemplazá los strings de aquí.

export const submission = {
  // === Video ===
  video_principal_url: 'https://www.youtube.com/embed/yAY89Qjs0RA',
  video_principal_title: 'DaemonCraft · 3-minute submission',
  video_largo_url: 'https://www.youtube.com/embed/Zig0h_GPT6E',
  video_largo_title: 'DaemonCraft · uncut live session',

  // === Repo + Article ===
  repo_public_url: 'https://github.com/nicoechaniz/DaemonCraft',          // repo del juego
  repo_finetune_url: 'https://github.com/Mar-IA-no/deamoncraft-gemma4-andy', // repo del fine-tuning Gemma 4
  kaggle_article_url: '/article/',  // write-up local hosteado en /article (también disponible en /article.md)
  ollama_model_url: 'https://ollama.com/library/gemma3',
  antigravity_url: 'https://antigravity.google',

  // === Images (relative to /public) ===
  cover_image: '/media/4922583338346810464.jpg',
  gameplay_1: '/media/4922583338346810463.jpg',
  gameplay_2: '/media/4922583338346810463.jpg',
  dashboard_image: '/media/dashboard.jpg',
  technical_image: '/media/captura_ollama_gemma_media_gallery.png',
  gandy_terminal_image: '/media/gandy-terminal.jpg',
  architecture_diagram: '/architecture-thumb.jpg',  // versión grande inline vía ArchitectureDiagram.astro

  // === Compact world_state · 4 modos del visor mBit 3D ===
  // De voxel sólido a etiquetas ASCII: lo que efectivamente recibe gAndy.
  world_state_views: [
    {
      src: '/media/world-state-block.jpg',
      label: 'block',
      caption: 'Solid voxel view — what the player sees.',
    },
    {
      src: '/media/world-state-wire.jpg',
      label: 'wire',
      caption: 'Wireframe — block geometry without textures.',
    },
    {
      src: '/media/world-state-both.jpg',
      label: 'both',
      caption: 'Voxels + ASCII overlay — bridging the abstraction.',
    },
    {
      src: '/media/world-state-char.jpg',
      label: 'char',
      caption: 'Pure ASCII spatial grid — the actual world_state delivered to gAndy.',
    },
  ],
  // Legacy alias (compat): primer modo char usado como hero del world_state.
  ascii_world_state_image: '/media/world-state-char.jpg',

  // === Videos locales (LFS · servidos desde /public/media/) ===
  // poster usa la captura del dashboard como thumbnail consistente
  video_poster: '/media/dashboard.jpg',
  video_local_short_url: '/media/Nace_allay.mp4',
  video_local_full_url: '/media/VID_20260516_114933.mp4',

  // === Copy oficial (locked by handoff) ===
  copy: {
    hero_title: 'DaemonCraft',
    hero_subtitle: 'A local-first embodied companion in Minecraft powered by Gemma 4',
    hero_line: 'Hermes guides the story. gAndy handles embodied action. Minecraft makes every step visible.',
    cta_primary: 'Watch the 3-minute demo',
    cta_secondary: 'View full live session',

    architecture_quote:
      'Hermes keeps direct control when needed; gAndy progressively absorbs only the embodied capabilities that have already been measured as reliable.',
    world_state_quote:
      'The world state includes compact ASCII-style spatial grids, giving gAndy a readable local map without sending huge raw game-state dumps.',

    demo_short:
      'What you see here is not a chatbot mockup. It is a live embodied system operating inside Minecraft, with visible actions, observable state, and a progressive delegation model.',
    gemma_short:
      'Gemma 4 runs locally through Ollama and participates directly in the embodied loop, producing structured action outputs that can be validated and executed in the world.',
    world_state_short:
      'The model does not receive a massive raw dump of the game. DaemonCraft gives gAndy a compact ASCII-style spatial representation of the nearby world, keeping the local context readable and efficient.',
    limits_short:
      'We do not pretend Gemma solves every case alone. Hermes filters ambiguity, scope and safety first, and delegates only the embodied capabilities that have already been measured as reliable.',
    full_session_short:
      'This is an uncut session showing the system operating live.',
  },

  // === Pillars + highlights ===
  highlights: [
    { label: 'Visible in-world actions', icon: '▸' },
    { label: 'Local Gemma 4 via Ollama', icon: '◆' },
    { label: 'Measured, not claimed', icon: '✓' },
    { label: 'Compact world representation', icon: '▦' },
  ],

  gemma_reasons: [
    { title: 'Local-first', body: 'Runs on the family or school machine. No mandatory cloud dependency.' },
    { title: 'Ollama', body: 'Served through the standard Ollama runtime, easy to swap and audit.' },
    { title: 'Structured tool use', body: 'JSON outputs that are validated before they touch the world.' },
    { title: 'Low marginal cost', body: 'Repeatable embodied tasks move away from frontier-model token spend.' },
    { title: 'Self-hostable', body: 'Families, schools and cooperatives can host the companion themselves.' },
    { title: 'Compact world state', body: 'ASCII-style local map keeps spatial context readable and efficient.' },
  ],

  results: [
    {
      label: 'Tier 1 subset',
      value: 'Measured',
      detail: 'Real Minecraft sessions, not benchmark fiction. Subset of embodied primitives that already pass our reliability bar.',
    },
    {
      label: 'Post-mitigation critical subset',
      value: 'Improved',
      detail: 'Hermes-side mitigation lifts behavior on the critical slice — same model, smarter scaffolding.',
    },
    {
      label: 'Delegation policy',
      value: 'Selective',
      detail: 'Some cases run through Gemma directly. Others are filtered upstream by Hermes before they ever reach the body.',
    },
  ],

  // === Architecture nodes (left to right) ===
  architecture: [
    { id: 'hermes', label: 'Hermes', sub: 'narrative · pedagogy · direct control', tone: 'daemon' },
    { id: 'gemma', label: 'gAndy', sub: 'embodiment logic', tone: 'holodeck' },
    { id: 'embodied', label: 'embodied-service', sub: 'bridge · validation', tone: 'cream' },
    { id: 'mineflayer', label: 'Mineflayer', sub: 'execution layer', tone: 'cream' },
    { id: 'minecraft', label: 'Minecraft', sub: 'shared world', tone: 'grass' },
  ],

  gallery: [
    {
      type: 'image',
      src: '/media/4922583338346810464.jpg',
      title: 'Cover',
      caption: 'Player + Allay companion. One frame that summarizes the demo.',
    },
    {
      type: 'image',
      src: '/media/dashboard.jpg',
      title: 'DaemonCraft Dashboard',
      caption: 'Status · plan · live chat · action log · inventory. The single pane that makes every embodied step visible and auditable.',
    },
    {
      type: 'image',
      src: '/media/gandy-terminal.jpg',
      title: 'gAndy in action',
      caption: 'Terminal stream of [GANDY] intents — navigate, smelt, toss, scan, goto — with timings and OK/FAIL outcomes.',
    },
    {
      type: 'image',
      src: '/media/4922583338346810463.jpg',
      title: 'Live cockpit',
      caption: 'Real session · Minecraft + Ollama (gemma-andy:e4b · 11 GB · 100% GPU) + DaemonCraft Dashboard side by side.',
    },
    {
      type: 'video',
      src: '/media/Nace_allay.mp4',
      poster: '/media/4922583338346810464.jpg',
      title: 'Allay is born',
      caption: 'First moment the companion appears in the world.',
    },
    {
      type: 'video',
      src: '/media/corriendo_esquivando_pozos.mp4',
      poster: '/media/4922583338346810463.jpg',
      title: 'Embodied movement',
      caption: 'Running and dodging holes — embodied navigation under live control.',
    },
    {
      type: 'video',
      src: '/media/VID_20260516_142852.mp4',
      poster: '/media/world-state-both.jpg',
      title: 'mBit vision · short',
      caption: 'Live capture of the mBit 3D viewer rendering the same world_state gAndy receives — short cut.',
    },
    {
      type: 'video',
      src: '/media/VID_20260516_115307.mp4',
      poster: '/media/world-state-both.jpg',
      title: 'mBit vision · medium',
      caption: 'Longer live cut of the mBit visualizer: voxels and ASCII labels updating together as the bot moves.',
    },
    {
      type: 'video',
      src: '/media/VID_20260516_114933.mp4',
      poster: '/media/world-state-both.jpg',
      title: 'mBit vision · full',
      caption: 'Full uncut recording of the mBit world_state stream that feeds gAndy through every embodied step.',
    },
    {
      type: 'image',
      src: '/architecture-thumb.jpg',
      title: 'Architecture',
      caption: 'Hermes → gAndy → embodied-service → Mineflayer → Minecraft.',
    },
  ],
};
