// Submission Hub · placeholders editables en un solo lugar
// Mariano: cuando tengas las URLs finales, reemplazá los strings de aquí.

export const submission = {
  // === Video ===
  video_principal_url: '',          // YouTube embed (e.g. https://www.youtube.com/embed/XXXX)
  video_principal_title: 'DaemonCraft · 3-minute submission',
  video_largo_url: '',              // YouTube embed for full uncut session
  video_largo_title: 'DaemonCraft · uncut live session',

  // === Repo + Article ===
  repo_public_url: 'https://github.com/nicoechaniz/DaemonCraft',          // repo del juego
  repo_finetune_url: 'https://github.com/Mar-IA-no/deamoncraft-gemma4-andy', // repo del fine-tuning Gemma 4
  kaggle_article_url: '',           // pegar URL de Kaggle cuando esté publicado
  ollama_model_url: 'https://ollama.com/library/gemma3',
  antigravity_url: 'https://antigravity.google',

  // === Images (relative to /public) ===
  cover_image: '/placeholders/cover.svg',
  gameplay_1: '/placeholders/gameplay-1.svg',
  gameplay_2: '/placeholders/gameplay-2.svg',
  dashboard_image: '/placeholders/dashboard.svg',
  technical_image: '/placeholders/technical.svg',
  ascii_world_state_image: '/placeholders/ascii-world.svg',
  architecture_diagram: '/architecture-thumb.jpg',  // versión grande inline vía ArchitectureDiagram.astro

  // === Copy oficial (locked by handoff) ===
  copy: {
    hero_title: 'DaemonCraft',
    hero_subtitle: 'A local-first embodied companion in Minecraft powered by Gemma 4',
    hero_line: 'Hermes guides the story. Gemma-Andy handles embodied action. Minecraft makes every step visible.',
    cta_primary: 'Watch the 3-minute demo',
    cta_secondary: 'View full live session',

    architecture_quote:
      'Hermes keeps direct control when needed; Gemma-Andy progressively absorbs only the embodied capabilities that have already been measured as reliable.',
    world_state_quote:
      'The world state includes compact ASCII-style spatial grids, giving Gemma-Andy a readable local map without sending huge raw game-state dumps.',

    demo_short:
      'What you see here is not a chatbot mockup. It is a live embodied system operating inside Minecraft, with visible actions, observable state, and a progressive delegation model.',
    gemma_short:
      'Gemma 4 runs locally through Ollama and participates directly in the embodied loop, producing structured action outputs that can be validated and executed in the world.',
    world_state_short:
      'The model does not receive a massive raw dump of the game. DaemonCraft gives Gemma-Andy a compact ASCII-style spatial representation of the nearby world, keeping the local context readable and efficient.',
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
    { id: 'gemma', label: 'Gemma-Andy', sub: 'embodiment logic', tone: 'holodeck' },
    { id: 'embodied', label: 'embodied-service', sub: 'bridge · validation', tone: 'cream' },
    { id: 'mineflayer', label: 'Mineflayer', sub: 'execution layer', tone: 'cream' },
    { id: 'minecraft', label: 'Minecraft', sub: 'shared world', tone: 'grass' },
  ],

  gallery: [
    { key: 'cover', title: 'Cover', caption: 'Player + bot + world. One frame that summarizes the demo.' },
    { key: 'gameplay_1', title: 'Gameplay · companion', caption: 'Bot following, gathering, acting in-world.' },
    { key: 'gameplay_2', title: 'Gameplay · embodied task', caption: 'Mining / gather / return / inventory.' },
    { key: 'dashboard', title: 'Dashboard', caption: 'Visible plan, state and traceability.' },
    { key: 'technical', title: 'Ollama + Gemma 4', caption: 'Local inference loop and compact world_state.' },
    { key: 'architecture', title: 'Architecture', caption: 'Hermes → Gemma-Andy → embodied-service → Mineflayer.' },
  ],
};
