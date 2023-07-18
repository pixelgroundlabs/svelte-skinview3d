# svelte-skinview3d

Three.js powered Svelte component for rendering Minecraft skins. Based on [skinview3d](https://github.com/bs-community/skinview3d) and inspired by [react-skinview3d](https://github.com/Hacksore/react-skinview3d)

## Install

```bash
# npm
npm install svelte-skinview3d

# yarn
yarn add svelte-skinview3d

# pnpm
pnpm add svelte-skinview3d
```

## Usage

```svelte
<script>
  import Skinview3d from "svelte-skinview3d";
</script>

<Skinview3d width={400} height={600} skinUrl="/textures/skin.png" capeUrl="/textures/cape.png" />
```

## Props

### `class`

CSS class to apply to the canvas element.

### `width`

Width of the canvas element. `number | string` (required)

### `height`

Height of the canvas element. `number | string` (required)

### `skinUrl`

URL of the skin image. `string` (updates dynamically) (required)

### `capeUrl`

URL of the cape image. `string` (updates dynamically)

### `onReady`

Callback function that is called when the skin is loaded. `({ viewer, canvas }) => void`

### `options`

Options to pass to the skinview3d viewer minus `canvas`, `width`, `height`, `skin`, and `cape`. See [skinview3d Readme](https://github.com/bs-community/skinview3d#skinview3d) and [SkinViewerOptions interface](https://github.com/bs-community/skinview3d/blob/master/src/viewer.ts#L75-L223) for reference.

## License

`svelte-skinview3d` is presented to you by Pixelground Labs and is provided under the MIT license. See [LICENSE.md](LICENSE.md) for details.
