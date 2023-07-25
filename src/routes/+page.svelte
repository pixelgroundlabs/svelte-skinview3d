<script>
  import Skinview3d from "$lib/Skinview3d.svelte";
  import { version } from "$app/environment";
  import Highlight from "svelte-highlight";
  import bash from "svelte-highlight/languages/bash";
  import xml from "svelte-highlight/languages/xml";

  import "../app.css";
  import "svelte-highlight/styles/github-dark.css";

  let uuid = "1279b4d9-cd87-487a-b812-dee3c7aae15b";
  $: skinUrl = `https://skins.xenyria.net/skins/${uuid}`;

  let width = 300;
  let height = 600;

  let uuidInput = uuid;

  const installationCode = `# npm
npm install svelte-skinview3d

# yarn
yarn add svelte-skinview3d

# pnpm
pnpm add svelte-skinview3d`;

  const usageCode = `<script>
  import Skinview3d from "svelte-skinview3d";
</\script>

<Skinview3d width={400} height={600} skinUrl="/textures/skin.png" capeUrl="/textures/cape.png" />`;
</script>

<main>
  <h1>svelte-skinview3d</h1>
  <p>
    Three.js powered Svelte component for rendering Minecraft skins. Based on
    <a href="https://github.com/bs-community/skinview3d">skinview3d</a>, inspired by
    <a href="https://github.com/Hacksore/react-skinview3d">react-skinview3d</a>, and developed by
    <a href="https://github.com/pixelground">Pixelground Labs</a>.
  </p>
  <h2>Showcase</h2>
  <div id="showcase">
    <div>
      <Skinview3d
        {width}
        {height}
        {skinUrl}
        options={{
          background: "#1e1e1e"
        }}
        style="border-radius: 15px;"
      />
    </div>
    <div style="width: 100%;">
      <div>
        <div style="margin-bottom: .5rem;"><span>Enter UUID for Skin</span></div>
        <input style="width: 100%; max-width: 17rem;" bind:value={uuidInput} placeholder="UUID" />
        <button
          style="margin-left: .25rem;"
          on:click={() => {
            console.log(uuidInput);
            uuid = uuidInput;
          }}>Set</button
        >
      </div>
    </div>
  </div>

  <h2>Installation</h2>

  <Highlight language={bash} code={installationCode} />

  <h2>Usage</h2>

  <Highlight language={xml} code={usageCode} />

  <h2>More Info</h2>

  <p>
    More information can be found in the <a href="https://github.com/pixelground/svelte-skinview3d"
      >GitHub Readme</a
    >
  </p>

  <footer>
    <p>
      <a href="https://github.com/pixelground/svelte-skinview3d">svelte-skinview3d</a>
      <a href={`https://github.com/pixelground/svelte-skinview3d/releases/tag/${version}`}
        >{version}</a
      >
      by
      <a href="https://github.com/pixelground">Pixelground Labs</a>
      under
      <a href="https://github.com/pixelground/svelte-skinview3d/blob/main/LICENSE.md">MIT License</a
      >
    </p>
  </footer>
</main>
