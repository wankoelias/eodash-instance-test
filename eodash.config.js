import { defineConfig } from "@eodash/eodash/config";

export default defineConfig({
  dev: {
    port: 3000,
  },
  vite:{
    optimizeDeps: {
      include: [
        "@eox/map",
        "@eox/map/src/plugins/advancedLayersAndSources",
        "@eox/jsonform",
        "@eox/layercontrol",
        "@eox/itemfilter",
        "@eox/timecontrol",
        "@eox/stacinfo",
      ],
    },
  }
});