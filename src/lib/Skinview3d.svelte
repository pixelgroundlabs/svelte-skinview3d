<script lang="ts">
  import { SkinViewer, type SkinViewerOptions } from "skinview3d";
  import type { ViewerReadyCallbackOptions } from "./types.js";
  import { onMount } from "svelte";

  export let width: number | string;
  export let height: number | string;
  export let skinUrl: string;
  export let capeUrl: string | undefined = undefined;
  export let onReady: (({ viewer, canvas }: ViewerReadyCallbackOptions) => void) | undefined =
    undefined;
  export let options:
    | Omit<SkinViewerOptions, "canvas" | "width" | "height" | "skin" | "cape">
    | undefined = undefined;

  let canvas: HTMLCanvasElement;
  let skinViewer: SkinViewer;

  onMount(() => {
    skinViewer = new SkinViewer({
      canvas,
      width: Number(width),
      height: Number(height),
      ...options
    });

    onReady && onReady({ viewer: skinViewer, canvas });
  });

  $: skinUrl && skinViewer && skinViewer.loadSkin(skinUrl);
  $: capeUrl && skinViewer && skinViewer.loadCape(capeUrl);
  $: width && height && skinViewer && skinViewer.setSize(Number(width), Number(height));
</script>

<canvas bind:this={canvas} {...$$restProps} />
