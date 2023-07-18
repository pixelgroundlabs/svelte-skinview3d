import type { SkinViewer } from "skinview3d";

export interface ViewerReadyCallbackOptions {
  viewer: SkinViewer;
  canvas: HTMLCanvasElement;
}
