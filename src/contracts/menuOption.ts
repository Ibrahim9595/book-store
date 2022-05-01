import { FeatureHandler } from "./featureHandler";

export interface MenuOption {
  description: string;
  handler: FeatureHandler;
  terminate?: boolean;
}
