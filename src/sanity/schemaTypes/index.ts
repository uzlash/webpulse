import { pageType, siteSettingsType } from "./documents";
import { ctaType, factType, officeType } from "./objects";
import { sectionTypes } from "./sections";

export const schemaTypes = [siteSettingsType, pageType, ctaType, factType, officeType, ...sectionTypes];
