import type { BlogExtras } from "./helpers";
import { HEAT_EXTRAS } from "./extras-heat";
import { COLD_EXTRAS } from "./extras-cold";
import { LIGHT_EXTRAS } from "./extras-light";
import { AIR_EXTRAS } from "./extras-air";
import { RECOVERY_EXTRAS } from "./extras-recovery";
import { BUSINESS_EXTRAS } from "./extras-business";
import { AGEING_EXTRAS } from "./extras-ageing";

export const EXTRAS: BlogExtras = {
  ...HEAT_EXTRAS,
  ...COLD_EXTRAS,
  ...LIGHT_EXTRAS,
  ...AIR_EXTRAS,
  ...RECOVERY_EXTRAS,
  ...BUSINESS_EXTRAS,
  ...AGEING_EXTRAS,
};
